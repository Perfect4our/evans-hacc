import type { Citation } from "../data";

export type CitationListProps = {
  citations: readonly Citation[];
};

export function CitationList({ citations }: CitationListProps) {
  return (
    <ol className="citation-list">
      {citations.map((citation, index) => (
        <li key={`${citation.label}-${index}`} className="citation-list__item">
          <strong>{citation.label}</strong>
          <span>{citation.description}</span>
        </li>
      ))}
    </ol>
  );
}

