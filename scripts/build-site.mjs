// Builds every Slidev deck in the repo into _site/ and writes _site/index.html linking to all of them.
// A deck is any top-level folder with slides.md. For each deck: the web build (all languages,
// picked by ?lang=xx) plus one PDF per language from locales/*.ts.
// Variants: a slide with `skipIn: <variant>` in its frontmatter is hidden in that variant, which gets its
// own web build and PDFs in <deck>/<variant>/ (e.g. `skipIn: no-refs` -> <deck>/no-refs/).
//
//   node scripts/build-site.mjs              # BASE_PATH defaults to /sse-presentations/
//   BASE_PATH=/ node scripts/build-site.mjs  # e.g. to preview _site/ with a local static server
import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const site = join(root, '_site')
const base = process.env.BASE_PATH ?? '/sse-presentations/'

const LANG_NAMES = { en: 'English', es: 'Español', de: 'Deutsch', fr: 'Français', ru: 'Русский' }
const VARIANT_NAMES = { 'no-refs': 'Without references' }

const run = (cmd, cwd, env = {}) =>
  execSync(cmd, { cwd, stdio: 'inherit', env: { ...process.env, ...env } })

// First frontmatter block of slides.md: `title:`, the cover `image:` and `logo:`
function headmatter(dir) {
  const fm = readFileSync(join(root, dir, 'slides.md'), 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ''
  const get = key => fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1].trim().replace(/^['"]|['"]$/g, '')
  return { title: get('title') ?? dir, image: get('image'), logo: get('logo') }
}

function languages(dir) {
  const loc = join(root, dir, 'locales')
  if (!existsSync(loc)) return ['en']
  return readdirSync(loc).filter(f => f.endsWith('.ts') && f !== 'index.ts').map(f => f.slice(0, -3))
    .sort((a, b) => (a === 'en' ? -1 : b === 'en' ? 1 : a.localeCompare(b)))
}

// Variant names from `skipIn:` in slide frontmatter
const variants = dir => [...new Set([...readFileSync(join(root, dir, 'slides.md'), 'utf8')
  .matchAll(/^skipIn:\s*([\w-]+)/gm)].map(m => m[1]))]

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
  const langs = languages(dir)
  const build = (entry, path, outDir) => {
    run(`npx slidev build ${entry} --base ${base}${path}/ --out ${outDir}`, cwd)
    for (const lang of langs) run(`npx slidev export ${entry} --output ${outDir}/slides-${lang}.pdf`, cwd, { VITE_LANG: lang })
  }
  build('slides.md', dir, out)
  // Each variant: a copy of slides.md next to it (so relative imports work) with its slides hidden
  const vs = variants(dir)
  for (const v of vs) {
    const entry = `slides.${v}.md`
    const src = readFileSync(join(cwd, 'slides.md'), 'utf8')
    writeFileSync(join(cwd, entry), src.replace(new RegExp(`^skipIn:\\s*${v}\\b.*$`, 'gm'), 'hide: true'))
    try { build(entry, `${dir}/${v}`, join(out, v)) } finally { rmSync(join(cwd, entry)) }
  }
  built.push({ dir, langs, variants: vs, ...headmatter(dir) })
}

const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

// "2025-02-alla-presentation" -> "February 2025"
function dateLabel(dir) {
  const m = dir.match(/^(\d{4})-(\d{2})/)
  return m ? new Date(+m[1], +m[2] - 1).toLocaleString('en', { month: 'long', year: 'numeric' }) : ''
}

const ICON_PLAY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13-8z"/></svg>'
const ICON_DOWNLOAD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M7 11l5 5l5-5"/><path d="M12 4v12"/></svg>'

// Rows of "Language  [Open slides]  [PDF]" for the full deck (path = dir) or a variant (path = dir/variant)
const langRows = (dir, path, langs, suffix = '') => langs.map(l => `<span class="name">${LANG_NAMES[l] ?? l}</span>
        <a class="btn primary" href="${path}/?lang=${l}">${ICON_PLAY}Open slides</a>
        <a class="btn ghost" href="${path}/slides-${l}.pdf" download="${dir}${suffix}-${l}.pdf">${ICON_DOWNLOAD}PDF</a>`).join('\n        ')

const cards = built.map(({ dir, langs, variants, title, image, logo }) => `
  <article class="deck">
    <a class="thumb photo" href="${dir}/?lang=${langs[0]}" aria-label="${esc(title)}">
      ${image ? `<img src="${dir}/${esc(image)}" alt="" loading="lazy">` : ''}
      ${logo ? `<img class="logo" src="${dir}/${esc(logo)}" alt="">` : ''}
    </a>
    <div class="body">
      <div class="date">${dateLabel(dir)}</div>
      <h2>${esc(title)}</h2>
      <div class="langs">
        ${langRows(dir, dir, langs)}
      </div>${variants.map(v => `
      <h3 class="variant">${esc(VARIANT_NAMES[v] ?? v)}</h3>
      <div class="langs">
        ${langRows(dir, `${dir}/${v}`, langs, `-${v}`)}
      </div>`).join('')}
    </div>
  </article>`).join('\n')

// site/ holds the index template and its assets
cpSync(join(root, 'site'), site, { recursive: true })
const template = readFileSync(join(root, 'site', 'index.html'), 'utf8')
writeFileSync(join(site, 'index.html'), template.replace('<!-- DECKS -->', cards))

console.log(`\nBuilt ${built.length} deck(s) into _site/`)
