import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  LoaderCircle,
  Send,
} from "lucide-react";
import { profile } from "../content";

const formId =
  import.meta.env.VITE_FORMSPREE_KEY ||
  import.meta.env.VITE_FORMSPREE_FORM_ID ||
  "xkoayjdn";
const endpoint = formId.startsWith("https://")
  ? formId
  : `https://formspree.io/f/${formId}`;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [needsVerification, setNeedsVerification] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // A native POST lets Formspree show its verification page when required.
    if (
      (event.nativeEvent as SubmitEvent).submitter?.getAttribute(
        "data-verification",
      ) === "true"
    )
      return;
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    setStatus("sending");
    setNeedsVerification(false);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fields,
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        const details = JSON.stringify(result || "");
        setNeedsVerification(
          /recaptcha|captcha|verification|ajax/i.test(details),
        );
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <div className="contact-form-layout">
      <div className="contact-form-intro">
        <p className="eyebrow">
          <span>YOUR IDEA. MY INBOX.</span>
        </p>
        <h3>
          Tell me what
          <br />
          you have in mind<span>.</span>
        </h3>
        <p>
          Have a project, an opportunity, or a question? Send me a message right
          here.
        </p>
        <a className="text-link" href={`mailto:${profile.email}`}>
          Prefer email? <ArrowUpRight size={16} />
        </a>
      </div>
      <form
        className="contact-form"
        action={endpoint}
        method="POST"
        target="_blank"
        onSubmit={handleSubmit}
        aria-label="Send Aayush a message"
        aria-busy={status === "sending"}
        onChange={() => {
          if (status === "sent") setStatus("idle");
        }}
      >
        <input
          type="hidden"
          name="_subject"
          value="New message from Aayush's portfolio"
        />
        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="contact-company">Leave this field empty</label>
          <input
            id="contact-company"
            name="_gotcha"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <fieldset disabled={status === "sending"}>
          <div className="contact-field-row">
            <div className="contact-field">
              <label htmlFor="contact-name">
                Your name <span>*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                placeholder="What should I call you?"
                required
                maxLength={120}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">
                Email address <span>*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={254}
              />
            </div>
          </div>
          <div className="contact-field">
            <label htmlFor="contact-subject">
              Subject <small>OPTIONAL</small>
            </label>
            <input
              id="contact-subject"
              name="subject"
              placeholder="A project, an opportunity, a hello…"
              maxLength={200}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">
              Your message <span>*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me a little about your idea…"
              required
              rows={5}
              maxLength={10000}
            />
          </div>
        </fieldset>
        {status === "sent" && (
          <div className="form-notice form-success" role="status">
            <Check size={18} />
            <div>
              <b>Message sent. Thank you!</b>
              <p>I’ll get back to you at the email address you provided.</p>
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="form-notice form-error" role="alert">
            <AlertCircle size={18} />
            <div>
              <b>
                {needsVerification
                  ? "One more step to send your message."
                  : "Your message couldn’t be sent."}
              </b>
              <p>
                {needsVerification
                  ? "Continue to the verification page to finish sending."
                  : "Your message is still here. Try again, or email me directly."}
              </p>
              {needsVerification && (
                <button
                  className="verification-link"
                  type="submit"
                  data-verification="true"
                >
                  Continue with verification <ArrowUpRight size={13} />
                </button>
              )}
              <a href={`mailto:${profile.email}`}>Email {profile.email} ↗</a>
            </div>
          </div>
        )}
        <div className="contact-form-submit">
          <span>STRAIGHT FROM HERE TO MY INBOX.</span>
          <button
            className="button button-lime"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                Sending… <LoaderCircle size={17} className="send-spinner" />
              </>
            ) : (
              <>
                Send message <Send size={16} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
