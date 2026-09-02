# Civiora

Een donkere, responsieve Next.js-landingspagina voor Civiora: een publiek socialmedia-experiment waarin vragen, ideeën en filosofie het begin van het gesprek vormen.

## Ontwerp

De aangeleverde header blijft het uitgangspunt:

- zwarte navigatie met `CIVIORA.`;
- de volledige Socrates-afbeelding uit `public/civiora-hero.webp`;
- de oorspronkelijke hoofdvraag en introductietekst;
- de navigatielabels `Het uitgangspunt`, `De richting` en `Denk mee`.

Daaronder maakt de pagina het concept voelbaar met vijf uitgangspunten, een interactieve dialoog-preview, een korte filosofische tussenruimte en een duidelijke uitnodiging om de ontwikkeling te volgen.

## Lokaal starten

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

## Belangrijkste bestanden

- `src/app/page.tsx` — inhoud, componenten en tab-interactie;
- `src/app/globals.css` — volledige styling en responsive gedrag;
- `src/app/layout.tsx` — documentstructuur en metadata;
- `public/civiora-hero.webp` — de visueel ongewijzigde, geoptimaliseerde hero-afbeelding.
