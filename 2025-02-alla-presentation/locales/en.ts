// English texts. This file defines the shape every other language must follow.
// Strings marked "html" may contain <strong> and <br>.
const en = {
  who: {
    title: 'Who We Are',
    rows: [
      { title: 'Founded in 2020', text: 'Based on over a decade of experience in time-critical logistics' },
      { title: 'Core team', text: 'With 10+ years working together' },
      { title: 'Specialized in urgent shipments', text: 'OBC, NFO, and express road solutions' },
      { title: 'Flexible in approach', text: 'We adapt to what each shipment really needs' },
      { title: '1,000+ couriers and partners worldwide', text: 'But we only work with a trusted, vetted circle' },
      { title: 'Quality over quantity', text: 'We focus on precision, reliability, and long-term relationships' },
    ],
  },
  how: {
    title: 'How We Work',
    rows: [
      'Operating 24/7 with global coverage and fast response',
      'Standard OBC quotes within 15\u00a0min, NFO within 30\u00a0min',
      'Carefully selected global courier network',
      'Real-time tracking and full transparency',
      'Constant communication, from quote to POD',
      'Tailored solutions, not templates',
    ],
  },
  obc: {
    whatTitle: 'What is OBC (On Board Courier)?',
    whatText: 'OBC stands for On Board Courier, a premium service where a dedicated courier personally accompanies your urgent shipment from start to finish, ensuring fast and secure delivery without ever parting with the package.',
    howTitle: 'How does OBC work?',
    howText: 'With On Board Courier (OBC), a dedicated courier personally collects your urgent shipment, carries it onboard, and hand-delivers it directly to the destination. This process ensures maximum security, speed, and real-time tracking for your critical deliveries.',
    perks: ['Fast delivery', 'Secure handling', 'Real-time tracking', 'Maximum peace of mind'],
  },
  timeline: {
    title: 'OBC Mission Timeline',
    steps: [
      { title: 'Request Confirmed', text: 'Shipment details are confirmed and approved.' },
      { title: 'Courier Pick-Up', text: 'The courier collects the package and ensures proper handling.' },
      { title: 'Customs Clearance & Departure', text: 'Export clearance is completed, and the courier boards the flight with the shipment.' },
      { title: 'Arrival & Import Clearance', text: 'The courier lands and completes import formalities.' },
      { title: 'Final Delivery', text: 'Shipment is delivered, and delivery confirmation is shared with the client.' },
    ],
  },
  quote: {
    beforeTitle: 'Details Required for a Quote',
    before: [
      { title: 'Shipment Details', items: ['Number of boxes', 'Weight and dimensions', 'Description of goods', 'Readiness for pick-up'] },
      { title: 'Origin and Destination', items: ['Exact pick-up and delivery locations', 'Include specific address details, if applicable'] },
      { title: 'Delivery Timeframe', items: ['Required delivery date and time'] },
    ],
    afterTitle: 'Details Required After Confirmation',
    after: [
      { title: 'Shipper Info', items: ['Company name and address', 'Contact person’s name, phone number, and email'] },
      { title: 'Documents', items: ['Invoice', 'Packing list', 'Reference number', 'Customs instructions, if applicable'] },
      { title: 'Consignee Info', items: ['Company name and address', 'Contact person’s name, phone number, and email'] },
    ],
  },
  customs: {
    title: 'Customs: Documents and Supported Countries',
    docsTitle: 'Documents Required for Customs Clearance',
    docs: [
      { title: 'Core Documents', items: ['Commercial Invoice', 'Packing List', 'Certificate of Origin', 'HS Code'] },
      { title: 'Additional Documents', items: ['Export or Import permits', 'Power of Attorney (POA) for customs clearance'] },
      { title: 'Courier-Specific', items: ['Passport', 'Flight Tickets'] },
    ],
    countriesTitle: 'Supported Countries',
    countriesText: 'We provide customs clearance services for a broad range of countries worldwide, including:',
    countries: ['Mexico', 'United States', 'European Union', 'And many others'],
    note: '<strong>Note:</strong> Customs procedures vary by country and airport. Contact us for specific country requirements and tailored support.', // html
  },
  services: {
    title: 'Next Flight Out (NFO), Charter, Express Road',
    items: [ // items are html
      { title: 'Next Flight Out (NFO)', items: [
        '<strong>For bulkier and heavier shipments</strong> that cannot be hand-carried, NFO ensures your cargo is prioritized on the next available flight.',
        'Ideal for <strong>large or oversized packages</strong>, leveraging commercial flight cargo holds for speed and efficiency.',
      ] },
      { title: 'Air Charter', items: [
        'Designed for <strong>large-scale or specialized shipments</strong>, air charter provides an <strong>exclusive aircraft</strong> for complete control and flexibility.',
        'Perfect for <strong>oversized cargo</strong>, high-value goods, or urgent situations where commercial flights are not suitable.',
      ] },
      { title: 'Express Road', items: [
        'Offers <strong>fast and reliable ground transportation</strong> for heavy or bulky shipments within specific regions.',
        'Utilizes <strong>dedicated vans and professional drivers</strong> to ensure secure, time-critical deliveries.',
      ] },
    ],
  },
  industries: {
    title: 'Industries We Serve',
    items: ['Automotive', 'Aerospace', 'Electronics', 'Healthcare', 'Fashion', 'Documents'],
  },
  contacts: {
    title: 'Contacts',
  },
}

export default en
export type Messages = typeof en
