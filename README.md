# SSE presentations

Slidev decks, one per folder. Published to GitHub Pages: https://soulmate.github.io/sse-presentations/

The site root is an index of every deck, with an "Open slides" link and a PDF download for each language.

## Deploy
`.github/workflows/static.yml` runs on every push to `main` (or by hand from the Actions tab).
It runs `node scripts/build-site.mjs` and publishes `_site/` to Pages.
Pages must be set to **Settings → Pages → Source: GitHub Actions**.

`scripts/build-site.mjs`, for every top-level folder that has `slides.md`:
- `npm ci` (if no `node_modules`), and on CI installs the Chromium that matches the deck's playwright
- `slidev build --base /sse-presentations/<folder>/` → `_site/<folder>/` (all languages, picked by `?lang=xx`)
- one PDF per language, from `locales/*.ts` → `_site/<folder>/slides-<lang>.pdf`
- then writes `_site/index.html`: title and cover image come from the first frontmatter block of `slides.md` (`title:`, `image:`)

Build the whole site locally:

    node scripts/build-site.mjs                # same as CI, base /sse-presentations/
    BASE_PATH=/ node scripts/build-site.mjs    # to serve _site/ from the root of a local static server

## Adding things
- **A deck**: a new top-level folder with `slides.md`, `package.json` and `package-lock.json`.
  Prefix it with a date (`2026-03-...`) — the index lists newest first. Nothing to change in the workflow.
- **A language**: add `locales/xx.ts` in the deck (see the deck's README). It appears on the index and gets a PDF automatically.
  If it isn't en/es/de/fr/ru, add its display name to `LANG_NAMES` in `scripts/build-site.mjs`.
