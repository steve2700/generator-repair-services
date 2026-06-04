interface AreaSchemaProps {
  areaName: string
  url: string
}

export default function AreaSchema({ areaName, url }: AreaSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Generator Repair Services',
    telephone: '+27603160484',
    email: 'info@generatorrepairservices.co.za',
    url: 'https://www.generatorrepairservices.co.za',
    areaServed: {
      '@type': 'City',
      name: areaName,
      containedInPlace: {
        '@type': 'State',
        name: 'Gauteng',
        containedInPlace: {
          '@type': 'Country',
          name: 'South Africa',
        },
      },
    },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: areaName,
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    description: `Professional generator repair, servicing and maintenance in ${areaName}, Gauteng.`,
    sameAs: [`https://www.generatorrepairservices.co.za${url}`],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
