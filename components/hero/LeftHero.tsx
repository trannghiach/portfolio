import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { SideRail } from "./SideRail";

export function LeftHero() {
    return (
        <div className="hero-left">
            <SideRail />

            <h1 className="hero-title">
                <span>Turning</span>
                <span className="cyan">Noise Into</span>
                <span>Working</span>
                <span className="cyan">Systems.</span>
            </h1>

            <div className="hero-divider" />

            <p className="hero-subtitle">
                An engineer building web applications, agentic tools, and
                play CTFs
            </p>

            <div className="hero-actions">
                <a href="#projects" className="hero-button">
                    View Projects
                    <HiArrowRight />
                </a>

                <a
                    href="https://github.com/trannghiach"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-button secondary"
                >
                    GitHub
                    <FaGithub />
                </a>
            </div>

            <div className="hero-status">
                <span>&gt;_</span>
                <strong>~/status: building</strong>
                <span className="status-dot" />
                <span>Ho Chi Minh City</span>
                <span className="status-line" />
            </div>
        </div>
    );
}