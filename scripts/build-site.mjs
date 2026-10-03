// Builds every Slidev deck in the repo into _site/ and writes _site/index.html linking to all of them.
// A deck is any top-level folder with slides.md. For each deck: the web build (all languages,
// picked by ?lang=xx) plus one PDF per language from locales/*.ts.
//
//   node scripts/build-site.mjs              # BASE_PATH defaults to /sse-presentations/
//   BASE_PATH=/ node scripts/build-site.mjs  # e.g. to preview _site/ with a local static server
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const site = join(root, '_site')
const base = process.env.BASE_PATH ?? '/sse-presentations/'

const LANG_NAMES = { en: 'English', es: 'Español', de: 'Deutsch', fr: 'Français', ru: 'Русский' }

const run = (cmd, cwd, env = {}) =>
  execSync(cmd, { cwd, stdio: 'inherit', env: { ...process.env, ...env } })

// First frontmatter block of slides.md: `title:` and the cover `image:`
function headmatter(dir) {
  const fm = readFileSync(join(root, dir, 'slides.md'), 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ''
  const get = key => fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1].trim().replace(/^['"]|['"]$/g, '')
  return { title: get('title') ?? dir, image: get('image') }
}

function languages(dir) {
  const loc = join(root, dir, 'locales')
  if (!existsSync(loc)) return ['en']
  return readdirSync(loc).filter(f => f.endsWith('.ts') && f !== 'index.ts').map(f => f.slice(0, -3))
    .sort((a, b) => (a === 'en' ? -1 : b === 'en' ? 1 : a.localeCompare(b)))
}

const decks = readdirSync(root, { withFileTypes: true })
  .filter(d => d.isDirectory() && !d.name.startsWith('.') && existsSync(join(root, d.name, 'slides.md')))
  .map(d => d.name)
  .sort()
  .reverse() // newest (date-prefixed folders) first

rmSync(site, { recursive: true, force: true })
mkdirSync(site)

const built = []
for (const dir of decks) {
  const cwd = join(root, dir)
  const out = join(site, dir)
  if (!existsSync(join(cwd, 'node_modules'))) run('npm ci', cwd)
  // On CI install the Chromium matching this deck's playwright version (PDF export needs it)
  if (process.env.CI) run('npx playwright install --with-deps chromium', cwd)
  run(`npx slidev build --base ${base}${dir}/ --out ${out}`, cwd)
  const langs = languages(dir)
  for (const lang of langs) run(`npx slidev export --output ${out}/slides-${lang}.pdf`, cwd, { VITE_LANG: lang })
  built.push({ dir, langs, ...headmatter(dir) })
}

const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

const cards = built.map(({ dir, langs, title, image }) => `
    <article class="deck">
      ${image ? `<a class="thumb" href="${dir}/?lang=${langs[0]}"><img src="${dir}/${esc(image)}" alt="" loading="lazy"></a>` : ''}
      <div class="body">
        <h2>${esc(title)}</h2>
        <p class="dir">${esc(dir)}</p>
        <table>
          ${langs.map(l => `<tr>
            <th>${LANG_NAMES[l] ?? l}</th>
            <td><a class="btn" href="${dir}/?lang=${l}">Open slides</a></td>
            <td><a class="btn ghost" href="${dir}/slides-${l}.pdf" download>PDF</a></td>
          </tr>`).join('\n          ')}
        </table>
      </div>
    </article>`).join('\n')

writeFileSync(join(site, 'index.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SSE Presentations</title>
<style>
  :root {
    --bg: #fffcf5; --card: #f3eee3; --ink: #2b4150; --muted: #6f7b82; --brand: #124e73; --line: #d9d4c9;
    color-scheme: light;
  }
  @media (prefers-color-scheme: dark) {
    :root { --bg: #0f1d27; --card: #172a37; --ink: #dfe6ea; --muted: #8fa0aa; --brand: #7cc4dc; --line: #2a4252; color-scheme: dark; }
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font: 16px/1.5 system-ui, sans-serif; }
  main { max-width: 880px; margin: 0 auto; padding: 48px 16px; }
  h1 { color: var(--brand); font-weight: 600; margin: 0 0 32px; }
  .deck { display: grid; grid-template-columns: 280px 1fr; gap: 24px; background: var(--card);
          border-radius: 12px; overflow: hidden; margin-bottom: 24px; }
  .thumb img { display: block; width: 100%; height: 100%; object-fit: cover; aspect-ratio: 16/9; }
  .body { padding: 20px 24px 20px 0; }
  h2 { color: var(--brand); margin: 0; font-weight: 600; }
  .dir { color: var(--muted); margin: 2px 0 16px; font-size: 14px; }
  table { border-collapse: collapse; }
  th { text-align: left; font-weight: 500; padding: 6px 16px 6px 0; }
  td { padding: 6px 8px 6px 0; }
  .btn { display: inline-block; padding: 6px 14px; border-radius: 6px; background: var(--brand); color: var(--bg);
         text-decoration: none; font-size: 14px; }
  .btn.ghost { background: transparent; color: var(--brand); border: 1px solid var(--line); }
  .btn:hover { opacity: .85; }
  @media (max-width: 640px) {
    .deck { grid-template-columns: 1fr; gap: 0; }
    .body { padding: 16px; }
  }
</style>
</head>
<body>
<main>
  <h1>SSE Presentations</h1>
${cards}
</main>
</body>
</html>
`)

console.log(`\nBuilt ${built.length} deck(s) into _site/`)
