import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Command,
  FileText,
  Layers,
  Search,
  Sparkles,
} from "lucide-react";

export default function HeroWorkspace({ paused }: { paused: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 100, damping: 22 });
  const rotateY = useSpring(y, { stiffness: 100, damping: 22 });

  return (
    <div
      className="workspace-interaction"
      onPointerMove={(event) => {
        if (paused || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
        y.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="workspace-grid" aria-hidden="true" />
      <motion.div
        className="workspace-composition"
        style={{ rotateX: paused ? 0 : rotateX, rotateY: paused ? 0 : rotateY }}
      >
        <div className="code-window" aria-hidden="true">
          <div className="window-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>the way I think.ts</span>
            <Braces size={12} />
          </div>
          <div className="code-lines">
            <span>
              <small>01</small>
              <em>const</em> approach = {"{"}
            </span>
            <span>
              <small>02</small> curiosity: <b>"always on"</b>,
            </span>
            <span>
              <small>03</small> ideas: <b>"worth building"</b>,
            </span>
            <span>
              <small>04</small> details: <b>"never an afterthought"</b>
            </span>
            <span>
              <small>05</small>
              {"};"}
            </span>
          </div>
        </div>
        <a
          className="workspace-main"
          href="https://github.com/aayushtyagi00/memory-ai"
          target="_blank"
          rel="noreferrer"
          aria-label="Explore Memory AI on GitHub"
        >
          <div className="window-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>memory.ai / workspace</span>
            <ArrowUpRight size={12} />
          </div>
          <div className="workspace-app">
            <div className="workspace-sidebar" aria-hidden="true">
              <span className="workspace-appmark">
                <Layers size={17} />
              </span>
              <Command size={13} />
              <FileText size={13} />
              <Search size={13} />
              <span className="sidebar-avatar">AT</span>
            </div>
            <div className="workspace-app-body">
              <div className="workspace-app-nav">
                <span>YOUR PERSONAL KNOWLEDGE SPACE</span>
                <Sparkles size={13} />
              </div>
              <h3>
                A home for
                <br />
                everything you know<span>.</span>
              </h3>
              <div className="workspace-query">
                <Search size={13} />
                <span>Connect the dots in your memories</span>
                <span className="query-return">↵</span>
              </div>
              <div className="workspace-collections">
                <div>
                  <span>01 / COLLECT</span>
                  <FileText size={18} />
                  <b>Keep the thought.</b>
                  <small>Notes, files & screenshots</small>
                </div>
                <div>
                  <span>02 / CONNECT</span>
                  <Sparkles size={18} />
                  <b>Find the meaning.</b>
                  <small>Answers with sources</small>
                </div>
              </div>
              <div className="workspace-app-footer">
                <i /> BUILT TO MAKE INFORMATION USEFUL{" "}
                <ArrowUpRight size={10} />
              </div>
            </div>
          </div>
        </a>
        <a
          className="route-window"
          href="https://github.com/aayushtyagi00/resqroute-emergency-escape-planner"
          target="_blank"
          rel="noreferrer"
          aria-label="Explore ResQRoute on GitHub"
        >
          <div className="mini-route" aria-hidden="true">
            <svg viewBox="0 0 100 80" fill="none">
              <path
                d="M0 20H100M0 60H100M25 0V80M70 0V80"
                stroke="#9daa8c"
                strokeWidth="1"
                opacity=".35"
              />
              <path
                d="M15 65H40V25H83"
                stroke="#354b24"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <circle cx="15" cy="65" r="4" fill="#354b24" />
              <circle cx="83" cy="25" r="5" fill="#354b24" />
            </svg>
          </div>
          <div>
            <span>ANOTHER IDEA IN MOTION</span>
            <b>
              ResQRoute <ArrowUpRight size={14} />
            </b>
            <small>Technology with a purpose.</small>
          </div>
        </a>
      </motion.div>
    </div>
  );
}
