interface ServiceSchemaProps {
  name: string
  description: string
  url: string
}

export default function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Generator Repair Services',
      telephone: '+27603160484',
      email: 'info@generatorrepairservices.co.za',
      url: 'https://www.generatorrepairservices.co.za',
      areaServed: 'Gauteng, South Africa',
    },
    areaServed: {
      '@type': 'State',
      name: 'Gauteng',
      containedInPlace: {
        '@type': 'Country',
        name: 'South Africa',
      },
    },
    url: `https://www.generatorrepairservices.co.za${url}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
