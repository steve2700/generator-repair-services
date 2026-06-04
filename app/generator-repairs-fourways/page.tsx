import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Fourways | Expert Service in Fourways',
  description: 'Professional generator repairs and servicing in Fourways. Emergency callouts, maintenance, and installation. Northern suburbs service. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-fourways',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function FourwaysPage() {
  return (
    <>
      <AreaSchema areaName="Fourways" url="/generator-repairs-fourways" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Fourways' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Fourways, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Fourways is one of Johannesburg&apos;s fastest-growing commercial and residential nodes, 
              with major shopping centres, office parks, and upmarket residential estates. The 
              area&apos;s growth has brought increased demand for backup power solutions. Generator 
              Repair Services meets this demand with professional services throughout Fourways.
            </p>

            <p>
              Our Fourways coverage includes Lonehill, Dainfern, Cedar Lakes, Broadacres, 
              Douglasdale, and surrounding areas. We service generators at retail centres, 
              corporate offices, and the numerous estates in the area.
            </p>

            <p>
              Fourways residents and businesses expect high-quality service. Our technicians 
              deliver professional results, arriving on time and completing work to the 
              standards the area demands.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Fourways</h2>
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
              Serving Fourways and surrounding areas including Lonehill, Dainfern, Cedar Lakes, 
              Broadacres, and Douglasdale.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Fourways?</h2>
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
