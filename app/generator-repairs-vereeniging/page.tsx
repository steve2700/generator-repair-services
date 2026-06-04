import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Vereeniging | Expert Service',
  description: 'Professional generator repairs and servicing in Vereeniging. Emergency callouts, maintenance, and installation. Vaal Triangle service. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-vereeniging',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function VereenigingPage() {
  return (
    <>
      <AreaSchema areaName="Vereeniging" url="/generator-repairs-vereeniging" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Vereeniging' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Vereeniging, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Vereeniging anchors the Vaal Triangle industrial region, with significant steel, 
              engineering, and manufacturing operations. The area&apos;s heavy industry depends on 
              reliable power, making generator maintenance critical. Generator Repair Services 
              provides industrial-strength generator solutions across Vereeniging and the Vaal.
            </p>

            <p>
              Our Vereeniging coverage includes the industrial areas, Three Rivers, Duncanville, 
              Unitas Park, Vanderbijlpark, and surrounding areas. We work with heavy industrial 
              clients as well as commercial and residential customers throughout the region.
            </p>

            <p>
              Industrial operations in the Vaal often run large generator systems that require 
              specialised expertise. Our technicians have experience with the scale and complexity 
              of industrial power requirements.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Vereeniging</h2>
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
              Serving Vereeniging and the Vaal Triangle including Three Rivers, Duncanville, 
              Unitas Park, and Vanderbijlpark.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Vereeniging?</h2>
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
