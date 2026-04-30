import { AnchorNav } from "./components/AnchorNav";
import { CitationList } from "./components/CitationList";
import { EvidenceCard } from "./components/EvidenceCard";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";
import { TransferStrip } from "./components/TransferStrip";
import {
  citations,
  conclusionSection,
  citySection,
  heroContent,
  importanceIntro,
  mathematicsCard,
  medicineCard,
  networkSection,
  siteNavLinks,
  transferSteps,
} from "./data";

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__bar">
          <div className="site-brand">
            <span className="site-brand__name">Baghdad</span>
            <span className="site-brand__tag">An editorial history brief</span>
          </div>
          <AnchorNav links={siteNavLinks} />
        </div>
      </header>

      <main id="main-content" className="page__main">
        <HeroSection {...heroContent} />

        <StorySection {...citySection} />

        <section className="section-band" id="why-baghdad-is-the-most-important-stop" aria-labelledby="importance-title">
          <div className="section-band__inner">
            <div className="section-band__lead">
              <h2 id="importance-title">Why Baghdad is the Most Important Stop</h2>
              <div className="section-band__intro">
                {importanceIntro.map((paragraph, index) => (
                  <p key={`importance-intro-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="evidence-grid">
              <EvidenceCard {...mathematicsCard} />
              <EvidenceCard {...medicineCard} />
            </div>

            <p className="section-band__closing">
              Because of these achievements, Baghdad was not just a stop - it was a turning point in global intellectual history.
            </p>
          </div>
        </section>

        <StorySection {...networkSection} />

        <section className="section-band section-band--closing" aria-labelledby="transfer-title">
          <div className="section-band__inner">
            <div className="section-band__lead">
              <h2 id="transfer-title">How Knowledge Moved</h2>
              <p className="section-band__caption">
                The sequence below follows the path from survival to translation to westward transmission.
              </p>
            </div>

            <TransferStrip steps={transferSteps} />
          </div>
        </section>

        <StorySection {...conclusionSection} />

        <footer className="works-cited" id="works-cited" aria-labelledby="works-cited-title">
          <div className="works-cited__inner">
            <h2 id="works-cited-title">Works Cited</h2>
            <CitationList citations={citations} />
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

