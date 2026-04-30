import type { TransferStep } from "../data";

type TransferStripProps = {
  steps: readonly TransferStep[];
};

export function TransferStrip({ steps }: TransferStripProps) {
  return (
    <div className="transfer-strip" aria-label="Knowledge transfer path">
      {steps.map((step, index) => (
        <article key={`${step.title}-${index}`} className="transfer-strip__step">
          <span className="transfer-strip__index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  );
}

