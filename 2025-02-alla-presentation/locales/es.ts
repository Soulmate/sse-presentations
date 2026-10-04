// Spanish texts: sources/marketing materials_spanish translation.docx plus the reviewer's corrections.
import type { Messages } from './en'

const es: Messages = {
  who: {
    title: 'Quiénes somos',
    rows: [
      { title: 'Fundada en 2020', text: 'Somos un equipo con más de una década de experiencia combinada en logística de tiempo crítico' },
      { title: 'Equipo principal', text: 'Más de 10 años trabajando juntos' },
      { title: 'Especializados en envíos urgentes', text: 'Soluciones OBC, NFO y transporte terrestre exprés' },
      { title: 'Enfoque flexible', text: 'Nos adaptamos a las necesidades reales de cada envío' },
      { title: 'Más de 1.000 couriers y colaboradores en todo el mundo', text: 'Trabajamos exclusivamente con una red de colaboradores confiables cuidadosamente seleccionados' },
      { title: 'Calidad sobre cantidad', text: 'Nos enfocamos en la precisión, la fiabilidad y las relaciones a largo plazo' },
    ],
  },
  how: {
    title: '¿Cómo trabajamos?',
    rows: [
      'Operamos 24/7 con cobertura global y respuesta rápida',
      'Cotizaciones OBC estándar en 15\u00a0min y NFO en 30\u00a0min',
      'Red global de couriers cuidadosamente seleccionada',
      'Seguimiento en tiempo real y total transparencia',
      'Comunicación constante, desde la cotización hasta el POD',
      'Soluciones a medida, no plantillas',
    ],
  },
  obc: {
    whatTitle: '¿Qué es OBC (On Board Courier)?',
    whatText: 'OBC significa On Board Courier, un servicio premium en el que un courier dedicado acompaña personalmente su envío urgente de principio a fin, garantizando una entrega rápida y segura sin separarse nunca del paquete.',
    howTitle: '¿Cómo funciona OBC?',
    howText: 'Con el servicio On Board Courier (OBC), un courier dedicado recoge personalmente su envío urgente, lo lleva consigo a bordo del avión y lo entrega en mano directamente en el destino. Este proceso garantiza máxima seguridad, rapidez y seguimiento en tiempo real para sus envíos críticos.',
    perks: ['Entrega rápida', 'Manipulación segura', 'Seguimiento en tiempo real', 'Máxima tranquilidad'],
  },
  timeline: {
    title: 'Cronología de una misión OBC',
    steps: [
      { title: 'Solicitud confirmada', text: 'Se confirman y aprueban los detalles del envío.' },
      { title: 'Recogida por el courier', text: 'El courier recoge el paquete y garantiza su correcta manipulación.' },
      { title: 'Despacho de aduanas y salida', text: 'Se completa el despacho de exportación y el courier aborda el vuelo con el envío.' },
      { title: 'Llegada y despacho de importación', text: 'El courier llega al destino y completa las formalidades de importación.' },
      { title: 'Entrega final', text: 'El envío se entrega y la confirmación de entrega se comparte con el cliente.' },
    ],
  },
  quote: {
    beforeTitle: 'Información necesaria para una cotización',
    before: [
      { title: 'Detalles del envío', items: ['Número de cajas', 'Peso y dimensiones', 'Descripción de la mercancía', 'Disponibilidad para la recogida'] },
      { title: 'Origen y destino', items: ['Ubicaciones exactas de recogida y entrega', 'Incluir direcciones específicas, cuando corresponda'] },
      { title: 'Plazo de entrega', items: ['Fecha y hora de entrega requeridas'] },
    ],
    afterTitle: 'Información necesaria tras la confirmación',
    after: [
      { title: 'Datos del remitente', items: ['Nombre y dirección de la empresa', 'Nombre, teléfono y correo electrónico de la persona de contacto'] },
      { title: 'Documentos', items: ['Factura', 'Lista de empaque', 'Número de referencia', 'Instrucciones aduaneras, cuando corresponda'] },
      { title: 'Datos del destinatario', items: ['Nombre y dirección de la empresa', 'Nombre, teléfono y correo electrónico de la persona de contacto'] },
    ],
  },
  customs: {
    title: 'Aduanas: documentos y países disponibles',
    docsTitle: 'Documentos necesarios para el despacho de aduanas',
    docs: [
      { title: 'Documentos principales', items: ['Factura comercial', 'Lista de empaque', 'Certificado de origen', 'Código HS'] },
      { title: 'Documentos adicionales', items: ['Permisos de exportación o importación', 'Poder notarial (POA) para el despacho de aduanas'] },
      { title: 'Documentos del courier', items: ['Pasaporte', 'Boletos de avión'] },
    ],
    countriesTitle: 'Países disponibles',
    countriesText: 'Ofrecemos servicios de despacho de aduanas en una amplia variedad de países en todo el mundo, incluyendo:',
    countries: ['México', 'Estados Unidos', 'Unión Europea', 'Y muchos más'],
    note: '<strong>Nota:</strong> Los procedimientos aduaneros varían según el país y el aeropuerto. Contáctenos para conocer los requisitos específicos de cada país y recibir asistencia personalizada.',
  },
  services: {
    title: 'Next Flight Out (NFO), Charter, Transporte Terrestre Exprés',
    items: [
      { title: 'Next Flight Out (NFO)', items: [
        'Para <strong>envíos más voluminosos y pesados</strong> que no pueden transportarse como equipaje de mano, NFO permite priorizar su carga en el siguiente vuelo disponible.',
        'Ideal para <strong>paquetes grandes o sobredimensionados</strong>, utilizando las bodegas de carga de vuelos comerciales para garantizar rapidez y eficiencia.',
      ] },
      { title: 'Charter aéreo', items: [
        'Diseñado para <strong>envíos de gran volumen o con requisitos especiales</strong>, el charter aéreo ofrece una <strong>aeronave exclusiva</strong> para una máxima flexibilidad.',
        'Ideal para <strong>carga sobredimensionada</strong>, mercancías de alto valor o situaciones urgentes en las que los vuelos comerciales no son adecuados.',
      ] },
      { title: 'Transporte terrestre exprés', items: [
        'Ofrece <strong>transporte terrestre rápido y fiable</strong> para envíos pesados o voluminosos dentro de regiones específicas.',
        'Utiliza <strong>vehículos dedicados y conductores profesionales</strong> para garantizar entregas seguras y de tiempo crítico.',
      ] },
    ],
  },
  industries: {
    title: 'Industrias que atendemos',
    items: ['Automotriz', 'Aeroespacial', 'Electrónica', 'Salud', 'Moda', 'Documentos'],
  },
  references: {
    title: 'Nuestras referencias',
    lead: 'La confianza de empresas líderes de distintos sectores.',
    rows: [
      { title: 'Experiencia comprobada', text: 'Trabajando con marcas globales y envíos críticos.' },
      { title: 'Altos estándares de cumplimiento', text: 'Cumpliendo con los requisitos específicos de cada sector.' },
      { title: 'Relaciones a largo plazo', text: 'Basadas en la fiabilidad, la flexibilidad y la calidad del servicio.' },
    ],
  },
  contacts: {
    title: 'Contacto',
  },
}

export default es
