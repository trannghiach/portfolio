"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";
import {
  ProjectChallenge,
  ProjectFlagSubmit,
} from "./ProjectFlagSubmit";
import "./ProjectsShowcase.css";

type Project = {
  id: string;
  index: string;
  title: string;
  type: string;
  status: string;
  description: string;
  problem: string;
  highlights: string[];
  tech: string[];
  github?: string;
  caseStudy?: string;
  challenge?: ProjectChallenge;
  media: {
    src: string;
    alt: string;
    label: string;
  };
  meta: {
    role: string;
    focus: string;
    stack: string;
  };
};

const projects: Project[] = [
  {
    id: "support-dashboard",
    index: "01",
    title: "Support Dashboard",
    type: "Full-stack support platform",
    status: "deployed",
    description:
      "A customer support ticketing system with JWT authentication, role-based access control, ticket lifecycle rules, replies, and assignment workflows.",
    problem:
      "Built to practice designing real full-stack application logic, not just static frontend screens.",
    highlights: [
      "JWT auth with customer, agent, and admin roles",
      "Ticket state machine with invalid transition protection",
      "Role-based permissions for replies, assignment, and status updates",
      "PostgreSQL-backed backend with production-style Docker deployment",
    ],
    tech: ["Go", "Gin", "PostgreSQL", "Next.js", "JWT", "RBAC", "Docker", "EC2"],
    github: "https://github.com/trannghiach/support-dashboard",
    caseStudy: "https://sd.lilsadfoqs.dev",
    challenge: {
      projectId: "support-dashboard",
      title: "AI Assitant? How cool!",
      category: "web",
      difficulty: "easy",
      points: 36,
      prompt:
        "Some roles can see more than the others. Find the flag hidden behind the support workflow.",
      reward: {
        badge: "The Terminator",
        notes:
          "Become the one AI fears most.",
      },
    },
    media: {
      src: "/projects/support-dashboard.gif",
      alt: "Support Dashboard interface preview",
      label: "SUPPORT_DASHBOARD.GIF",
    },
    meta: {
      role: "Full-stack Developer",
      focus: "Auth, RBAC, backend business logic",
      stack: "Go API + Next.js + PostgreSQL",
    },
  },
  {
    id: "relayops",
    index: "02",
    title: "RelayOps",
    type: "Event-driven workflow backend",
    status: "deployed",
    description:
      "An event-driven notification and workflow platform that receives events, plans async jobs, runs workers, retries failures, and dead-letters exhausted jobs.",
    problem:
      "Built to explore backend reliability patterns: async work, retries, job states, event pipelines, and failure handling.",
    highlights: [
      "Event ingestion API with structured event payloads",
      "NATS-based event flow with worker-side job planning",
      "Retry and backoff model with delivery attempt records",
      "Dead-letter handling for jobs that permanently fail",
    ],
    tech: ["Go", "PostgreSQL", "NATS", "Docker", "Workers", "Retry", "DLQ"],
    github: "https://github.com/trannghiach/relayops",
    caseStudy: "https://relayops.lilsadfoqs.dev",
    challenge: {
      projectId: "relayops",
      title: "Dead Letter",
      category: "web",
      difficulty: "easy",
      points: 36,
      prompt:
        "Some classic vulnerability.",
      reward: {
        badge: "SQLi God",
        notes:
          "Tell me you did not use AI to solve this :Đ.",
      },
    },
    media: {
      src: "/projects/relayops.gif",
      alt: "RelayOps event workflow preview",
      label: "RELAYOPS_FLOW.GIF",
    },
    meta: {
      role: "Backend Developer",
      focus: "Async jobs, reliability, event processing",
      stack: "Go + NATS + PostgreSQL",
    },
  },
  {
    id: "seedance-apiize",
    index: "03",
    title: "Seedance 2.0 APIze",
    type: "Local AI video API wrapper",
    status: "released",
    description:
      "An unofficial local REST API wrapper for Dreamina / Seedance 2.0. It uses Playwright to control the web UI, submit video generation jobs, track status, and download generated MP4 files through API endpoints.",
    problem:
      "Built because there was no public Seedance 2.0 API available, but the web UI could still be automated into a usable local API for personal tools and workflows.",
    highlights: [
      "Exposes REST endpoints for video generation, job polling, health checks, and MP4 downloads",
      "Supports multipart form input for prompts, reference images, start/end frames, aspect ratio, duration, and model selection",
      "Uses a persistent Playwright Chromium session so the user can log in once and reuse the Dreamina account session",
      "Runs generation through an async job queue with pending, processing, done, and failed states",
    ],
    tech: [
      "Go",
      "Playwright",
      "Chromium",
      "REST API",
      "Multipart",
      "Async Queue",
      "CLI",
    ],
    github: "https://github.com/trannghiach/Seedance-2.0-APIze",
    caseStudy: "#",
    media: {
      src: "/projects/seedance-apiize.png",
      alt: "Seedance 2.0 APIze local REST API wrapper preview",
      label: "SEEDANCE_APIIZE.PNG",
    },
    meta: {
      role: "Backend / Automation Developer",
      focus: "API wrapper, browser automation, async job flow",
      stack: "Go + Playwright + REST",
    },
  },
];

export function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = useMemo(() => projects[activeIndex], [activeIndex]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg-grid" />

      <div className="projects-shell">
        <div className="projects-heading">
          <p className="projects-kicker">/ projects</p>

          <h2>Some projects I&apos;ve worked on.</h2>

          <p>I built a lot :Đ.</p>
        </div>

        <div className="projects-board">
          <aside className="project-selector" aria-label="Project selector">
            <div className="selector-header">
              <span>project archive</span>
              <span>{activeProject.index}/03</span>
            </div>

            <div className="selector-list">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={project.id}
                    type="button"
                    className={`selector-item ${isActive ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                  >
                    <span className="selector-index">{project.index}</span>

                    <span className="selector-copy">
                      <span className="selector-title">{project.title}</span>
                      <span className="selector-type">{project.type}</span>
                    </span>

                    <span className="selector-arrow" aria-hidden="true">
                      <HiArrowRight />
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="project-panel">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                className="project-card"
                initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="project-card-top">
                  <div>
                    <p className="project-type">{activeProject.type}</p>
                    <h3>{activeProject.title}</h3>
                  </div>

                  <span className="project-status">
                    {activeProject.status}
                  </span>
                </div>

                <p className="project-description">
                  {activeProject.description}
                </p>

                <ProjectMedia project={activeProject} />

                <div className="project-problem">
                  <span>why it exists</span>
                  <p>{activeProject.problem}</p>
                </div>

                <div className="project-content-grid">
                  <div className="project-highlights">
                    <span className="block-label">core work</span>

                    <ul>
                      {activeProject.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <ProjectTerminal project={activeProject} />
                </div>

                <div className="tech-stack" aria-label="Tech stack">
                  {activeProject.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={activeProject.github || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className={`project-link ${
                      !activeProject.github || activeProject.github === "#"
                        ? "disabled"
                        : ""
                    }`}
                    aria-disabled={
                      !activeProject.github || activeProject.github === "#"
                    }
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={activeProject.caseStudy || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className={`project-link secondary ${
                      !activeProject.caseStudy ||
                      activeProject.caseStudy === "#"
                        ? "disabled"
                        : ""
                    }`}
                    aria-disabled={
                      !activeProject.caseStudy ||
                      activeProject.caseStudy === "#"
                    }
                  >
                    <HiExternalLink />
                    Case Study
                  </a>
                </div>
                {activeProject.challenge && (
                  <ProjectFlagSubmit challenge={activeProject.challenge} />
                )}
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className="project-media-frame">
      <div className="project-media-inner">
        <img
          src={project.media.src}
          alt={project.media.alt}
          className="project-media-image"
          loading="lazy"
        />

        <div className="project-media-overlay" />

        <div className="project-media-label">
          <span className="project-media-corner" />
          <span>{project.media.label}</span>
        </div>

        <div className="project-media-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function ProjectTerminal({ project }: { project: Project }) {
  return (
    <div className="project-terminal">
      <div className="terminal-top" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="terminal-lines">
        <p>
          <span>$</span> role
        </p>
        <strong>{project.meta.role}</strong>

        <p>
          <span>$</span> focus
        </p>
        <strong>{project.meta.focus}</strong>

        <p>
          <span>$</span> stack
        </p>
        <strong>{project.meta.stack}</strong>
      </div>
    </div>
  );
}