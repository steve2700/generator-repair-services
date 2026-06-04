import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Centurion | Expert Service in Centurion',
  description: 'Professional generator repairs and servicing in Centurion. Emergency callouts, maintenance, and installation. Serving Centurion and surrounding areas. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-centurion',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function CenturionPage() {
  return (
    <>
      <AreaSchema areaName="Centurion" url="/generator-repairs-centurion" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Centurion' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Centurion, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Centurion bridges the gap between Pretoria and Johannesburg, with a mix of corporate 
              offices, retail centres, and established residential suburbs. The area&apos;s growth has 
              brought increased demand for reliable backup power. Generator Repair Services meets 
              this demand with professional generator services throughout Centurion.
            </p>

            <p>
              Our Centurion service area covers Highveld, Eldoraigne, Wierdapark, The Reeds, 
              Rooihuiskraal, Lyttelton, and surrounding areas. We service generators at shopping 
              centres, office parks, schools, and homes throughout the region.
            </p>

            <p>
              Centurion residents and businesses value reliability. Our maintenance programmes 
              ensure your generator receives timely service, preventing the inconvenience of 
              failures during critical moments. When emergencies do happen, we respond quickly 
              to get your power restored.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Centurion</h2>
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
              Serving Centurion and surrounding areas including Highveld, Eldoraigne, Wierdapark, 
              The Reeds, Rooihuiskraal, and Lyttelton.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Centurion?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator service in Centurion.
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
