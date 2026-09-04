import DialogueCard from "./DialogueCard";

type PrincipleIcon = "question" | "people" | "layers" | "book" | "shield";

type Principle = {
  icon: PrincipleIcon;
  title: string;
  copy: string;
};

const principles: Principle[] = [
  {
    icon: "question",
    title: "Begin met een vraag",
    copy: "Niet met het antwoord dat al vaststaat.",
  },
  {
    icon: "people",
    title: "Denk samen",
    copy: "Een idee wordt scherper wanneer het weerstand ontmoet.",
  },
  {
    icon: "layers",
    title: "Zie de lijn",
    copy: "Volg aannames, argumenten en tegenvragen.",
  },
  {
    icon: "book",
    title: "Bouw filosofieën",
    copy: "Gedachten mogen groeien, botsen en veranderen.",
  },
  {
    icon: "shield",
    title: "Bescherm het gesprek",
    copy: "Vrijheid van denken, zonder vernedering of ruis.",
  },
];

const questions = [
  "Wat blijft er van een overtuiging over wanneer niemand haar hoeft te verdedigen?",
  "Kan twijfel een vorm van moed zijn?",
  "Wanneer wordt een gesprek werkelijk publiek?",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "icon icon--diagonal" : "icon"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PrincipleMark({ icon }: { icon: PrincipleIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className="principle-mark">
      {icon === "question" && (
        <>
          <path
            {...common}
            d="M8 18.5C8 11.6 13.4 7 20.4 7S33 11.6 33 18.5 27.6 30 20.4 30c-2 0-3.8-.4-5.5-1.1L9 33l1.4-6.5A10.9 10.9 0 0 1 8 18.5Z"
          />
          <path
            {...common}
            d="M17.4 15.6a3.2 3.2 0 0 1 6.2 1.1c0 2.7-3.3 2.8-3.3 5.2M20.3 25.4h.01"
          />
        </>
      )}
      {icon === "people" && (
        <>
          <circle {...common} cx="15.2" cy="14.2" r="5.2" />
          <circle {...common} cx="26.5" cy="13" r="4.4" />
          <path
            {...common}
            d="M5.8 31c.4-6.1 4-9.3 9.4-9.3s9 3.2 9.4 9.3M23.8 21.3c5.2-.4 9.4 2.6 10.3 8"
          />
        </>
      )}
      {icon === "layers" && (
        <>
          <path {...common} d="m20 6 14 7-14 7L6 13l14-7Z" />
          <path {...common} d="m7.5 19 12.5 6 12.5-6M7.5 25l12.5 6 12.5-6" />
        </>
      )}
      {icon === "book" && (
        <>
          <path
            {...common}
            d="M6.5 8.5h9.2c2.5 0 4.3 1.5 4.3 4v20c0-2.5-1.8-4-4.3-4H6.5v-20Z"
          />
          <path
            {...common}
            d="M33.5 8.5h-9.2c-2.5 0-4.3 1.5-4.3 4v20c0-2.5 1.8-4 4.3-4h9.2v-20Z"
          />
        </>
      )}
      {icon === "shield" && (
        <>
          <path
            {...common}
            d="M20 5.5c3.3 2.2 7.2 3.4 11.5 3.7v9.2c0 7.5-4.2 13-11.5 16.1C12.7 31.4 8.5 25.9 8.5 18.4V9.2C12.8 8.9 16.7 7.7 20 5.5Z"
          />
          <path {...common} d="m14.5 20 3.5 3.5 7.8-8" />
        </>
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="hero" id="boven">
        <nav className="nav shell" aria-label="Hoofdnavigatie">
          <a className="brand" href="#boven" aria-label="Civiora home">
            CIVIORA<span>.</span>
          </a>

          <div className="nav__center">
            <a href="#uitgangspunt">Het uitgangspunt</a>
            <a href="#richting">De richting</a>
          </div>

          <a className="nav__action" href="#meedoen">
            Denk mee <Arrow diagonal />
          </a>
        </nav>

        <div
          className="hero__art"
          role="img"
          aria-label="Socrates omringd door mensen in gesprek"
        >
          <div className="hero__art-image" />
        </div>
      </header>

      <section className="hero-copy-section" aria-labelledby="hero-title">
        <div className="hero__copy shell">
          <p className="eyebrow">EEN PUBLIEK SOCIAL MEDIA-EXPERIMENT</p>
          <h1 id="hero-title">
            Wat als social media niet begon met een antwoord, <em>maar met een vraag?</em>
          </h1>
          <p className="hero__intro">
            Civiora onderzoekt een nieuw sociaal kanaal waarin mensen niet worden samengebracht rond de hardste mening, maar rond maatschappelijke vragen die te groot zijn om alleen te beantwoorden.
          </p>
        </div>
      </section>

      <section className="principles" id="uitgangspunt" aria-labelledby="principles-title">
        <h2 className="visually-hidden" id="principles-title">
          Het uitgangspunt van Civiora
        </h2>
        <div className="principles__grid shell">
          {principles.map((principle) => (
            <article className="principle" key={principle.title}>
              <PrincipleMark icon={principle.icon} />
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dialogue-section" id="richting">
        <div className="dialogue-section__glow" aria-hidden="true" />
        <div className="split shell">
          <div className="section-copy">
            <p className="eyebrow">HOE HET KAN VOELEN</p>
            <h2>
              Geen eindeloze reacties.
              <br />
              Een gesprek dat <em>ergens naartoe beweegt.</em>
            </h2>
            <p>
              Niet luider spreken, maar preciezer kijken. Civiora laat zien waar een gedachte begint, waar zij botst en welke vraag daarna overblijft.
            </p>
            <a className="text-link" href="#vragen">
              Ontdek de denkwijze <Arrow />
            </a>
          </div>

          <DialogueCard />
        </div>
      </section>

      <section className="questions" id="vragen">
        <div className="questions__head shell">
          <p className="eyebrow">VRAGEN DIE KUNNEN BEGINNEN</p>
          <p className="questions__aside">Niet om snel te beantwoorden, maar om samen open te maken.</p>
        </div>

        <div className="question-list shell">
          {questions.map((question, index) => (
            <article className="question" key={question}>
              <span className="question__number">0{index + 1}</span>
              <h2>{question}</h2>
              <span className="question__arrow" aria-hidden="true">
                <Arrow diagonal />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" aria-label="Gedachte">
        <div className="statement__line" aria-hidden="true" />
        <div className="statement__inner shell">
          <p>
            Misschien begint een betere publieke ruimte niet met meer meningen, maar met <em>betere vragen.</em>
          </p>
        </div>
      </section>

      <section className="participate" id="meedoen">
        <div className="participate__orb" aria-hidden="true" />
        <div className="participate__inner shell">
          <div>
            <p className="eyebrow">CIVIORA IS NOG EEN EXPERIMENT</p>
            <h2>Samen bouwen we aan een nieuwe publieke ruimte.</h2>
          </div>
          <div className="participate__action">
            <p>
              Volg het idee terwijl het groeit. Denk mee over de vorm, de vragen en de ruimte die daarvoor nodig is.
            </p>
            <a className="button" href="#boven">
              Denk mee over Civiora <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner shell">
          <a className="brand brand--footer" href="#boven" aria-label="Terug naar boven">
            C<span>.</span>
          </a>
          <p>
            Een openbaar experiment in samen denken.
            <br />
            Voor burgers. Door burgers.
          </p>
          <div className="footer__links">
            <a href="#uitgangspunt">Over Civiora</a>
            <a href="#richting">De denkwijze</a>
            <a href="#meedoen">Denk mee</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
