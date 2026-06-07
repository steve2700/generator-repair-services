const BASE_URL = 'https://www.generatorrepairservices.co.za'

const GAUTENG_CITIES = [
  'Johannesburg', 'Pretoria', 'Sandton', 'Midrand', 'Centurion',
  'Randburg', 'Roodepoort', 'Kempton Park', 'Boksburg', 'Benoni',
  'Germiston', 'Alberton', 'Edenvale', 'Krugersdorp', 'Springs',
  'Soweto', 'Fourways', 'Vereeniging',
]

const SERVICES = [
  { name: 'Generator Repairs', url: '/generator-repairs' },
  { name: 'Generator Servicing', url: '/generator-servicing' },
  { name: 'Generator Maintenance', url: '/generator-maintenance' },
  { name: 'Emergency Generator Callouts', url: '/emergency-generator-repair' },
  { name: 'Generator Installation', url: '/generator-installation' },
  { name: 'Load Bank Testing', url: '/load-bank-testing' },
  { name: 'AVR & Voltage Regulator Repairs', url: '/avr-repairs' },
  { name: 'Control Panel Repairs', url: '/control-panel-repairs' },
  { name: 'Fuel System Repairs', url: '/fuel-system-repairs' },
  { name: 'Generator Rewinding', url: '/generator-rewinding' },
]

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#business`,
        name: 'Generator Repair Services',
        legalName: 'Generator Repair Services',
        description:
          'Professional generator repair, servicing and maintenance across Gauteng. Emergency callouts available for all brands of diesel and petrol generators.',
        url: BASE_URL,
        telephone: '+27603160484',
        email: 'info@generatorrepairservices.co.za',
        foundingDate: '2009',
        priceRange: '$$',
        currenciesAccepted: 'ZAR',
        paymentAccepted: 'Cash, EFT',
        image: `${BASE_URL}/og-image.jpg`,
        logo: `${BASE_URL}/logo_lite.png`,
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Gauteng',
          addressCountry: 'ZA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -26.2041,
          longitude: 28.0473,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
          },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+27603160484',
            contactType: 'customer service',
            contactOption: 'TollFree',
            areaServed: 'ZA',
            availableLanguage: 'English',
          },
          {
            '@type': 'ContactPoint',
            telephone: '+27603160484',
            contactType: 'emergency',
            areaServed: 'ZA',
            availableLanguage: 'English',
          },
        ],
        areaServed: {
          '@type': 'State',
          name: 'Gauteng',
          containedInPlace: {
            '@type': 'Country',
            name: 'South Africa',
            sameAs: 'https://www.wikidata.org/wiki/Q258',
          },
          containsPlace: GAUTENG_CITIES.map((city) => ({
            '@type': 'City',
            name: city,
          })),
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Generator Services',
          itemListElement: SERVICES.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Service',
              '@id': `${BASE_URL}${s.url}#service`,
              name: s.name,
              url: `${BASE_URL}${s.url}`,
              provider: { '@id': `${BASE_URL}/#business` },
            },
          })),
        },
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Generator Repair Services',
        description: 'Professional generator repair, servicing and maintenance across Gauteng.',
        publisher: { '@id': `${BASE_URL}/#business` },
        inLanguage: 'en-ZA',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/?s={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
