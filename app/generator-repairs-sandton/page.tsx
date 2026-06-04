import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Sandton | Expert Service in Sandton',
  description: 'Professional generator repairs and servicing in Sandton. Emergency callouts for businesses and residences. Serving Sandton CBD and surrounding areas. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-sandton',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function SandtonPage() {
  return (
    <>
      <AreaSchema areaName="Sandton" url="/generator-repairs-sandton" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Sandton' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Sandton, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Sandton is Africa&apos;s financial hub, home to the Johannesburg Stock Exchange, major 
              banks, and multinational corporate headquarters. Power reliability is not optional 
              in this environment. Generator Repair Services provides rapid-response generator 
              services to Sandton businesses and the affluent residential areas surrounding them.
            </p>

            <p>
              Our Sandton service area covers the CBD, Sandhurst, Bryanston, Morningside, Rivonia, 
              Benmore, Gallo Manor, and surrounding suburbs. We understand that Sandton businesses 
              operate on tight schedules and demanding clients. When your generator fails, our 
              emergency team responds with urgency matching the situation.
            </p>

            <p>
              High-end residential properties in Sandton often feature sophisticated generator 
              systems with automatic transfer switches and remote monitoring. Our technicians 
              are experienced with these advanced installations, providing both routine maintenance 
              and complex repairs when needed.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Sandton</h2>
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
              Serving Sandton and surrounding neighbourhoods including Sandhurst, Bryanston, 
              Morningside, Rivonia, Benmore, Gallo Manor, and Sandton CBD.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Sandton?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator service in Sandton.
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
