import {
  TbBolt,
  TbMessages,
  TbRefresh,
  TbShieldCheck,
} from "react-icons/tb";
import "./AboutSection.css";

const principles = [
  {
    index: "01",
    title: "Fast learner",
    description:
      "I can pick up new tools, codebases, and workflows quickly. When I do not know something, I break it down, test it, and learn by building.",
    icon: <TbBolt />,
  },
  {
    index: "02",
    title: "Adaptable teammate",
    description:
      "I am comfortable adjusting to different tasks, feedback, and team styles. I try to stay calm, ask better questions, and keep moving forward.",
    icon: <TbRefresh />,
  },
  {
    index: "03",
    title: "Clear communicator",
    description:
      "I can explain what I am doing, what is blocked, and what I need. I also use English comfortably for documentation, technical reading, and team communication.",
    icon: <TbMessages />,
  },
];

const facts = [
  ["based in", "Ho Chi Minh City"],
  ["english", "comfortable with technical reading and communication"],
  ["working style", "curious, patient, and practical"],
  ["currently", "looking for full-stack / backend / software engineering roles"],
];

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-bg-grid" />

      <div className="about-shell">
        <div className="about-left">
          <p className="about-kicker">/ about</p>

          <h2>More about me.</h2>

          <p className="about-lead">
            I play guitar, TFT and listen to PKLinh&apos;s music.
          </p>

          <div className="about-signal">
            <span className="about-signal-line" />
            <p>
              I&apos;m trying every day to become a better developer and a
              better person. I like learning new things, building projects, and
              connecting with people. I want to work on projects with real users
              and real problems, while continuing to improve my skills and the
              way I think.
            </p>
          </div>
        </div>

        <div className="about-panel">
          <div className="about-panel-top">
            <div>
              <span className="about-panel-label">packet</span>
              <h3>Profile</h3>
            </div>

            <span className="about-panel-status">
              <TbShieldCheck />
              verified by myself :&#41;
            </span>
          </div>

          <div className="principles-list">
            {principles.map((item) => (
              <article className="principle-card" key={item.index}>
                <div className="principle-icon">{item.icon}</div>

                <div>
                  <div className="principle-heading">
                    <span>{item.index}</span>
                    <h4>{item.title}</h4>
                  </div>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-terminal">
            <div className="about-terminal-top">
              <span />
              <span />
              <span />
            </div>

            <div className="about-terminal-body">
              {facts.map(([key, value]) => (
                <div className="about-terminal-row" key={key}>
                  <span className="terminal-key">$ {key}</span>
                  <span className="terminal-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}