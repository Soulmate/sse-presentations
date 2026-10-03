// Company details used in footers and the contacts slide.
export const brand = {
  name: 'SSE Logistics',
  email: 'help@sse-logistics.de',
  site: 'sse-logistics.de',
  phone: '+49 221 745 90 700',
  url: 'https://sse-logistics.de',
  address: { street: 'Balthasar Straße 65', city: 'Köln', zip: '50670', country: 'Germany' },
}

// One-line address and a Google Maps link to it (contacts slide)
export const addressLine = `${brand.address.street}, ${brand.address.zip} ${brand.address.city}, ${brand.address.country}`
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`

// Contact card encoded in the QR on the contacts slide (same as the source pptx).
export const vcard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:;;;;',
  `FN:${brand.name}`,
  `ORG:${brand.name}`,
  `ADR;TYPE=WORK:;;${brand.address.street};${brand.address.city};;${brand.address.zip};${brand.address.country}`,
  `TEL;TYPE=WORK:${brand.phone}`,
  `EMAIL;TYPE=WORK,INTERNET:${brand.email}`,
  `URL:${brand.url}`,
  'END:VCARD',
].join('\n')
