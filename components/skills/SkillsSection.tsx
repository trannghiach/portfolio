import {
  SiDocker,
  SiFastapi,
  SiGo,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi, TbBrain, TbLockAccess, TbRouteAltLeft } from "react-icons/tb";
import "./SkillsSection.css";

type SkillGroup = {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
};

const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend Interfaces",
    description:
      "Building responsive product UIs, protected pages, dashboards, forms, and project case-study layouts.",
    icon: <SiNextdotjs />,
    tags: ["Next.js", "React", "TypeScript", "Forms", "Dashboards", "UI States"],
  },
  {
    id: "backend",
    index: "02",
    title: "Backend APIs",
    description:
      "Designing REST APIs with service-layer logic, validation, persistence, auth, and role-based permissions.",
    icon: <TbApi />,
    tags: ["Go", "Gin", "FastAPI", "REST", "JWT", "RBAC"],
  },
  {
    id: "data",
    index: "03",
    title: "Data & Messaging",
    description:
      "Working with relational data, async jobs, event pipelines, retries, and failure-state handling.",
    icon: <SiPostgresql />,
    tags: ["PostgreSQL", "Redis", "NATS", "Workers", "Retry", "DLQ"],
  },
  {
    id: "infra",
    index: "04",
    title: "Deployment & Ops",
    description:
      "Shipping small production-style services with Linux, Docker Compose, Nginx, domains, and EC2 deployment flows.",
    icon: <SiDocker />,
    tags: ["Linux", "Docker", "Nginx", "AWS EC2", "Systemd", "Domains"],
  },
  {
    id: "security",
    index: "05",
    title: "Security Workflow",
    description:
      "Designing scoped security tooling, auth boundaries, safe automation, artifact trails, and observable checks.",
    icon: <TbLockAccess />,
    tags: ["Auth", "Scope Gates", "CTF", "Pentest Flow", "Artifacts", "Triage"],
  },
  {
    id: "ai-workflow",
    index: "06",
    title: "AI-Assisted Build Flow",
    description:
      "Using coding agents to move faster while still reviewing architecture, endpoints, DTOs, tests, and behavior manually.",
    icon: <TbBrain />,
    tags: ["Codex", "Claude Code", "Gemini CLI", "Manual Review", "Debugging"],
  },
];

const techStrip = [
  { name: "Go", icon: <SiGo /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Nginx", icon: <SiNginx /> },
  { name: "AWS", icon: <FaAws /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg-grid" />

      <div className="skills-shell">
        <div className="skills-heading">
          <p className="skills-kicker">/ skills</p>

          <h2>My Technical Skills</h2>

          <p>
            Tech stack, tools, patterns, and workflows I use to ship.
          </p>
        </div>

        <div className="skills-strip" aria-label="Technology stack">
          {techStrip.map((tech) => (
            <div className="skills-strip-item" key={tech.name}>
              <span>{tech.icon}</span>
              <strong>{tech.name}</strong>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.id}>
              <div className="skill-card-top">
                <span className="skill-index">{group.index}</span>
                <span className="skill-icon">{group.icon}</span>
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-bottom-panel">
          <div className="skills-bottom-label">
            <TbRouteAltLeft />
            <span>operating pattern</span>
          </div>

          <p>
            I prefer building from the inside out: data model, API behavior,
            permission rules, failure cases, deployment shape, then UI. The goal
            is not just a nice screen — it is a system that can survive real
            usage.
          </p>
        </div>
      </div>
    </section>
  );
}