import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'Generator Rewinding Gauteng | Alternator & Motor Rewinding',
  description: 'Generator rewinding services across Gauteng. Alternator and motor rewinding to factory specifications. Expert workshop service. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-rewinding',
  },
}

const relatedServices = [
  { href: '/avr-repairs', label: 'AVR Repairs' },
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs' },
]

export default function GeneratorRewindingPage() {
  return (
    <>
      <ServiceSchema
        name="Generator Rewinding"
        description="Generator rewinding services across Gauteng. Alternator and motor rewinding to factory specifications."
        url="/generator-rewinding"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Generator Rewinding' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Rewinding</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              When generator windings fail due to insulation breakdown, overheating, or mechanical 
              damage, rewinding is often more economical than replacing the entire alternator. 
              Generator Repair Services provides professional rewinding services that restore your 
              generator to full specification, often at a fraction of replacement cost.
            </p>

            <p>
              Winding failures typically result from thermal stress, moisture ingress, voltage spikes, 
              mechanical vibration, or simple age. Symptoms include reduced output, insulation resistance 
              test failures, burning smells, visible damage to windings, or complete loss of output. 
              We test windings thoroughly to determine whether rewinding is viable and cost-effective 
              for your particular unit.
            </p>

            <p>
              Our rewinding process follows manufacturer specifications for wire gauge, insulation class, 
              winding pattern, and connection configuration. We strip the old windings, clean and inspect 
              the core for damage, wind new coils using quality enamelled copper wire, install appropriate 
              insulation, and vacuum impregnate with varnish for long-term protection against moisture 
              and contamination.
            </p>

            <p>
              After rewinding, each unit undergoes comprehensive testing including insulation resistance, 
              winding resistance, high-potential testing, and load testing. We verify that the rewound 
              unit meets original specifications before returning it to service. Our rewinding work 
              is warranted against defects in materials and workmanship.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Rewinding?</h2>
          <p className="text-brand-white/80 mb-8">
            Contact us to discuss rewinding options for your generator.
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
