import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Germiston | Expert Industrial Service',
  description: 'Professional generator repairs and servicing in Germiston. Industrial generator specialists. Emergency callouts for factories and warehouses. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-germiston',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function GermistonPage() {
  return (
    <>
      <AreaSchema areaName="Germiston" url="/generator-repairs-germiston" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Germiston' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Germiston, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Germiston is one of Gauteng&apos;s most significant industrial centres, with extensive 
              manufacturing, warehousing, and logistics operations. The area&apos;s industrial heritage 
              means large power demands and serious consequences when backup power fails. Generator 
              Repair Services specialises in industrial generator solutions for Germiston businesses.
            </p>

            <p>
              Our Germiston coverage includes the industrial zones, Primrose, Lambton, Delville, 
              Driehoek, and surrounding areas. We service everything from small commercial 
              generators to large industrial standby systems powering entire factories.
            </p>

            <p>
              Industrial clients in Germiston often run sensitive manufacturing processes that 
              require clean, stable power. Our servicing and repairs ensure generators deliver 
              the power quality your equipment demands.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Germiston</h2>
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
              Serving Germiston and surrounding areas including Primrose, Lambton, Delville, 
              Driehoek, and surrounding industrial areas.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Germiston?</h2>
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
