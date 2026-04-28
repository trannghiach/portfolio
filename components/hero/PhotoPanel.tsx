import Image from "next/image";

export function PhotoPanel() {
  return (
    <div className="hero-visual">
      <div className="photo-frame">
        <div className="photo-inner">
          <Image
            src="/images/hero-guitar.png"
            alt="Moody guitar portrait with cyan scribbles"
            fill
            priority
          />

          <div className="hud-label">
            <span className="hud-corner" />
            <span>IMG_2024.png</span>
          </div>

          <div className="hud-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="hud-ticks">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="camera-meta">ISO 800 • 35MM • F/2.8 • 1/125</div>
        </div>
      </div>

      <div className="photo-glow" />
    </div>
  );
}