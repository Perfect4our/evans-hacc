import type { StorySectionData } from "../data";

export type StorySectionProps = StorySectionData;

export function StorySection({ id, title, body, bullets, aside }: StorySectionProps) {
  return (
    <section className="story-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="story-section__inner">
        <div className="story-section__main">
          <h2 id={`${id}-title`}>{title}</h2>
          <div className="story-section__body">
            {body.map((paragraph, index) => (
              <p key={`${id}-body-${index}`}>{paragraph}</p>
            ))}
          </div>

          {bullets.length > 0 ? (
            <ul className="story-section__bullets">
              {bullets.map((bullet, index) => (
                <li key={`${id}-bullet-${index}`}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>

        {aside ? (
          <aside className="story-section__aside" aria-label={`${title} aside`}>
            <h3>{aside.title}</h3>
            <ul>
              {aside.items.map((item, index) => (
                <li key={`${id}-aside-${index}`}>{item}</li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </section>
  );
}

