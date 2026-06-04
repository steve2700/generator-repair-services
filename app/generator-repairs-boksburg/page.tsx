import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Boksburg | Expert Service in Boksburg',
  description: 'Professional generator repairs and servicing in Boksburg. Emergency callouts for industrial and commercial clients. East Rand generator specialists. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-boksburg',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function BoksburgPage() {
  return (
    <>
      <AreaSchema areaName="Boksburg" url="/generator-repairs-boksburg" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Boksburg' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Boksburg, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Boksburg is a key industrial centre on Johannesburg&apos;s East Rand, with a strong 
              manufacturing and engineering sector. Factories, foundries, and industrial facilities 
              in the area depend on reliable power for continuous operations. Generator Repair 
              Services provides specialised industrial generator services throughout Boksburg.
            </p>

            <p>
              Our Boksburg coverage includes the industrial areas, the CBD, Bartlett, Cloverdene, 
              Sunward Park, Dawn Park, and surrounding suburbs. We work with heavy industrial 
              clients requiring large standby systems as well as commercial and residential customers.
            </p>

            <p>
              Industrial generators face demanding conditions and require experienced technicians. 
              Our team understands the complexities of large diesel generators and the industrial 
              environments they operate in.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Boksburg</h2>
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
              Serving Boksburg and surrounding areas including Bartlett, Cloverdene, Sunward Park, 
              Dawn Park, and surrounding industrial zones.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Boksburg?</h2>
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
