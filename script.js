const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu?.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const tabContent = {
  samenvatting: [
    ['C', 'Vrijheid en gelijkheid botsen niet altijd, maar vragen om een duidelijke grens.', ''],
    ['V', 'De deelnemers verschillen vooral over wat gelijke kansen precies betekenen.', ''],
    ['?', 'De centrale open vraag blijft hoeveel ongelijkheid een vrije samenleving kan dragen.', ''],
  ],
  argumenten: [
    ['N', 'Vrijheid zonder gelijke kansen is een illusie.', '42'],
    ['E', 'Maar volledige gelijkheid beperkt juist individuele vrijheid.', '28'],
    ['S', 'Welk niveau van ongelijkheid is nog legitiem?', '15'],
  ],
  tegenvragen: [
    ['M', 'Kan iemand vrij zijn wanneer de mogelijke keuzes al door bezit worden bepaald?', '33'],
    ['A', 'Is een ongelijke uitkomst altijd het gevolg van een ongelijke kans?', '21'],
    ['J', 'Wie bepaalt wanneer een beperking van vrijheid rechtvaardig wordt?', '17'],
  ],
  open: [
    ['?', 'Waar eindigt persoonlijke verantwoordelijkheid en begint collectieve verantwoordelijkheid?', ''],
    ['?', 'Kunnen vrijheid en gelijkheid worden gemeten zonder hun betekenis te versmallen?', ''],
    ['?', 'Welke vorm van macht blijft bestaan wanneer iedereen formeel dezelfde rechten heeft?', ''],
  ],
};

const panel = document.querySelector('[data-panel]');
const tabs = document.querySelectorAll('[data-tab]');

function renderRows(key) {
  if (!panel || !tabContent[key]) return;
  panel.innerHTML = tabContent[key]
    .map(
      ([initial, text, score]) => `
        <article class="argument-row">
          <span class="avatar" aria-hidden="true">${initial}</span>
          <p>${text}</p>
          ${score ? `<span class="support">${score} <span aria-hidden="true">↑</span></span>` : '<span></span>'}
        </article>`
    )
    .join('');
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => {
      item.classList.remove('is-active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    renderRows(tab.dataset.tab);
  });
});

const addQuestionButton = document.querySelector('[data-add-question]');
addQuestionButton?.addEventListener('click', () => {
  addQuestionButton.firstChild.textContent = 'Deze functie opent bij de publieke test ';
  addQuestionButton.setAttribute('aria-live', 'polite');
});

const interestButtons = document.querySelectorAll('[data-interest-button]');
const interestStatus = document.querySelector('[data-interest-status]');

interestButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (interestStatus) {
      interestStatus.textContent = 'De publieke aanmelding opent binnenkort.';
    }
  });
});
