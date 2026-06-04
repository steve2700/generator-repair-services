import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Gauteng | Expert Diagnosis & Repair',
  description: 'Professional generator repair services across Gauteng. We diagnose and fix all generator faults including electrical, mechanical, and fuel system issues. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs',
  },
}

const relatedServices = [
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs' },
]

export default function GeneratorRepairsPage() {
  return (
    <>
      <ServiceSchema
        name="Generator Repairs"
        description="Professional generator repair services across Gauteng. Expert diagnosis and repair of all generator faults."
        url="/generator-repairs"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Generator Repairs' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              When your generator fails, you need technicians who can quickly identify the problem and 
              implement an effective repair. Generator Repair Services brings over a decade of hands-on 
              experience to every job, diagnosing and repairing generators of all makes, models, and sizes 
              across Gauteng.
            </p>

            <p>
              Generator failures can stem from numerous causes: electrical faults in the alternator or 
              control systems, mechanical wear in the engine, fuel delivery problems, cooling system 
              failures, or simply age-related component degradation. Our technicians carry diagnostic 
              equipment and common replacement parts, enabling us to complete many repairs on the first 
              visit without the delays of ordering parts or scheduling return trips.
            </p>

            <p>
              We work on residential standby generators, commercial backup systems, and industrial 
              power plants. Whether you have a small petrol generator or a large diesel unit, our 
              team has the training and experience to get it running again. We service all major 
              brands including Cummins, Perkins, Caterpillar, Deutz, Volvo, John Deere, Generac, 
              and many others.
            </p>

            <p>
              Every repair begins with a thorough diagnosis. We do not guess or swap parts hoping 
              to find the fault. We systematically test and inspect until we identify the root cause, 
              then provide you with a clear explanation and honest quote before proceeding with repairs. 
              This approach saves you money and ensures the repair actually solves your problem.
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

      {/* CTA Section */}
      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Repairs?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator repair service across Gauteng.
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
