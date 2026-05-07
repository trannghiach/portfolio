import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { PortfolioHero } from "@/components/hero/PortfolioHero";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";
import { SkillsSection } from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <>
      <PortfolioHero />
      <ProjectsShowcase />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}