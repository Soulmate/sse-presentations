---
theme: none
title: SSE Logistics
info: Company presentation
aspectRatio: 16/9
canvasWidth: 980
fonts:
  provider: none
routerMode: hash
layout: cover
image: img/cover.jpg
logo: img/sse-logo.svg
---

<!-- cover: the logo comes from the layout -->

---
layout: split
image: img/box.jpg
side: left
---

<div class="who">

# {{ t.who.title }}

<div class="list">
<IconRow :i="0" :title="t.who.rows[0].title" :text="t.who.rows[0].text"><tabler-building-skyscraper /></IconRow>
<IconRow :i="1" :title="t.who.rows[1].title" :text="t.who.rows[1].text"><tabler-users-group /></IconRow>
<IconRow :i="2" :title="t.who.rows[2].title" :text="t.who.rows[2].text"><tabler-package /></IconRow>
<IconRow :i="3" :title="t.who.rows[3].title" :text="t.who.rows[3].text"><tabler-adjustments-horizontal /></IconRow>
<IconRow :i="4" :title="t.who.rows[4].title" :text="t.who.rows[4].text"><tabler-heart-handshake /></IconRow>
<IconRow :i="5" :title="t.who.rows[5].title" :text="t.who.rows[5].text"><tabler-star /></IconRow>
</div>

</div>

<style>
/* Top-aligned, positions and sizes taken from the pptx */
.who { margin: -14px 0 auto -3px; --ic-col: 29px; --ic-gap: 12px; --ic-size: 1.44em; --row-title: 14.4px; --row-title-gap: 6px; --row-text: 11px; }
.who h1 { margin: 0 0 23.5px 14px; }
.who .list { display: flex; flex-direction: column; gap: 24.9px; }
/* Spanish: move the photo/text border left so the longer rows fit (inline --photo needs !important) */
:lang(es) .split.left { --photo: 46% !important; }
:lang(es) .who .list { gap: 17px; } /* two Spanish descriptions wrap to a second line */
</style>

---
layout: split
image: img/sky.jpg
side: right
---

<div class="how">

# {{ t.how.title }}

<div class="list">
<IconRow :i="0" :text="t.how.rows[0]"><tabler-world /></IconRow>
<IconRow :i="1" :text="t.how.rows[1]"><tabler-hourglass /></IconRow>
<IconRow :i="2" :text="t.how.rows[2]"><tabler-affiliate /></IconRow>
<IconRow :i="3" :text="t.how.rows[3]"><tabler-map-pin /></IconRow>
<IconRow :i="4" :text="t.how.rows[4]"><tabler-messages /></IconRow>
<IconRow :i="5" :text="t.how.rows[5]"><tabler-sparkles /></IconRow>
</div>

</div>

<style>
/* Top-aligned, positions and sizes taken from the pptx */
.how { margin: 29px -20px auto -14.5px; --ic-col: 22.8px; --ic-gap: 17.7px; --ic-size: 23.5px; --row-text: 14.9px; --row-solo-pad: 0; }
.how h1 { margin: 0 0 31px 14.2px; }
.how .list { display: flex; flex-direction: column; gap: 29.6px; }
.how :deep(.row) { align-items: center; }
.how :deep(.ic) { position: relative; top: -1px; }
</style>

---
layout: page
---

<div class="obc">
<div class="cards">
  <div class="card"><h2>{{ t.obc.whatTitle }}</h2><p class="body-text">{{ t.obc.whatText }}</p></div>
  <div class="card"><h2>{{ t.obc.howTitle }}</h2><p class="body-text">{{ t.obc.howText }}</p></div>
</div>
<div class="perks">
  <div><span class="bubble"><tabler-run /></span><h3>{{ t.obc.perks[0] }}</h3></div>
  <div><span class="bubble"><tabler-shield-lock /></span><h3>{{ t.obc.perks[1] }}</h3></div>
  <div><span class="bubble"><tabler-map-2 /></span><h3>{{ t.obc.perks[2] }}</h3></div>
  <div><span class="bubble"><tabler-mood-smile-beam /></span><h3>{{ t.obc.perks[3] }}</h3></div>
</div>
</div>

<style>
/* Two cards side by side with a brand stripe on top and four perks in a row below (the pre-reference layout) */
.obc { margin: 72px 9.5px 0; }
.obc .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.obc .card { border-top: 4px solid var(--c-brand); border-radius: 3px; padding: 22px 24px 24px; }
.obc .card h2 { font-size: 22.85px; line-height: 1.2; color: var(--c-ink); margin-bottom: 14px; }
.obc .card p { white-space: pre-line; } /* \n in the text = line break */
.obc .perks { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 40px; text-align: center; }
.obc .perks > div { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.obc .perks .bubble { font-size: 27px; }
.obc .perks h3 { font-size: 16.2px; line-height: 1.2; }
</style>

---
layout: page
---

<div class="mission">

# {{ t.timeline.title }}

<Timeline class="tl-main" :steps="t.timeline.steps">
  <template #icon-0><tabler-file-check /></template>
  <template #icon-1><tabler-package /></template>
  <template #icon-2><tabler-plane-departure /></template>
  <template #icon-3><tabler-plane-arrival /></template>
  <template #icon-4><tabler-user-check /></template>
</Timeline>

</div>

<style>
/* The pre-reference layout: title, then the timeline across the full width */
.mission { margin: 72px 9.5px 0; }
.tl-main { margin-top: 44px; }
</style>

---
layout: page
---

<div class="quote selectable">
<h2>{{ t.quote.beforeTitle }}</h2>
<div class="boxes">
  <div class="box"><h3><tabler-package />{{ t.quote.before[0].title }}</h3><ul><li v-for="x in t.quote.before[0].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3><tabler-route />{{ t.quote.before[1].title }}</h3><ul><li v-for="x in t.quote.before[1].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3><tabler-clock />{{ t.quote.before[2].title }}</h3><ul><li v-for="x in t.quote.before[2].items" :key="x">{{ x }}</li></ul></div>
</div>
<h2>{{ t.quote.afterTitle }}</h2>
<div class="boxes">
  <div class="box"><h3><tabler-building-factory-2 />{{ t.quote.after[0].title }}</h3><ul><li v-for="x in t.quote.after[0].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3><tabler-files />{{ t.quote.after[1].title }}</h3><ul><li v-for="x in t.quote.after[1].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3><tabler-building-warehouse />{{ t.quote.after[2].title }}</h3><ul><li v-for="x in t.quote.after[2].items" :key="x">{{ x }}</li></ul></div>
</div>
</div>

<style>
/* Two rows of three plain cards; positions and sizes taken from the pptx */
.quote { margin: 8px 9.5px 0; }
.quote h2 { font-size: 22.85px; line-height: 1.2; margin-bottom: 18px; }
.quote h2 + .boxes + h2 { margin: 23.1px 0 22.3px; }
.quote .box { height: 175px; }
:lang(es) .quote .boxes:last-child .box { height: 187px; } /* Spanish: two-line last item in Documentos */
</style>

---
layout: page
---

<div class="customs">

# {{ t.customs.title }}

<h2 class="sub">{{ t.customs.docsTitle }}</h2>
<div class="boxes selectable">
  <div class="box"><h3><tabler-file-invoice />{{ t.customs.docs[0].title }}</h3><ul><li v-for="x in t.customs.docs[0].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3><tabler-file-certificate />{{ t.customs.docs[1].title }}</h3><ul><li v-for="x in t.customs.docs[1].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3><tabler-id />{{ t.customs.docs[2].title }}</h3><ul><li v-for="x in t.customs.docs[2].items" :key="x">{{ x }}</li></ul></div>
</div>
<div class="bottom selectable">
  <div>
    <h2 class="sub a-rise" style="--d: 600ms">{{ t.customs.countriesTitle }}</h2>
    <p class="countries body-text a-rise" style="--d: 680ms">{{ t.customs.countriesText }}</p>
    <div class="chips">
      <span class="a-pop" style="--d: 800ms"><circle-flags-mx />{{ t.customs.countries[0] }}</span>
      <span class="a-pop" style="--d: 890ms"><circle-flags-us />{{ t.customs.countries[1] }}</span>
      <span class="a-pop" style="--d: 980ms"><circle-flags-eu />{{ t.customs.countries[2] }}</span>
      <span class="more a-pop" style="--d: 1070ms"><tabler-world />{{ t.customs.countries[3] }}</span>
    </div>
  </div>
  <div class="note a-right" style="--d: 900ms"><tabler-info-circle /><p v-html="t.customs.note" /></div>
</div>

</div>

<style>
.customs { margin: 0 9.5px; } /* top part (title, documents) positioned as in the pptx */
.customs h1 { font-size: 38.7px; margin-top: 17.4px; }
/* subheadings: MuseoModerno Medium + bold, 22pt, as in the pptx */
.customs .sub { font-size: 18.7px; font-weight: 700; line-height: 1.2; }
.customs > .sub { margin: 26.9px 0 24.1px; }
.customs .box { height: 176.4px; }
.customs .box h3 { font-weight: 700; }
.customs .boxes { margin-bottom: 1.4em; }
.customs .bottom { display: grid; grid-template-columns: 1fr 310px; gap: 1.6em; align-items: stretch; } /* Note as tall as the Supported Countries block */
.customs .countries { margin: .5em 0 .7em; }
.customs .chips { display: flex; flex-wrap: wrap; gap: .45em; }
.customs .chips span {
  display: inline-flex; align-items: center; gap: .35em; padding: .3em .85em; border-radius: 999px;
  /* country chips filled, "And many others" outlined; same border width, so all are the same size */
  background: var(--c-brand); color: #fff; border: 1.5px solid var(--c-brand); font-size: .8em; font-weight: 600;
}
.customs .chips span.more { background: transparent; color: var(--c-brand); border-color: var(--c-line); }
.customs .chips span:not(.more) svg { box-shadow: 0 0 0 1.5px rgba(255,255,255,.8); border-radius: 50%; }
.customs .chips svg { font-size: 1.3em; }
.customs .note {
  display: grid; grid-template-columns: auto 1fr; gap: .7em; align-items: start; align-content: center;
  background: var(--c-card); border-left: 4px solid var(--c-brand); border-radius: 3px; padding: 7px 1.1em;
  font-size: 14.9px; line-height: 20.5px;
}
.customs .note p { line-height: inherit; }
.customs .note svg { color: var(--c-brand); font-size: 1.5em; }
</style>

---
layout: page
---

<div class="services selectable">

# {{ t.services.title }}

<div class="boxes">
  <div class="box"><img src="/img/icons/nfo.png" alt="" /><h3>{{ t.services.items[0].title }}</h3><ul><li v-for="x in t.services.items[0].items" :key="x" v-html="x" /></ul></div>
  <div class="box"><img src="/img/icons/air-charter.png" alt="" /><h3>{{ t.services.items[1].title }}</h3><ul><li v-for="x in t.services.items[1].items" :key="x" v-html="x" /></ul></div>
  <div class="box"><img src="/img/icons/express-road.png" alt="" /><h3>{{ t.services.items[2].title }}</h3><ul><li v-for="x in t.services.items[2].items" :key="x" v-html="x" /></ul></div>
</div>

</div>

<style>
/* Three cards with a brand stripe on top, icon above the title (the pre-reference layout); title size as in the pptx */
.services { margin: 0 9.5px; }
.services h1 { font-size: 38.26px; margin: 9.2px 0 0; }
:lang(es) .services h1 { font-size: 31.44px; margin: 15.3px 0 0; } /* longer Spanish title, one line as in the Spanish pptx */
.services .boxes { margin-top: 36px; }
.services .box { border-top: 4px solid var(--c-brand); padding: 20px 18px 16px; }
.services .box img { display: block; width: 38.7px; height: 38.7px; margin-bottom: 16px; }
:lang(es) .services .boxes { margin-top: 26px; } /* longer Spanish texts: tighter, so the cards clear the footer */
:lang(es) .services .box { padding-top: 15px; }
:lang(es) .services .box img { margin-bottom: 11px; }
</style>

---
layout: photo
image: img/runway.jpg
---

<div class="industries">

# {{ t.industries.title }}

<div class="ind">
  <div><span class="gl"><tabler-car /></span><span>{{ t.industries.items[0] }}</span></div>
  <div><span class="gl"><tabler-rocket /></span><span>{{ t.industries.items[1] }}</span></div>
  <div><span class="gl"><tabler-cpu /></span><span>{{ t.industries.items[2] }}</span></div>
  <div><span class="gl"><tabler-heartbeat /></span><span>{{ t.industries.items[3] }}</span></div>
  <div><span class="gl"><tabler-hanger /></span><span>{{ t.industries.items[4] }}</span></div>
  <div><span class="gl"><tabler-file-text /></span><span>{{ t.industries.items[5] }}</span></div>
</div>

</div>

<style>
/* Title centred over a 3x2 grid of icons in glass circles (the pre-reference look) */
.industries h1 { font-size: 38.7px; width: 892.65px; margin: 88px 0 0 22.6px; text-align: center; }
.industries .ind { display: grid; grid-template-columns: repeat(3, 297.55px); row-gap: 28px; margin: 28px 0 0 22.6px; text-align: center; }
.industries .ind > div { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.industries .ind .gl {
  width: 66px; height: 66px; border-radius: 50%; display: grid; place-items: center; box-sizing: border-box;
  background: rgba(255,255,255,.14); border: 1.5px solid rgba(255,255,255,.45); backdrop-filter: blur(4px);
}
.industries .ind .gl svg { font-size: 30px; color: #fff; } /* thin strokes: the global stroke-width override */
.industries .ind span { font: 500 18.7px/1.2 var(--f-display); }
</style>

---
layout: split
image: img/cover.jpg
side: right
photoWidth: 62.34%
skipIn: no-refs  # left out of the "no-refs" variant (built by scripts/build-site.mjs)
---

<div class="refs-text">

<!-- the title spans the whole text column, so everything below ends before it -->
<FitText tag="h1">{{ t.references.title }}</FitText>

<p class="lead">{{ t.references.lead }}</p>

<div class="list">
<IconRow :i="1" :title="t.references.rows[0].title" :text="t.references.rows[0].text"><tabler-shield-check /></IconRow>
<IconRow :i="2" :title="t.references.rows[1].title" :text="t.references.rows[1].text"><tabler-users-group /></IconRow>
<IconRow :i="3" :title="t.references.rows[2].title" :text="t.references.rows[2].text"><tabler-world /></IconRow>
</div>

</div>

<div class="logos a-right" style="--d: 300ms">
  <div v-for="(f, i) in ['hellmann', 'dhl', 'racing-cargo', 'national', 'national-air-cargo', 'herport', 'osa', 'fedex']" :key="f" class="cell">
    <img :src="`img/refs/${f}.png`" :alt="f" :class="['a-pop', f]" :style="{ '--d': `${550 + i * 90}ms` }" />
  </div>
</div>

<style>
/* Text column in the deck's common styles: rows as on "Who We Are", lead as body text, ink colour */
.refs-text { display: flex; flex-direction: column; gap: 18px; --ic-col: 29px; --ic-gap: 18px; --ic-size: 1.44em; --row-title: 14.4px; --row-title-gap: 2px; --row-text: 12.9px; }
.refs-text .lead { font-size: 18.7px; line-height: 1.25; margin-top: -6px; }
.refs-text .list { display: flex; flex-direction: column; gap: 24.9px; margin-top: 10px; }
.refs-text .list :deep(.ic) { position: relative; top: 3px; }
.refs-text .list :deep(p) { line-height: 21.8px; } /* as the card text on the OBC slide */
/* Logo panel on the photo, 2x4 cells; size and short dividers as in the mock-up */
.logos {
  position: absolute; z-index: 5; top: 50%; left: calc(100% - var(--photo) + 16px); right: 24px; translate: 0 -50%;
  display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 102px;
  background: rgba(255,255,255,.6); backdrop-filter: blur(6px); border-radius: 10px;
  box-shadow: 0 12px 40px rgba(13,53,80,.25); padding: 7px 8px;
}
.logos .cell { position: relative; }
.logos img { width: 100%; height: 100%; box-sizing: border-box; padding: 26px 14px; object-fit: contain; }
/* vertical dividers run unbroken through both rows, stopping short of the panel top and bottom;
   one horizontal divider, inset from the panel sides; brand at 5%, barely there */
.logos .cell:not(:nth-child(4n))::after { content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 1px; background: rgba(18,78,115,.05); }
.logos .cell:nth-child(-n+4)::after { top: 18%; }
.logos .cell:nth-child(n+5)::after { bottom: 18%; }
.logos::before { content: ''; position: absolute; left: 22px; right: 22px; top: 50%; height: 1px; background: rgba(18,78,115,.05); }
/* square-ish marks look bigger than wordmarks: shrink them a bit */
.logos img.racing-cargo, .logos img.herport { padding: 22px 18px; }
.logos img.osa { padding: 24px 18px; }
</style>

---
layout: split
image: img/connect.jpg
side: left
photoWidth: 62%
photoPos: 22% 50%
noBadge: true
noFooter: true
---

<script setup>
import { brand, mapsUrl } from './brand'
</script>

<!-- right column: contact lines and the QR; the photo half (::photo:: below) carries the title -->
<div class="contacts">

<h1>{{ t.contacts.title }}</h1>

<ul class="lines selectable">
  <li><tabler-phone /><a :href="`tel:${brand.phone.replace(/\s/g, '')}`">{{ brand.phone }}</a></li>
  <li><tabler-mail /><a :href="`mailto:${brand.email}`">{{ brand.email }}</a></li>
  <li><tabler-world /><a :href="brand.url" target="_blank">{{ brand.site }}</a></li>
  <li><tabler-map-pin /><a :href="mapsUrl" target="_blank">{{ brand.address.street }},<br>{{ brand.address.zip }} {{ brand.address.city }}, {{ brand.address.country }}</a></li>
</ul>

<img class="qr" src="/img/qr.png" alt="QR code with our contact card" />

</div>

::photo::

<div class="connect">
  <img class="logo" src="/img/sse-logo.svg" alt="SSE" />
  <h1>{{ t.contacts.connect }}</h1>
  <p class="lead">{{ t.contacts.connectText }}</p>
</div>

<style>
/* Photo side (usual tint of the split layout): small logo top-left, big two-line title and lead */
.connect { position: absolute; inset: 0; padding: 48px 56px; display: flex; flex-direction: column; }
.connect .logo { width: 112px; height: auto; opacity: .38; order: 1; margin-top: auto; } /* 62% transparent, at the bottom */
.connect h1 { font-size: 66px; line-height: 1.02; max-width: 300px; margin-top: 116.5px; } /* wraps to two lines; same place as when the logo was above it */
.connect .lead { font-size: 18.7px; line-height: 1.25; max-width: 280px; margin-top: 22px; }
/* Contacts side: title, plain icons close to their text, dividers under the text only, the QR as the hero below.
   The block is centred in the column height by the layout. */
.contacts { margin: 0 -10px 0 11px; --text-x: 44px; }
.contacts h1 { font-size: 38.7px; margin-bottom: 18px; } /* same size as the titles of the content slides */
.contacts .lines { list-style: none; margin: 0; padding: 0; }
.contacts .lines li { position: relative; display: grid; grid-template-columns: 26px 1fr; column-gap: 18px; align-items: center; min-height: 52px; box-sizing: border-box; }
.contacts .lines li + li::before { content: ''; position: absolute; top: 0; left: var(--text-x); right: 0; height: 1px; background: var(--c-line); }
.contacts .lines li:last-child { padding-top: 8px; }
.contacts .lines svg { color: var(--c-brand); font-size: 24px; }
.contacts .lines [stroke-width] { stroke-width: 1.5; }
.contacts .lines a { color: var(--c-brand); text-decoration: none; font-size: 18.7px; line-height: 1.3; }
.contacts .lines a:hover { text-decoration: underline; text-underline-offset: 3px; }
/* QR left edge on the text line of the contacts */
.contacts .qr { display: block; width: 200px; height: 200px; margin: 20px 0 0 calc(var(--text-x) - 13.6px); } /* the png has a 13.6px quiet zone */
</style>
