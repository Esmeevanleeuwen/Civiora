"use client";

import Image from "next/image";
import { type ReactNode, useState } from "react";

type TabKey = "Samenvatting" | "Argumenten" | "Tegenvragen" | "Onbeantwoord";

type DialogueItem = {
  initials: string;
  text: string;
  count: number;
};

const dialogueContent: Record<TabKey, DialogueItem[]> = {
  Samenvatting: [
    {
      initials: "SA",
      text: "De vraag botst tussen gelijke kansen en individuele vrijheid.",
      count: 18,
    },
    {
      initials: "MN",
      text: "Het gesprek draait nog om wat we precies onder vrijheid verstaan.",
      count: 11,
    },
    {
      initials: "IK",
      text: "Over de grens van aanvaardbare ongelijkheid bestaat nog geen overeenstemming.",
      count: 9,
    },
  ],
  Argumenten: [
    {
      initials: "SA",
      text: "Vrijheid zonder gelijke kansen is een illusie.",
      count: 42,
    },
    {
      initials: "MN",
      text: "Maar volledige gelijkheid beperkt juist individuele vrijheid.",
      count: 28,
    },
    {
      initials: "IK",
      text: "Welk niveau van ongelijkheid is nog legitiem?",
      count: 15,
    },
  ],
  Tegenvragen: [
    {
      initials: "EL",
      text: "Kan iemand vrij zijn wanneer de beschikbare keuzes vooraf ongelijk zijn verdeeld?",
      count: 31,
    },
    {
      initials: "RB",
      text: "Wie bepaalt welke verschillen rechtvaardig zijn?",
      count: 23,
    },
    {
      initials: "JV",
      text: "Is vrijheid een persoonlijke toestand of een maatschappelijke verhouding?",
      count: 19,
    },
  ],
  Onbeantwoord: [
    {
      initials: "?",
      text: "Wanneer wordt bescherming tegen ongelijkheid zelf een vorm van macht?",
      count: 17,
    },
    {
      initials: "?",
      text: "Kan een samenleving werkelijk neutraal zijn tegenover vrijheid?",
      count: 13,
    },
    {
      initials: "?",
      text: "Wat zou ieder standpunt in dit gesprek kunnen veranderen?",
      count: 8,
    },
  ],
};

const features: Array<{
  title: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    title: "Begin met een vraag",
    description: "Stel een vraag, deel een idee of onderzoek een maatschappelijk thema.",
    icon: <QuestionIcon />,
  },
  {
    title: "Samen denken",
    description: "Reageer, bevraag, verduidelijk en bouw samen aan beter begrip.",
    icon: <PeopleIcon />,
  },
  {
    title: "Structuur boven ruis",
    description: "Gesprekken zijn overzichtelijk, respectvol en gericht op de inhoud.",
    icon: <LayersIcon />,
  },
  {
    title: "Filosofie voor iedereen",
    description: "Ontdek, volg of ontwikkel filosofieën die je raken en uitdagen.",
    icon: <BookIcon />,
  },
  {
    title: "Veilige ruimte",
    description: "Vrijheid van denken, zonder haat, manipulatie of persoonlijke aanvallen.",
    icon: <ShieldIcon />,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("Argumenten");

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Civiora, terug naar boven">
          CIVIORA<span>.</span>
        </a>

        <nav className="primary-nav" aria-label="Hoofdnavigatie">
          <a href="#uitgangspunt">Het uitgangspunt</a>
          <a href="#richting">De richting</a>
        </nav>

        <a className="header-action" href="#denk-mee">
          Denk mee <ArrowUpRightIcon />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-visual" aria-hidden="true">
            <Image
              className="hero-image"
              src="/civiora-hero.avif"
              alt=""
              width={720}
              height={417}
              priority
              sizes="100vw"
            />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Een publiek socialmedia-experiment</p>
            <h1 id="hero-title">
              Wat als social media niet begon met een antwoord, <em>maar met een vraag?</em>
            </h1>
            <p className="hero-intro">
              Civiora onderzoekt een nieuw sociaal kanaal waarin mensen niet worden
              samengebracht rond de hardste mening, maar rond maatschappelijke vragen die te
              groot zijn om alleen te beantwoorden.
            </p>
            <a className="scroll-cue" href="#uitgangspunt" aria-label="Ga naar het uitgangspunt">
              <ChevronDownIcon />
            </a>
          </div>
        </section>

        <section className="feature-strip" id="uitgangspunt" aria-label="De uitgangspunten van Civiora">
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature" key={feature.title}>
                <div className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dialogue-section" id="richting" aria-labelledby="dialogue-heading">
          <div className="section-copy">
            <p className="eyebrow">Hoe het werkt</p>
            <h2 id="dialogue-heading">
              Geen eindeloze reacties.
              <br />
              Een helder gesprek.
            </h2>
            <p>
              Civiora helpt gesprekken te verdiepen. Niet door meer meningen, maar door betere
              vragen, duidelijke structuur en oprechte aandacht voor elkaar.
            </p>
            <a className="outline-button" href="#gesprek">
              Ontdek hoe het werkt <ArrowRightIcon />
            </a>
          </div>

          <div className="dialogue-card" id="gesprek">
            <div className="question-head">
              <div>
                <span>Vraag</span>
                <h3>Wat betekent vrijheid in een wereld vol ongelijkheid?</h3>
              </div>
              <div className="participants" aria-label="Meer dan 124 deelnemers">
                <span>SA</span>
                <span>MN</span>
                <span>IK</span>
                <b>+124</b>
              </div>
            </div>

            <div className="dialogue-tabs" role="tablist" aria-label="Onderdelen van het gesprek">
              {(Object.keys(dialogueContent) as TabKey[]).map((tab) => (
                <button
                  aria-selected={activeTab === tab}
                  className={activeTab === tab ? "active" : ""}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="dialogue-list" role="tabpanel">
              {dialogueContent[activeTab].map((item, index) => (
                <article className="dialogue-item" key={`${activeTab}-${index}`}>
                  <span className="avatar" aria-hidden="true">
                    {item.initials}
                  </span>
                  <p>{item.text}</p>
                  <span className="support-count">
                    {item.count} <ArrowUpIcon />
                  </span>
                </article>
              ))}
            </div>

            <button className="question-button" type="button">
              Voeg een tegenvraag toe <PlusIcon />
            </button>
          </div>
        </section>

        <section className="interlude" aria-labelledby="interlude-heading">
          <span className="interlude-line" aria-hidden="true" />
          <p className="eyebrow">Niet sneller antwoorden</p>
          <h2 id="interlude-heading">Eerst ontdekken wat we eigenlijk bedoelen.</h2>
          <p>Welke vraag zou jij durven openlaten?</p>
        </section>

        <section className="invitation" id="denk-mee" aria-labelledby="invitation-heading">
          <div className="invitation-glow" aria-hidden="true" />
          <div className="invitation-copy">
            <h2 id="invitation-heading">
              Samen bouwen we aan
              <br />
              <span>een nieuwe publieke ruimte.</span>
            </h2>
            <p>
              Civiora is nog in ontwikkeling. Denk mee over de toekomst en help mee vormgeven
              aan een platform dat denken weer centraal zet.
            </p>
          </div>

          <div className="invitation-actions">
            <a
              className="primary-button"
              href="https://github.com/Esmeevanleeuwen/Civiora"
              rel="noreferrer"
              target="_blank"
            >
              Volg de ontwikkeling <ArrowUpRightIcon />
            </a>
            <a className="quiet-link" href="#uitgangspunt">
              Lees het uitgangspunt <ArrowRightIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-statement">
          <span className="footer-mark">C.</span>
          <p>
            Civiora is een openbaar experiment in samen denken.
            <br />
            Voor burgers. Door burgers.
          </p>
        </div>
        <nav aria-label="Voetnavigatie">
          <a href="#uitgangspunt">Over Civiora</a>
          <a href="#richting">Principes</a>
          <a href="#denk-mee">Denk mee</a>
        </nav>
        <p className="footer-note">Denken begint met een vraag.</p>
      </footer>
    </div>
  );
}

function QuestionIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M23.8 39.5c10.1 0 18.2-7.5 18.2-16.8S33.9 6 23.8 6 5.5 13.5 5.5 22.7c0 4.2 1.7 8.1 4.6 11.1L8.3 42l9-3.9c2 .9 4.2 1.4 6.5 1.4Z" />
      <path d="M18.7 18.2c.5-3 2.6-4.8 5.7-4.8 3.4 0 5.8 2 5.8 5 0 4-4.6 4.3-4.6 8.2" />
      <path d="M25.6 32.4h.1" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="19" cy="15" r="7" />
      <path d="M5.5 39v-4.7c0-5.4 4.4-9.8 9.8-9.8h7.4c5.4 0 9.8 4.4 9.8 9.8V39" />
      <path d="M31 9.5c4.2 0 7.5 3.4 7.5 7.5s-3.3 7.5-7.5 7.5" />
      <path d="M34.5 26c4.7.8 8 4.9 8 9.6V39" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="m24 5 19 10-19 10L5 15 24 5Z" />
      <path d="m8 23 16 8.4L40 23" />
      <path d="m8 31 16 8.4L40 31" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 39V12.5C20.7 8.2 15.7 6 9 6c-1.7 0-3 .4-4 .9v27c1-.5 2.3-.9 4-.9 6.7 0 11.7 2 15 6Z" />
      <path d="M24 39V12.5C27.3 8.2 32.3 6 39 6c1.7 0 3 .4 4 .9v27c-1-.5-2.3-.9-4-.9-6.7 0-11.7 2-15 6Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 43S40 35.8 40 21.6V8.8L24 4 8 8.8v12.8C8 35.8 24 43 24 43Z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 14 14 4M6 4h8v8" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 10h14M12 5l5 5-5 5" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 13V3M4 7l4-4 4 4" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 8 7 7 7-7" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 3v12M3 9h12" />
    </svg>
  );
}
