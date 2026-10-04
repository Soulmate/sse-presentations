# SSE deck (Slidev)

Run all commands inside this folder (the repo root has no package.json):

    cd 2025-02-alla-presentation
    npm install
    npm run dev             # live preview at http://localhost:3030, hot reload (add ?lang=es for Spanish)
    npm run export:en       # -> slides-en-export.pdf
    npm run export:es       # -> slides-es-export.pdf
    npm run build           # -> dist/ static site, all languages: open with ?lang=es

Published with the other decks on GitHub Pages, see the README in the repo root.

## Where things live
- slides.md          — slide order, layout and per-slide styles (no text)
- locales/           — all texts: en.ts, es.ts; index.ts lists the languages
- brand.ts           — email, site, phone, address; QR on the contacts slide is a vCard built from these
- styles/main.css    — colors and fonts (tokens at the top); photo tint
- public/img/sse-logo.svg — cover logo (set via `logo:` in the cover frontmatter)
- layouts/           — cover, split (photo half, optional logo on it), page, photo (full-bleed)
- components/        — IconRow, Card (icon + title + dotted list), Timeline, Qr, Chrome (page number + footer)
- public/img/        — photos (any photo gets the teal tint automatically)

Icons: any Tabler icon as <tabler-name />, see https://tabler.io/icons

## Languages
Language is picked by `?lang=xx` in the URL, else `VITE_LANG` at build/export time, else English.
To add one: copy locales/es.ts to locales/de.ts, translate, register it in locales/index.ts,
add an `export:de` script. If a translation runs long, tweak that slide with `:lang(de)` CSS
(see `.list:lang(es)` on the Who We Are slide).
