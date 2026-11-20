import { ArrowUpRight } from "lucide-react";

const certificates = [
  {
    title: "Google AI Essentials",
    issuer: "Google · Coursera",
    date: "October 4, 2026",
    image: "google-ai-essentials.jpg",
    verify: "https://www.coursera.org/verify/specialization/I57DFFTOMANL",
  },
  {
    title: "Google Prompting Essentials",
    issuer: "Google · Coursera",
    date: "October 5, 2026",
    image: "google-prompting-essentials.jpg",
    verify: "https://www.coursera.org/verify/specialization/FKH2I02GBC3C",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft · LinkedIn Learning",
    date: "October 6, 2026",
    image: "generative-ai-career-essentials.jpg",
    verify: "https://www.linkedin.com/learning/certificates/49655ad371dcae66201df24c6f0b72716e69e177b1c668b6944999b26666d09b",
  },
  {
    title: "Code Heist Hackathon",
    issuer: "THRYVE · Lovely Professional University",
    date: "September 18–19, 2026",
    image: "code-heist.jpg",
    note: "Certificate of participation",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certification-section wrap">
      <div className="section-heading">
        <h2>Certifications</h2>
      </div>
      <div className="certification-grid">
        {certificates.map(({ title, issuer, date, image, verify, note }) => (
          <article className="certification-card" key={title}>
            <a
              className="certification-image"
              href={`/certificates/${image}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`View certificate for ${title}`}
            >
              <img
                src={`/certificates/${image}`}
                alt={`${title} certificate issued to Aayush Tyagi`}
                loading="lazy"
                decoding="async"
              />
            </a>
            <div className="certification-content">
              <p>{issuer}</p>
              <h3>{title}</h3>
              <p>{date}{note && <><br />{note}</>}</p>
              <a
                className="text-link"
                href={verify || `/certificates/${image}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`${verify ? "Verify credential" : "View certificate"} for ${title}`}
              >
                {verify ? "Verify credential" : "View certificate"}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
