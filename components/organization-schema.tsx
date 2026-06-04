export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Generator Repair Services',
    telephone: '+27603160484',
    email: 'info@generatorrepairservices.co.za',
    url: 'https://www.generatorrepairservices.co.za',
    areaServed: 'Gauteng, South Africa',
    priceRange: '$$',
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
    sameAs: [],
    image: 'https://www.generatorrepairservices.co.za/og-image.jpg',
    description: 'Professional generator repair, servicing and maintenance across Gauteng. Emergency callouts available.',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
