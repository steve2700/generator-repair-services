import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Alberton | Expert Service in Alberton',
  description: 'Professional generator repairs and servicing in Alberton. Emergency callouts, maintenance, and installation. South of Johannesburg. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-alberton',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function AlbertonPage() {
  return (
    <>
      <AreaSchema areaName="Alberton" url="/generator-repairs-alberton" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Alberton' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Alberton, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Alberton is a well-established area south of Johannesburg with a mix of residential 
              suburbs, retail centres, and light industrial operations. The community values 
              reliability, and Generator Repair Services delivers dependable generator solutions 
              to homes and businesses throughout Alberton.
            </p>

            <p>
              Our Alberton coverage includes Brackenhurst, Meyersdal, New Redruth, Alberante, 
              Verwoerdpark, and surrounding suburbs. We service generators at shopping centres, 
              schools, medical facilities, and residential properties.
            </p>

            <p>
              Alberton residents have experienced the impact of loadshedding on daily life. 
              Our services ensure your generator is ready when you need it, from regular 
              maintenance that prevents problems to emergency repairs when they occur.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Alberton</h2>
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
              Serving Alberton and surrounding areas including Brackenhurst, Meyersdal, 
              New Redruth, Alberante, and Verwoerdpark.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Alberton?</h2>
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
