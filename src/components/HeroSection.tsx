import type { HeroContent } from "../data";

type HeroSectionProps = HeroContent;

export function HeroSection({ title, lead, facts }: HeroSectionProps) {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="hero__copy">
        <h1 id="page-title">{title}</h1>
        <div className="hero__lead">
          {lead.map((paragraph, index) => (
            <p key={`hero-lead-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>

      <aside className="hero__panel" aria-label="Key threads">
        <div className="hero__panel-river" aria-hidden="true" />
        <ul className="hero__facts">
          {facts.map((fact, index) => (
            <li key={`${fact.title}-${index}`} className="hero__fact">
              <span className="hero__fact-title">{fact.title}</span>
              <span className="hero__fact-text">{fact.text}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

