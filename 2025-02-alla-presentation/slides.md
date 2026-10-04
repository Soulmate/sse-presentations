---
theme: none
title: SSE Logistics
info: Company presentation
aspectRatio: 16/9
canvasWidth: 980
transition: fade-out
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
.who { margin: -14px 0 auto -3px; --ic-col: 29px; --ic-gap: 12px; --ic-size: 1.44em; --row-title: 14.4px; --row-title-gap: 2px; --row-text: 12.9px; }
.who h1 { margin: 0 0 23.5px 14px; }
.who .list { display: flex; flex-direction: column; gap: 24.9px; }
.who .list:lang(es) { gap: 19px; } /* longer Spanish text */
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
transition: nudge-left | nudge-right
---

<div class="obc">
<div class="card a-rise" style="--d: 150ms">
  <h2>{{ t.obc.whatTitle }}</h2>
  <p>{{ t.obc.whatText }}</p>
</div>
<div class="card a-rise" style="--d: 300ms">
  <h2>{{ t.obc.howTitle }}</h2>
  <p>{{ t.obc.howText }}</p>
</div>
<div class="perks">
  <div class="a-pop" style="--d: 650ms"><img src="/img/icons/fast-delivery.png" alt="" /><h3>{{ t.obc.perks[0] }}</h3></div>
  <div class="a-pop" style="--d: 770ms"><img src="/img/icons/secure-handling.png" alt="" /><h3>{{ t.obc.perks[1] }}</h3></div>
  <div class="a-pop" style="--d: 890ms"><img src="/img/icons/real-time-tracking.png" alt="" /><h3>{{ t.obc.perks[2] }}</h3></div>
  <div class="a-pop" style="--d: 1010ms"><img src="/img/icons/peace-of-mind.png" alt="" /><h3>{{ t.obc.perks[3] }}</h3></div>
</div>
</div>

<style>
/* Two full-width cards and a 2x2 grid of perks; positions and sizes taken from the pptx */
.obc { margin: 36.6px 9.5px 0 10.3px; }
.obc .card { height: 107.4px; box-sizing: border-box; padding: 13.2px 6px 0 13px; border-radius: 3px; }
.obc .card + .card { margin-top: 12.6px; }
.obc .card h2 { font-size: 26.2px; line-height: 1.2; color: var(--c-ink); margin-bottom: 9px; }
.obc .card p { font-size: 12.9px; line-height: 21.8px; }
.obc .perks { display: grid; grid-template-columns: repeat(2, 447px); justify-content: center; row-gap: 35.3px; margin-top: 14.2px; text-align: center; }
.obc .perks > div { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.obc .perks img { width: 32.3px; height: 32.3px; }
.obc .perks h3 { font-size: 16.2px; }
</style>

---
layout: page
transition: nudge-left | nudge-right
---

<div class="mission">

# {{ t.timeline.title }}

<Timeline class="tl-main" :steps="t.timeline.steps">
  <template #icon-0><img src="/img/icons/request-confirmed.png" alt="" /></template>
  <template #icon-1><img src="/img/icons/courier-pick-up.png" alt="" /></template>
  <template #icon-2><img src="/img/icons/departure.png" alt="" /></template>
  <template #icon-3><img src="/img/icons/arrival.png" alt="" /></template>
  <template #icon-4><img src="/img/icons/final-delivery.png" alt="" /></template>
</Timeline>

</div>

<style>
/* Positions taken from the pptx */
.mission { margin-top: 48.2px; }
.mission h1 { margin-left: 8.6px; }
.tl-main { margin: 32.5px 0 0 2.4px; }
.tl-main img { width: 29px; height: 29px; }
</style>

---
layout: page
transition: nudge-left | nudge-right
---

<div class="quote selectable">
<h2>{{ t.quote.beforeTitle }}</h2>
<div class="boxes">
  <div class="box"><h3>{{ t.quote.before[0].title }}</h3><ul><li v-for="x in t.quote.before[0].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3>{{ t.quote.before[1].title }}</h3><ul><li v-for="x in t.quote.before[1].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3>{{ t.quote.before[2].title }}</h3><ul><li v-for="x in t.quote.before[2].items" :key="x">{{ x }}</li></ul></div>
</div>
<h2>{{ t.quote.afterTitle }}</h2>
<div class="boxes">
  <div class="box"><h3>{{ t.quote.after[0].title }}</h3><ul><li v-for="x in t.quote.after[0].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3>{{ t.quote.after[1].title }}</h3><ul><li v-for="x in t.quote.after[1].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3>{{ t.quote.after[2].title }}</h3><ul><li v-for="x in t.quote.after[2].items" :key="x">{{ x }}</li></ul></div>
</div>
</div>

<style>
/* Two rows of three plain cards; positions and sizes taken from the pptx */
.quote { margin: 8px 9.5px 0; }
.quote h2 { font-size: 22.85px; line-height: 1.2; margin-bottom: 18px; }
.quote h2 + .boxes + h2 { margin: 23.1px 0 22.3px; }
.quote .box { height: 175px; }
</style>

---
layout: page
transition: nudge-left | nudge-right
---

<div class="customs">

# {{ t.customs.title }}

<h2 class="sub">{{ t.customs.docsTitle }}</h2>
<div class="boxes selectable">
  <div class="box"><h3>{{ t.customs.docs[0].title }}</h3><ul><li v-for="x in t.customs.docs[0].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3>{{ t.customs.docs[1].title }}</h3><ul><li v-for="x in t.customs.docs[1].items" :key="x">{{ x }}</li></ul></div>
  <div class="box"><h3>{{ t.customs.docs[2].title }}</h3><ul><li v-for="x in t.customs.docs[2].items" :key="x">{{ x }}</li></ul></div>
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
.customs .bottom { display: grid; grid-template-columns: 1fr 369px; gap: 1.6em; align-items: center; } /* Note centred on the Supported Countries block */
.customs .countries { margin: .5em 0 .7em; }
.customs .chips { display: flex; flex-wrap: wrap; gap: .45em; }
.customs .chips span {
  display: inline-flex; align-items: center; gap: .35em; padding: .3em .85em; border-radius: 999px;
  /* all chips alike: outlined, flags and the globe with the same padding */
  color: var(--c-brand); border: 1.5px solid var(--c-line); font-size: .8em; font-weight: 600;
}
.customs .chips svg { font-size: 1.3em; }
.customs .note {
  display: grid; grid-template-columns: auto 1fr; gap: .7em; align-items: start;
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

<div class="svc">
  <img src="/img/icons/nfo.png" alt="" />
  <div><h3>{{ t.services.items[0].title }}</h3><ul class="bullets"><li v-for="x in t.services.items[0].items" :key="x" v-html="x" /></ul></div>
</div>
<div class="svc">
  <img src="/img/icons/air-charter.png" alt="" />
  <div><h3>{{ t.services.items[1].title }}</h3><ul class="bullets"><li v-for="x in t.services.items[1].items" :key="x" v-html="x" /></ul></div>
</div>
<div class="svc">
  <img src="/img/icons/express-road.png" alt="" />
  <div><h3>{{ t.services.items[2].title }}</h3><ul class="bullets"><li v-for="x in t.services.items[2].items" :key="x" v-html="x" /></ul></div>
</div>

</div>

<style>
/* Three sections, icon on the left; positions and sizes taken from the pptx */
.services { margin: 0 9.5px; }
.services h1 { font-size: 38.26px; margin: 9.2px 0 0; }
.services .svc { display: grid; grid-template-columns: 38.7px 1fr; column-gap: 14.3px; height: 155.9px; }
.services .svc:first-of-type { margin-top: 29px; }
.services .svc img { width: 38.7px; height: 38.7px; }
.services .svc h3 { font-size: 18.7px; line-height: 1.2; margin: -2.1px 0 12.2px; }
</style>

---
layout: photo
image: img/runway.jpg
---

<div class="industries">

# {{ t.industries.title }}

<div class="ind">
  <div><img src="/img/icons/automotive.png" alt="" /><span>{{ t.industries.items[0] }}</span></div>
  <div><img src="/img/icons/aerospace.png" alt="" /><span>{{ t.industries.items[1] }}</span></div>
  <div><img src="/img/icons/electronics.png" alt="" /><span>{{ t.industries.items[2] }}</span></div>
  <div><img src="/img/icons/healthcare.png" alt="" /><span>{{ t.industries.items[3] }}</span></div>
  <div><img src="/img/icons/fashion.png" alt="" /><span>{{ t.industries.items[4] }}</span></div>
  <div><img src="/img/icons/documents.png" alt="" /><span>{{ t.industries.items[5] }}</span></div>
</div>

</div>

<style>
/* Title and a 3x2 grid of icons; positions and sizes taken from the pptx */
.industries h1 { font-size: 38.7px; margin: 116.1px 0 0 32.1px; }
.industries .ind { display: grid; grid-template-columns: repeat(3, 297.55px); row-gap: 31px; margin: 26.3px 0 0 22.6px; text-align: center; }
.industries .ind > div { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.industries .ind img { width: 38px; height: 38px; }
.industries .ind span { font: 500 18.7px/1.2 var(--f-display); }
</style>

---
layout: split
image: img/cover.jpg
side: right
photoWidth: 62.34%
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
  background: rgba(255,255,255,.9); backdrop-filter: blur(6px); border-radius: 10px;
  box-shadow: 0 12px 40px rgba(13,53,80,.25); padding: 7px 8px;
}
.logos .cell { position: relative; }
.logos img { width: 100%; height: 100%; box-sizing: border-box; padding: 26px 14px; object-fit: contain; }
/* vertical dividers run unbroken through both rows, stopping short of the panel top and bottom;
   one horizontal divider, inset from the panel sides */
.logos .cell:not(:nth-child(4n))::after { content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 1px; background: var(--c-line); }
.logos .cell:nth-child(-n+4)::after { top: 18%; }
.logos .cell:nth-child(n+5)::after { bottom: 18%; }
.logos::before { content: ''; position: absolute; left: 22px; right: 22px; top: 50%; height: 1px; background: var(--c-line); }
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
/* Photo side: gradient instead of the flat tint, small logo top-left, big two-line title and lead */
.split.left :deep(.photo)::after {
  background: linear-gradient(90deg, rgba(13,53,80,.82) 0%, rgba(13,53,80,.5) 45%, rgba(13,53,80,.08) 100%);
  opacity: 1;
}
.connect { position: absolute; inset: 0; padding: 48px 56px; display: flex; flex-direction: column; }
.connect .logo { width: 112px; height: auto; }
.connect h1 { font-size: 66px; line-height: 1.02; max-width: 300px; margin-top: 96px; } /* wraps to two lines */
.connect .lead { font-size: 18.7px; line-height: 1.25; max-width: 280px; margin-top: 22px; }
/* Contacts side: plain icons close to their text, dividers under the text only, the QR as the hero below.
   The block is centred in the column height by the layout. */
.contacts { margin: 0 -10px 0 11px; --text-x: 44px; }
.contacts .lines { list-style: none; margin: 0; padding: 0; }
.contacts .lines li { position: relative; display: grid; grid-template-columns: 26px 1fr; column-gap: 18px; align-items: center; min-height: 52px; box-sizing: border-box; }
.contacts .lines li + li::before { content: ''; position: absolute; top: 0; left: var(--text-x); right: 0; height: 1px; background: var(--c-line); }
.contacts .lines li:last-child { padding-top: 8px; }
.contacts .lines svg { color: var(--c-brand); font-size: 24px; }
.contacts .lines [stroke-width] { stroke-width: 1.5; }
.contacts .lines a { color: var(--c-brand); text-decoration: none; font-size: 18.7px; line-height: 1.3; }
.contacts .lines a:hover { text-decoration: underline; text-underline-offset: 3px; }
/* QR left edge on the text line of the contacts */
.contacts .qr { display: block; width: 230px; height: 230px; margin: 26px 0 0 calc(var(--text-x) - 13.6px); } /* the png has a 13.6px quiet zone */
</style>
