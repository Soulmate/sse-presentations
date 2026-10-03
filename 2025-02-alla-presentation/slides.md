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

# {{ t.who.title }}

<div class="list">
<IconRow :i="0" :title="t.who.rows[0].title" :text="t.who.rows[0].text"><tabler-building-skyscraper /></IconRow>
<IconRow :i="1" :title="t.who.rows[1].title" :text="t.who.rows[1].text"><tabler-users-group /></IconRow>
<IconRow :i="2" :title="t.who.rows[2].title" :text="t.who.rows[2].text"><tabler-package /></IconRow>
<IconRow :i="3" :title="t.who.rows[3].title" :text="t.who.rows[3].text"><tabler-adjustments-horizontal /></IconRow>
<IconRow :i="4" :title="t.who.rows[4].title" :text="t.who.rows[4].text"><tabler-heart-handshake /></IconRow>
<IconRow :i="5" :title="t.who.rows[5].title" :text="t.who.rows[5].text"><tabler-star /></IconRow>
</div>

<style>
.list { display: flex; flex-direction: column; gap: .95em; }
.list:lang(es) { gap: .6em; font-size: .9em; } /* longer Spanish text */
</style>

---
layout: split
image: img/sky.jpg
side: right
---

# {{ t.how.title }}

<div class="list">
<IconRow :i="0" :text="t.how.rows[0]"><tabler-world /></IconRow>
<IconRow :i="1" :text="t.how.rows[1]"><tabler-hourglass /></IconRow>
<IconRow :i="2" :text="t.how.rows[2]"><tabler-affiliate /></IconRow>
<IconRow :i="3" :text="t.how.rows[3]"><tabler-map-pin /></IconRow>
<IconRow :i="4" :text="t.how.rows[4]"><tabler-messages /></IconRow>
<IconRow :i="5" :text="t.how.rows[5]"><tabler-sparkles /></IconRow>
</div>

<style>
.list { display: flex; flex-direction: column; gap: 1.35em; }
</style>


---
layout: page
---

<div class="fill obc">
<div class="intro">
  <div class="card" v-motion :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0 }">
    <h2>{{ t.obc.whatTitle }}</h2>
    <p>{{ t.obc.whatText }}</p>
  </div>
  <div class="card" v-motion :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { delay: 150 } }">
    <h2>{{ t.obc.howTitle }}</h2>
    <p>{{ t.obc.howText }}</p>
  </div>
</div>
<div class="perks">
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 400, duration: 600 } }"><span class="bubble"><tabler-run /></span><h3>{{ t.obc.perks[0] }}</h3></div>
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 520, duration: 600 } }"><span class="bubble"><tabler-shield-lock /></span><h3>{{ t.obc.perks[1] }}</h3></div>
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 640, duration: 600 } }"><span class="bubble"><tabler-map-2 /></span><h3>{{ t.obc.perks[2] }}</h3></div>
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 760, duration: 600 } }"><span class="bubble"><tabler-mood-smile-beam /></span><h3>{{ t.obc.perks[3] }}</h3></div>
</div>
</div>

<style>
.obc { gap: 2.2em; }
.obc .intro { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1em; }
.obc .intro .card { padding: 1.4em 1.5em; border-top: 4px solid var(--c-brand); }
.obc .intro h2 { font-size: 1.3em; line-height: 1.2; margin-bottom: .6em; }
.obc .intro p { font-size: .88em; }
.obc .perks { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1em; text-align: center; }
.obc .perks > div { display: flex; flex-direction: column; align-items: center; gap: .7em; }
.obc .perks .bubble { font-size: 1.7em; }
.obc .perks h3 { font-size: 1em; }
</style>

---
layout: page
---

<div class="fill">

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
.tl-main { margin: 2.6em 0 1.5em; }
</style>

---
layout: page
---

<div class="fill quote">
<h2 class="step"><span>1</span>{{ t.quote.beforeTitle }}</h2>
<div class="grid3">
  <Card :i="0" v-bind="t.quote.before[0]"><tabler-package /></Card>
  <Card :i="1" v-bind="t.quote.before[1]"><tabler-route /></Card>
  <Card :i="2" v-bind="t.quote.before[2]"><tabler-clock /></Card>
</div>
<h2 class="step"><span>2</span>{{ t.quote.afterTitle }}</h2>
<div class="grid3">
  <Card :i="3" v-bind="t.quote.after[0]"><tabler-building-factory-2 /></Card>
  <Card :i="4" v-bind="t.quote.after[1]"><tabler-files /></Card>
  <Card :i="5" v-bind="t.quote.after[2]"><tabler-building-warehouse /></Card>
</div>
</div>

<style>
.quote h2 { font-size: 1.4em; }
.quote .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: .9em; margin: .8em 0 1.5em; font-size: .86em; }
.quote .grid3:last-child { margin-bottom: 0; }
</style>

---
layout: page
---

<div class="fill customs">

# {{ t.customs.title }}

<h2 class="sub">{{ t.customs.docsTitle }}</h2>
<div class="grid3">
  <Card :i="0" v-bind="t.customs.docs[0]"><tabler-file-invoice /></Card>
  <Card :i="1" v-bind="t.customs.docs[1]"><tabler-file-certificate /></Card>
  <Card :i="2" v-bind="t.customs.docs[2]"><tabler-id /></Card>
</div>
<div class="bottom">
  <div>
    <h2 class="sub">{{ t.customs.countriesTitle }}</h2>
    <p class="countries">{{ t.customs.countriesText }}</p>
    <div class="chips">
      <span><circle-flags-mx />{{ t.customs.countries[0] }}</span>
      <span><circle-flags-us />{{ t.customs.countries[1] }}</span>
      <span><circle-flags-eu />{{ t.customs.countries[2] }}</span>
      <span class="more"><tabler-world />{{ t.customs.countries[3] }}</span>
    </div>
  </div>
  <div class="note"><tabler-info-circle /><p v-html="t.customs.note" /></div>
</div>

</div>

<style>
.customs h1 { font-size: 2.1em; margin-bottom: .45em; }
.customs .sub { font: 700 1.05em var(--f-body); color: var(--c-brand); text-transform: uppercase; letter-spacing: .06em; }
.customs .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: .9em; margin: .7em 0 1.4em; font-size: .86em; }
.customs .bottom { display: grid; grid-template-columns: 1.6fr 1fr; gap: 1.6em; align-items: end; }
.customs .countries { font-size: .86em; margin: .5em 0 .7em; }
.customs .chips { display: flex; flex-wrap: wrap; gap: .45em; }
.customs .chips span {
  display: inline-flex; align-items: center; gap: .35em; padding: .3em .85em; border-radius: 999px;
  background: var(--c-brand); color: #fff; font-size: .8em; font-weight: 600;
}
.customs .chips span:not(.more) { padding-left: .35em; }
.customs .chips svg { font-size: 1.3em; }
.customs .chips span:not(.more) svg { box-shadow: 0 0 0 1.5px rgba(255,255,255,.8); border-radius: 50%; }
.customs .chips span.more { background: transparent; color: var(--c-brand); border: 1.5px solid var(--c-line); }
.customs .note {
  display: grid; grid-template-columns: auto 1fr; gap: .7em; align-items: start;
  background: var(--c-card); border-left: 4px solid var(--c-tint); border-radius: 6px; padding: .9em 1.1em;
  font-size: .82em;
}
.customs .note svg { color: var(--c-tint); font-size: 1.5em; }
</style>

---
layout: page
---

<div class="fill services">

# {{ t.services.title }}

<div class="grid3">
  <Card :i="0" big html v-bind="t.services.items[0]"><tabler-plane /></Card>
  <Card :i="1" big html v-bind="t.services.items[1]"><tabler-plane-tilt /></Card>
  <Card :i="2" big html v-bind="t.services.items[2]"><tabler-truck /></Card>
</div>

</div>

<style>
.services h1 { font-size: 2em; }
.services .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1em; margin-top: 1.4em; font-size: .86em; }
.services .card { border-top: 4px solid var(--c-brand); }
</style>

---
layout: photo
image: img/runway.jpg
---

<h1 class="ind-title">{{ t.industries.title }}</h1>

<div class="ind">
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 300, duration: 600 } }"><span class="gl"><tabler-car /></span><span>{{ t.industries.items[0] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 410, duration: 600 } }"><span class="gl"><tabler-rocket /></span><span>{{ t.industries.items[1] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 520, duration: 600 } }"><span class="gl"><tabler-cpu /></span><span>{{ t.industries.items[2] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 630, duration: 600 } }"><span class="gl"><tabler-heartbeat /></span><span>{{ t.industries.items[3] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 740, duration: 600 } }"><span class="gl"><tabler-hanger /></span><span>{{ t.industries.items[4] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 850, duration: 600 } }"><span class="gl"><tabler-file-text /></span><span>{{ t.industries.items[5] }}</span></div>
</div>

<style>
.ind-title { font-size: 2.8em; margin: 60px 0 34px 16px; }
.ind { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.7em 0; text-align: center; }
.ind > div { display: flex; flex-direction: column; align-items: center; gap: .6em; }
.ind .gl {
  width: 2.6em; height: 2.6em; border-radius: 50%; display: grid; place-items: center; font-size: 1.6em;
  background: rgba(255,255,255,.14); border: 1.5px solid rgba(255,255,255,.45); backdrop-filter: blur(4px);
}
.ind span:last-child { font: 600 1.15em var(--f-body); letter-spacing: .01em; }
</style>

---
layout: split
image: img/cover.jpg
logo: img/sse-logo.svg
side: left
noBadge: true
noFooter: true
---

<script setup>
import { brand, vcard } from './brand'
</script>

<div class="contacts">

# {{ t.contacts.title }}

<Qr :value="vcard" :size="150" />

<ul class="lines">
  <li><tabler-phone /><a :href="`tel:${brand.phone.replace(/\s/g, '')}`">{{ brand.phone }}</a></li>
  <li><tabler-mail /><a :href="`mailto:${brand.email}`">{{ brand.email }}</a></li>
  <li><tabler-world /><a :href="brand.url">{{ brand.site }}</a></li>
  <li><tabler-map-pin /><span>{{ brand.address.street }}, {{ brand.address.zip }} {{ brand.address.city }}, {{ brand.address.country }}</span></li>
</ul>

</div>

<style>
.contacts { display: flex; flex-direction: column; gap: 1.3em; }
.contacts h1 { font-size: 2.4em; }
.contacts .lines { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .7em; }
.contacts .lines li { display: grid; grid-template-columns: 1.6em 1fr; align-items: center; gap: .5em; font-size: .98em; }
.contacts .lines svg { color: var(--c-brand); font-size: 1.3em; }
.contacts .lines a { color: var(--c-ink); text-decoration: none; font-weight: 600; }
</style>
