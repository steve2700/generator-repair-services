import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Edenvale | Expert Service in Edenvale',
  description: 'Professional generator repairs and servicing in Edenvale. Emergency callouts, maintenance, and installation. Near OR Tambo Airport. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-edenvale',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function EdenvalePage() {
  return (
    <>
      <AreaSchema areaName="Edenvale" url="/generator-repairs-edenvale" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Edenvale' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Edenvale, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Edenvale is a thriving commercial area near OR Tambo International Airport with 
              significant business parks and retail centres. The area&apos;s proximity to the 
              airport means many businesses operate on tight schedules that cannot accommodate 
              power outages. Generator Repair Services ensures Edenvale businesses stay powered.
            </p>

            <p>
              Our Edenvale coverage includes Greenstone, Meadowdale, Elandsfontein, Isando, 
              and surrounding commercial areas. We service generators at corporate offices, 
              retail parks, and the residential suburbs of Edenvale.
            </p>

            <p>
              Businesses near the airport often have 24-hour operations and premium clients. 
              Our rapid emergency response ensures that when generator problems occur, they 
              are resolved quickly and professionally.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Edenvale</h2>
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
              Serving Edenvale and surrounding areas including Greenstone, Meadowdale, 
              Elandsfontein, and Isando.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Edenvale?</h2>
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
