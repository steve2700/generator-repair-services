import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'Generator Servicing Gauteng | Regular Maintenance Service',
  description: 'Professional generator servicing across Gauteng. Oil changes, filter replacements, coolant checks, and full system inspections. Keep your generator reliable. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-servicing',
  },
}

const relatedServices = [
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/load-bank-testing', label: 'Load Bank Testing' },
]

export default function GeneratorServicingPage() {
  return (
    <>
      <ServiceSchema
        name="Generator Servicing"
        description="Professional generator servicing across Gauteng. Regular maintenance keeps your generator reliable and extends its lifespan."
        url="/generator-servicing"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Generator Servicing' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Servicing</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Regular servicing is the key to generator reliability. A well-maintained generator starts 
              when you need it, runs efficiently, and lasts for years. Neglected generators fail at the 
              worst possible moments, typically during extended loadshedding when you need them most. 
              Generator Repair Services provides comprehensive servicing that keeps your equipment in 
              peak condition.
            </p>

            <p>
              Our standard service includes engine oil and filter changes, fuel filter replacement, 
              air filter inspection or replacement, coolant level and condition checks, battery testing 
              and terminal cleaning, belt inspection and tensioning, and a complete operational test. 
              We also inspect fuel lines, hoses, and connections for signs of wear or deterioration.
            </p>

            <p>
              Service intervals depend on your generator type and usage patterns. Standby generators 
              that run only during power outages typically need servicing annually or after a set 
              number of running hours. Prime power generators running continuously require more 
              frequent attention. We help you establish the right service schedule for your specific 
              situation.
            </p>

            <p>
              During every service, we document the condition of your generator and note any developing 
              issues before they become failures. This proactive approach lets you budget for upcoming 
              repairs and avoid unexpected breakdowns. We provide detailed service reports you can use 
              for warranty purposes or asset management.
            </p>
          </div>

          <div className="mt-12 p-6 bg-brand-surface border border-border">
            <p className="text-foreground/80">
              This service is available across all Gauteng areas including Johannesburg, Pretoria, 
              Sandton, Midrand, Centurion, and surrounding regions.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Related Services</h2>
            <ul className="space-y-2">
              {relatedServices.map((service) => (
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
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Servicing?</h2>
          <p className="text-brand-white/80 mb-8">
            Schedule your generator service today to keep your backup power reliable.
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
