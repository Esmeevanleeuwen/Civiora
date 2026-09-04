"use client";

import { useRef, useState, type KeyboardEvent } from "react";

type DialogueTab = "summary" | "arguments" | "counterquestions" | "open";

type DialogueItem = {
  mark: string;
  markType: "avatar" | "summary" | "question" | "open";
  text: string;
  meta: string;
};

const tabs: ReadonlyArray<{ id: DialogueTab; label: string }> = [
  { id: "summary", label: "Samenvatting" },
  { id: "arguments", label: "Argumenten" },
  { id: "counterquestions", label: "Tegenvragen" },
  { id: "open", label: "Open" },
];

const dialogueContent: Record<DialogueTab, readonly DialogueItem[]> = {
  summary: [
    {
      mark: "S",
      markType: "summary",
      text: "Het gesprek onderzoekt of vrijheid voor iedereen dezelfde betekenis heeft wanneer kansen ongelijk verdeeld zijn.",
      meta: "Kern",
    },
    {
      mark: "≠",
      markType: "summary",
      text: "De belangrijkste spanning ligt tussen gelijke kansen en de ruimte voor individuele vrijheid.",
      meta: "Spanning",
    },
    {
      mark: "…",
      markType: "summary",
      text: "Er is nog geen eindantwoord; eerst moet duidelijk worden welke verschillen een samenleving kan rechtvaardigen.",
      meta: "Open",
    },
  ],
  arguments: [
    {
      mark: "N",
      markType: "avatar",
      text: "Vrijheid zonder gelijke kansen blijft voor sommigen alleen een woord.",
      meta: "42 ↑",
    },
    {
      mark: "E",
      markType: "avatar",
      text: "Maar wanneer wordt gelijkheid zelf een grens voor individuele vrijheid?",
      meta: "28 ↑",
    },
    {
      mark: "A",
      markType: "avatar",
      text: "Gelijke toegang tot onderwijs, zorg en veiligheid vergroot de vrijheid om zelf keuzes te maken.",
      meta: "21 ↑",
    },
  ],
  counterquestions: [
    {
      mark: "?",
      markType: "question",
      text: "Welk verschil in kansen kan een samenleving nog rechtvaardigen?",
      meta: "15 ↑",
    },
    {
      mark: "?",
      markType: "question",
      text: "Wie bepaalt wanneer kansen gelijk genoeg zijn?",
      meta: "11 ↑",
    },
    {
      mark: "?",
      markType: "question",
      text: "Kan individuele vrijheid bestaan zonder verantwoordelijkheid voor anderen?",
      meta: "9 ↑",
    },
  ],
  open: [
    {
      mark: "01",
      markType: "open",
      text: "Waar ligt de grens tussen gelijke kansen en gelijke uitkomsten?",
      meta: "Nog open",
    },
    {
      mark: "02",
      markType: "open",
      text: "Welke ongelijkheid ontstaat door keuze en welke door omstandigheden?",
      meta: "Nog open",
    },
    {
      mark: "03",
      markType: "open",
      text: "Welke taak ligt bij de burger en welke bij de samenleving?",
      meta: "Nog open",
    },
  ],
};

const fieldLabels: Record<DialogueTab, string> = {
  summary: "Voeg een nuance toe",
  arguments: "Voeg een argument toe",
  counterquestions: "Voeg een tegenvraag toe",
  open: "Open een nieuwe denklijn",
};

function DialogueMark({ item, index }: { item: DialogueItem; index: number }) {
  if (item.markType === "avatar") {
    return (
      <span className={`avatar avatar--${(index % 3) + 1}`} aria-hidden="true">
        {item.mark}
      </span>
    );
  }

  if (item.markType === "question") {
    return (
      <span className="question-dot" aria-hidden="true">
        {item.mark}
      </span>
    );
  }

  return (
    <span
      className={`dialogue-mark dialogue-mark--${item.markType}`}
      aria-hidden="true"
    >
      {item.mark}
    </span>
  );
}

export default function DialogueCard() {
  const [activeTab, setActiveTab] = useState<DialogueTab>("arguments");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function activateTab(index: number) {
    const nextTab = tabs[index];

    if (!nextTab) {
      return;
    }

    setActiveTab(nextTab.id);
    tabRefs.current[index]?.focus();
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    activateTab(nextIndex);
  }

  return (
    <div className="dialogue-card" aria-label="Voorbeeld van een Civiora-gesprek">
      <div className="dialogue-card__topline">
        <span>VRAAG</span>
        <div className="avatar-stack" aria-label="128 deelnemers">
          <span className="avatar avatar--1" aria-hidden="true">
            M
          </span>
          <span className="avatar avatar--2" aria-hidden="true">
            S
          </span>
          <span className="avatar avatar--3" aria-hidden="true">
            A
          </span>
          <span className="avatar-count">+125</span>
        </div>
      </div>

      <h3>Wat betekent vrijheid in een wereld vol ongelijkheid?</h3>

      <div className="tabs" role="tablist" aria-label="Onderdelen van het gesprek">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`dialogue-tab-${tab.id}`}
              className={`tabs__tab${isActive ? " tabs__active" : ""}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`dialogue-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="tab-panels" aria-live="polite">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <div
              key={tab.id}
              id={`dialogue-panel-${tab.id}`}
              className="tab-panel"
              role="tabpanel"
              aria-labelledby={`dialogue-tab-${tab.id}`}
              hidden={!isActive}
              tabIndex={0}
            >
              <div className="arguments">
                {dialogueContent[tab.id].map((item, index) => (
                  <div className="argument" key={`${tab.id}-${item.text}`}>
                    <DialogueMark item={item} index={index} />
                    <p>{item.text}</p>
                    <span>{item.meta}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="question-field">
        <span>{fieldLabels[activeTab]}</span>
        <span aria-hidden="true">+</span>
      </div>
    </div>
  );
}
