import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload, HiMail } from "react-icons/hi";
import "./ContactSection.css";

const links = [
  {
    label: "Email",
    value: "lilsadfoqs@gmail.com",
    href: "mailto:lilsadfoqs@gmail.com",
    icon: <HiMail />,
  },
  {
    label: "GitHub",
    value: "github.com/trannghiach",
    href: "https://github.com/trannghiach",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lilsadfoqs",
    href: "https://www.linkedin.com/in/lilsadfoqs",
    icon: <FaLinkedin />,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    icon: <HiDownload />,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-grid" />

      <div className="contact-shell">
        <div className="contact-header">
          <p className="contact-kicker">/ contact</p>
          <h2>Let's collaborate!</h2>
        </div>

        <div className="contact-links">
          {links.map((link) => (
            <a
              key={link.label}
              className="contact-link"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="contact-link-icon">{link.icon}</span>

              <span className="contact-link-copy">
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </span>
            </a>
          ))}
        </div>

        <footer className="site-footer">
          <div className="footer-brand">
            <span className="footer-dot" />
            <span>lilsadfoqs</span>
            <span className="footer-line" />
          </div>

          <p>Built with Next.js and a lot of <span className="footer-highlight">cyan</span>.</p>
        </footer>
      </div>
    </section>
  );
}