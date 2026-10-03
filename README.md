# SSE deck (Slidev)

    npm install
    npx slidev              # live preview at http://localhost:3030, hot reload
    npx slidev export       # -> slides-export.pdf
    npx slidev build        # -> dist/ static site (GitHub Pages, Netlify, Cloudflare Pages)

## Where things live
- slides.md          — all text and slide order (this is what you translate / edit)
- brand.ts           — email, site, phone, QR target
- styles/main.css    — colors and fonts (tokens at the top); photo tint
- layouts/           — cover, split (photo half), page, photo (full-bleed)
- components/        — IconRow, Timeline, Qr, Chrome (page number + footer)
- public/img/        — photos (any photo gets the teal tint automatically)

Icons: any Tabler icon as <tabler-name />, see https://tabler.io/icons
Translation: copy slides.md to slides.de.md, translate, run `npx slidev slides.de.md`.
