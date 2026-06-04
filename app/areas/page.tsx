import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Service Areas | Generator Repairs Across Gauteng',
  description: 'Generator repair and servicing available across all of Gauteng including Johannesburg, Pretoria, Sandton, Midrand, Centurion, and surrounding areas. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/areas',
  },
}

const areas = [
  { slug: 'johannesburg', name: 'Johannesburg' },
  { slug: 'pretoria', name: 'Pretoria' },
  { slug: 'sandton', name: 'Sandton' },
  { slug: 'midrand', name: 'Midrand' },
  { slug: 'centurion', name: 'Centurion' },
  { slug: 'randburg', name: 'Randburg' },
  { slug: 'roodepoort', name: 'Roodepoort' },
  { slug: 'kempton-park', name: 'Kempton Park' },
  { slug: 'boksburg', name: 'Boksburg' },
  { slug: 'benoni', name: 'Benoni' },
  { slug: 'germiston', name: 'Germiston' },
  { slug: 'alberton', name: 'Alberton' },
  { slug: 'edenvale', name: 'Edenvale' },
  { slug: 'krugersdorp', name: 'Krugersdorp' },
  { slug: 'springs', name: 'Springs' },
  { slug: 'soweto', name: 'Soweto' },
  { slug: 'fourways', name: 'Fourways' },
  { slug: 'vereeniging', name: 'Vereeniging' },
]

export default function AreasPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas' },
          ]}
        />
      </div>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Areas We Serve</h1>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-3xl mb-6">
            Generator Repair Services provides comprehensive generator repairs, servicing, and 
            maintenance throughout Gauteng province. Our mobile technicians travel to your location, 
            whether you are in the heart of Johannesburg, the industrial areas of the East Rand, 
            or the northern suburbs of Pretoria.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-3xl mb-12">
            No matter where you are in Gauteng, we can reach you. Our service vehicles are equipped 
            with diagnostic tools and common parts, allowing us to complete many repairs on-site 
            without return visits. For emergency callouts, we prioritise response times to minimise 
            your downtime.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/generator-repairs-${area.slug}`}
                className="p-4 border border-border bg-brand-white hover:border-brand-gold transition-colors"
              >
                <span className="font-medium text-foreground">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Gauteng?</h2>
          <p className="text-brand-white/80 mb-8 max-w-2xl mx-auto">
            We service all areas across Gauteng province. Contact us today.
          </p>
          <a
            href="tel:0603160484"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-red text-brand-white font-semibold hover:bg-red-800 transition-colors text-lg"
          >
            Call 060 316 0484
          </a>
        </div>
      </section>

      <div className="h-14 md:hidden" />
    </>
  )
}
