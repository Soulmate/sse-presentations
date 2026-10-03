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

<div class="card intro" v-motion :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0 }">

## {{ t.obc.whatTitle }}

{{ t.obc.whatText }}

</div>

<div class="card intro" v-motion :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { delay: 150 } }">

## {{ t.obc.howTitle }}

{{ t.obc.howText }}

</div>

<div class="perks">
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 400, duration: 600 } }"><tabler-run /><h3>{{ t.obc.perks[0] }}</h3></div>
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 520, duration: 600 } }"><tabler-shield-lock /><h3>{{ t.obc.perks[1] }}</h3></div>
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 640, duration: 600 } }"><tabler-map-2 /><h3>{{ t.obc.perks[2] }}</h3></div>
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 760, duration: 600 } }"><tabler-mood-smile-beam /><h3>{{ t.obc.perks[3] }}</h3></div>
</div>

<style>
.intro { margin-bottom: .9em; }
.intro:first-child { margin-top: 22px; } /* clear the page badge */
.intro h2 { margin-bottom: .5em; }
.intro p { font-size: .84em; }
.perks { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1em 0; margin-top: .8em; text-align: center; }
.perks > div { display: flex; flex-direction: column; align-items: center; gap: .6em; }
.perks svg { font-size: 2.3em; color: var(--c-brand); }
.perks h3 { font-size: .95em; }
</style>

---
layout: page
---

# {{ t.timeline.title }}

<Timeline :steps="t.timeline.steps">
  <template #icon-0><tabler-file-check /></template>
  <template #icon-1><tabler-package /></template>
  <template #icon-2><tabler-plane-departure /></template>
  <template #icon-3><tabler-plane-arrival /></template>
  <template #icon-4><tabler-user-check /></template>
</Timeline>

<style>
h1 { margin-top: 36px; }
</style>

---
layout: page
---

## {{ t.quote.beforeTitle }}

<div class="grid3">
<div v-for="c in t.quote.before" class="card">
<h3>{{ c.title }}</h3>
<ul><li v-for="x in c.items">{{ x }}</li></ul>
</div>
</div>

## {{ t.quote.afterTitle }}

<div class="grid3">
<div v-for="c in t.quote.after" class="card">
<h3>{{ c.title }}</h3>
<ul><li v-for="x in c.items">{{ x }}</li></ul>
</div>
</div>

<style>
.grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: .9em; margin: .8em 0 1.4em; font-size: .86em; }
</style>

---
layout: page
---

# {{ t.customs.title }}

<h2 class="sub">{{ t.customs.docsTitle }}</h2>

<div class="grid3">
<div v-for="c in t.customs.docs" class="card">
<h3>{{ c.title }}</h3>
<ul><li v-for="x in c.items">{{ x }}</li></ul>
</div>
</div>

<h2 class="sub">{{ t.customs.countriesTitle }}</h2>

<p class="countries" v-html="t.customs.countries" />

<p class="note" v-html="t.customs.note" />

<style>
h1 { font-size: 2.2em; margin-bottom: 14px; }
.sub { font-size: 1.1em; }
.sub, .grid3 h3 { font-weight: 700; } /* bold in the pptx on this slide only */
.grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: .9em; margin: .7em 0 1.2em; font-size: .86em; }
.countries { font-size: .88em; margin: .5em 0 .9em; }
.note { font-size: .82em; }
</style>

---
layout: page
---

# {{ t.services.title }}

<div class="svc">
<IconRow :i="0"><tabler-plane /></IconRow>
<div>
<h3>{{ t.services.items[0].title }}</h3>
<ul><li v-for="x in t.services.items[0].items" v-html="x" /></ul>
</div>
<IconRow :i="1"><tabler-plane-tilt /></IconRow>
<div>
<h3>{{ t.services.items[1].title }}</h3>
<ul><li v-for="x in t.services.items[1].items" v-html="x" /></ul>
</div>
<IconRow :i="2"><tabler-truck /></IconRow>
<div>
<h3>{{ t.services.items[2].title }}</h3>
<ul><li v-for="x in t.services.items[2].items" v-html="x" /></ul>
</div>
</div>

<style>
h1 { font-size: 2.2em; }
.svc { display: grid; grid-template-columns: 3em 1fr; gap: 1.3em .6em; margin-top: 1.4em; font-size: .84em; }
.svc h3 { font-size: 1.05em; margin-bottom: .3em; }
.svc ul { margin: 0; padding-left: 1.1em; }
.svc li { margin: .2em 0; line-height: 1.45; }
.svc .row { grid-template-columns: 1fr; }
</style>

---
layout: photo
image: img/runway.jpg
---

<h1 class="ind-title">{{ t.industries.title }}</h1>

<div class="ind">
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 300, duration: 600 } }"><tabler-car /><span>{{ t.industries.items[0] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 410, duration: 600 } }"><tabler-rocket /><span>{{ t.industries.items[1] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 520, duration: 600 } }"><tabler-cpu /><span>{{ t.industries.items[2] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 630, duration: 600 } }"><tabler-heartbeat /><span>{{ t.industries.items[3] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 740, duration: 600 } }"><tabler-hanger /><span>{{ t.industries.items[4] }}</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 850, duration: 600 } }"><tabler-file-text /><span>{{ t.industries.items[5] }}</span></div>
</div>

<style>
.ind-title { font-size: 2.8em; margin: 70px 0 30px 16px; }
.ind { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.6em 0; text-align: center; }
.ind > div { display: flex; flex-direction: column; align-items: center; gap: .5em; }
.ind svg { font-size: 2.6em; }
.ind span { font: 500 1.15em var(--f-display); }
</style>

---
layout: page
noBadge: true
noFooter: true
---

<script setup>
import { brand, vcard } from './brand'
</script>

<div class="contacts">
  <h2>{{ t.contacts.title }}</h2>
  <Qr :value="vcard" :size="230" />
  <a :href="`tel:${brand.phone.replace(/\s/g, '')}`">{{ brand.phone }}</a>
  <a :href="`mailto:${brand.email}`">{{ brand.email }}</a>
</div>

<style>
.contacts { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.2em; }
.contacts h2 { font-size: 1.6em; margin-bottom: .6em; }
.contacts a { font: 500 1.15em var(--f-display); color: var(--c-brand); text-decoration: none; }
</style>
