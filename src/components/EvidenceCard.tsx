import type { EvidenceCardData } from "../data";

export type EvidenceCardProps = EvidenceCardData;

export function EvidenceCard({ title, body, bullets, source }: EvidenceCardProps) {
  return (
    <article className="evidence-card">
      <h3>{title}</h3>
      <div className="evidence-card__body">
        {body.map((paragraph, index) => (
          <p key={`${title}-body-${index}`}>{paragraph}</p>
        ))}
      </div>
      <ul className="evidence-card__bullets">
        {bullets.map((bullet, index) => (
          <li key={`${title}-bullet-${index}`}>{bullet}</li>
        ))}
      </ul>
      <p className="evidence-card__source">{source}</p>
    </article>
  );
}

