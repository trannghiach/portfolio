import "./PortfolioHero.css";
import { LeftHero } from "./LeftHero";
import { PhotoPanel } from "./PhotoPanel";
import { TopBrand } from "./TopBrand";

export function PortfolioHero() {
  return (
    <section className="hero">
      <div className="hero-shell">
        <TopBrand />

        <div className="hero-content">
          <LeftHero />
          <PhotoPanel />
        </div>
      </div>
    </section>
  );
}