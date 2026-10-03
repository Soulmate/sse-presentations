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

# Who We Are

<div class="list">
<IconRow :i="0" title="Founded in 2020" text="Based on over a decade of experience in time-critical logistics"><tabler-building-skyscraper /></IconRow>
<IconRow :i="1" title="Core team" text="With 10+ years working together"><tabler-users-group /></IconRow>
<IconRow :i="2" title="Specialized in urgent shipments" text="OBC, NFO, and express road solutions"><tabler-package /></IconRow>
<IconRow :i="3" title="Flexible in approach" text="We adapt to what each shipment really needs"><tabler-adjustments-horizontal /></IconRow>
<IconRow :i="4" title="1,000+ couriers and partners worldwide" text="But we only work with a trusted, vetted circle"><tabler-heart-handshake /></IconRow>
<IconRow :i="5" title="Quality over quantity" text="We focus on precision, reliability, and long-term relationships"><tabler-star /></IconRow>
</div>

<style>
.list { display: flex; flex-direction: column; gap: .95em; }
</style>

---
layout: split
image: img/sky.jpg
side: right
---

# How We Work

<div class="list">
<IconRow :i="0" text="Operating 24/7 with global coverage and fast response"><tabler-world /></IconRow>
<IconRow :i="1" text="Standard OBC quotes within 15 min, NFO within 30 min"><tabler-hourglass /></IconRow>
<IconRow :i="2" text="Carefully selected global courier network"><tabler-affiliate /></IconRow>
<IconRow :i="3" text="Real-time tracking and full transparency"><tabler-map-pin /></IconRow>
<IconRow :i="4" text="Constant communication, from quote to POD"><tabler-messages /></IconRow>
<IconRow :i="5" text="Tailored solutions, not templates"><tabler-sparkles /></IconRow>
</div>

<style>
.list { display: flex; flex-direction: column; gap: 1.35em; }
</style>

---
layout: page
---

<div class="card intro" v-motion :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0 }">

## What is OBC (On Board Courier)?

OBC stands for On Board Courier, a premium service where a dedicated courier personally accompanies your urgent shipment from start to finish, ensuring fast and secure delivery without ever parting with the package.

</div>

<div class="card intro" v-motion :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { delay: 150 } }">

## How does OBC work?

With On Board Courier (OBC), a dedicated courier personally collects your urgent shipment, carries it onboard, and hand-delivers it directly to the destination. This process ensures maximum security, speed, and real-time tracking for your critical deliveries.

</div>

<div class="perks">
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 400, duration: 600 } }"><tabler-run /><h3>Fast delivery</h3></div>
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 520, duration: 600 } }"><tabler-shield-lock /><h3>Secure handling</h3></div>
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 640, duration: 600 } }"><tabler-map-2 /><h3>Real-time tracking</h3></div>
  <div v-motion :initial="{ opacity: 0, y: 20, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 760, duration: 600 } }"><tabler-mood-smile-beam /><h3>Maximum peace of mind</h3></div>
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

# OBC Mission Timeline

<Timeline :steps="[
  { title: 'Request Confirmed', text: 'Shipment details are confirmed and approved.' },
  { title: 'Courier Pick-Up', text: 'The courier collects the package and ensures proper handling.' },
  { title: 'Customs Clearance & Departure', text: 'Export clearance is completed, and the courier boards the flight with the shipment.' },
  { title: 'Arrival & Import Clearance', text: 'The courier lands and completes import formalities.' },
  { title: 'Final Delivery', text: 'Shipment is delivered, and delivery confirmation is shared with the client.' },
]">
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

## Details Required for a Quote

<div class="grid3">
<div class="card">

### Shipment Details
- Number of boxes
- Weight and dimensions
- Description of goods
- Readiness for pick-up

</div>
<div class="card">

### Origin and Destination
- Exact pick-up and delivery locations
- Include specific address details, if applicable

</div>
<div class="card">

### Delivery Timeframe
- Required delivery date and time

</div>
</div>

## Details Required After Confirmation

<div class="grid3">
<div class="card">

### Shipper Info
- Company name and address
- Contact person's name, phone number, and email

</div>
<div class="card">

### Documents
- Invoice
- Packing list
- Reference number
- Customs instructions, if applicable

</div>
<div class="card">

### Consignee Info
- Company name and address
- Contact person's name, phone number, and email

</div>
</div>

<style>
.grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: .9em; margin: .8em 0 1.4em; font-size: .86em; }
</style>

---
layout: page
---

# Customs: Documents and Supported Countries

<h2 class="sub">Documents Required for Customs Clearance</h2>

<div class="grid3">
<div class="card">

### Core Documents
- Commercial Invoice
- Packing List
- Certificate of Origin
- HS Code

</div>
<div class="card">

### Additional Documents
- Export or Import permits
- Power of Attorney (POA) for customs clearance

</div>
<div class="card">

### Courier-Specific
- Passport
- Flight Tickets

</div>
</div>

<h2 class="sub">Supported Countries</h2>

<p class="countries">We provide customs clearance services for a broad range of countries worldwide, including:<br>Mexico | United States | European Union | And many others</p>

<p class="note"><strong>Note:</strong> Customs procedures vary by country and airport. Contact us for specific country requirements and tailored support.</p>

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

# Next Flight Out (NFO), Charter, Express Road

<div class="svc">
<IconRow :i="0"><tabler-plane /></IconRow>
<div>

### Next Flight Out (NFO)
- **For bulkier and heavier shipments** that cannot be hand-carried, NFO ensures your cargo is prioritized on the next available flight.
- Ideal for **large or oversized packages**, leveraging commercial flight cargo holds for speed and efficiency.

</div>
<IconRow :i="1"><tabler-plane-tilt /></IconRow>
<div>

### Air Charter
- Designed for **large-scale or specialized shipments**, air charter provides an **exclusive aircraft** for complete control and flexibility.
- Perfect for **oversized cargo**, high-value goods, or urgent situations where commercial flights are not suitable.

</div>
<IconRow :i="2"><tabler-truck /></IconRow>
<div>

### Express Road
- Offers **fast and reliable ground transportation** for heavy or bulky shipments within specific regions.
- Utilizes **dedicated vans and professional drivers** to ensure secure, time-critical deliveries.

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

<h1 class="ind-title">Industries We Serve</h1>

<div class="ind">
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 300, duration: 600 } }"><tabler-car /><span>Automotive</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 410, duration: 600 } }"><tabler-rocket /><span>Aerospace</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 520, duration: 600 } }"><tabler-cpu /><span>Electronics</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 630, duration: 600 } }"><tabler-heartbeat /><span>Healthcare</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 740, duration: 600 } }"><tabler-hanger /><span>Fashion</span></div>
  <div v-motion :initial="{ opacity: 0, y: 24, scale: .85 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 850, duration: 600 } }"><tabler-file-text /><span>Documents</span></div>
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
  <h2>Contacts</h2>
  <Qr :value="vcard" :size="230" />
  <a :href="`tel:${brand.phone.replace(/\s/g, '')}`">{{ brand.phone }}</a>
  <a :href="`mailto:${brand.email}`">{{ brand.email }}</a>
</div>

<style>
.contacts { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.2em; }
.contacts h2 { font-size: 1.6em; margin-bottom: .6em; }
.contacts a { font: 500 1.15em var(--f-display); color: var(--c-brand); text-decoration: none; }
</style>
