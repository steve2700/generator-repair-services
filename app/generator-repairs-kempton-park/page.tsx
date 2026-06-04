import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Kempton Park | Expert Service',
  description: 'Professional generator repairs and servicing in Kempton Park. Emergency callouts near OR Tambo Airport. Industrial and commercial generator service. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-kempton-park',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function KemptonParkPage() {
  return (
    <>
      <AreaSchema areaName="Kempton Park" url="/generator-repairs-kempton-park" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Kempton Park' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Kempton Park, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Kempton Park&apos;s proximity to OR Tambo International Airport makes it a hub for logistics, 
              freight forwarding, and businesses serving the aviation sector. These operations run 
              around the clock and cannot afford power interruptions. Generator Repair Services 
              provides rapid-response generator services to keep Kempton Park businesses operational.
            </p>

            <p>
              Our Kempton Park coverage includes the CBD, Glen Marais, Birch Acres, Aston Manor, 
              Edleen, and surrounding industrial areas. We service generators at warehouses, cold 
              storage facilities, office parks, and residential properties throughout the region.
            </p>

            <p>
              Airport-adjacent businesses often have strict operational requirements. Our maintenance 
              contracts ensure your generators meet these demands, with regular servicing and rapid 
              emergency response when issues arise.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Kempton Park</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-brand-gold hover:text-foreground transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-6 bg-brand-surface border border-border">
            <p className="text-foreground/80">
              Serving Kempton Park and surrounding areas including Glen Marais, Birch Acres, 
              Aston Manor, Edleen, and surrounding industrial parks.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Kempton Park?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator service.
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
