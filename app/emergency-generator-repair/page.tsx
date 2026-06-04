import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'Emergency Generator Repair Gauteng | Same-Day Callouts',
  description: 'Emergency generator repair and same-day callouts across Gauteng. Generator down during loadshedding? We respond fast. Call 060 316 0484 now.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/emergency-generator-repair',
  },
}

const relatedServices = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs' },
]

export default function EmergencyGeneratorRepairPage() {
  return (
    <>
      <ServiceSchema
        name="Emergency Generator Repair"
        description="Emergency generator repair and same-day callouts across Gauteng. Fast response when your generator fails."
        url="/emergency-generator-repair"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Emergency Callouts' },
          ]}
        />
      </div>

      {/* Urgent Banner */}
      <div className="bg-brand-red text-brand-white py-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold">
            Generator emergency? Call now: <a href="tel:0603160484" className="underline">060 316 0484</a>
          </p>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Generator Repair</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              When your generator fails during loadshedding or a critical power outage, every minute 
              without power costs you money and disrupts your operations. Generator Repair Services 
              provides emergency callout response across all of Gauteng, with technicians available 
              to get to you the same day in most cases.
            </p>

            <p>
              Our emergency response team is equipped to handle the most common generator failures 
              on-site. We carry diagnostic equipment, starter batteries, common sensors and switches, 
              belts, filters, and other frequently needed parts. Many emergency repairs can be completed 
              during the first visit, getting your power restored without the delays of scheduling 
              return trips.
            </p>

            <p>
              We understand that businesses have different levels of criticality. Data centres, medical 
              facilities, retail operations, and manufacturing plants all face significant consequences 
              from extended power outages. When you call our emergency line, we assess your situation 
              and prioritise accordingly, getting the most critical cases addressed first.
            </p>

            <p>
              Even in emergency situations, we provide upfront communication about what we find and 
              what it will cost to fix. If a repair requires parts we do not carry, we will tell you 
              immediately and source them as quickly as possible. Our goal is to restore your power 
              with minimal delay and no surprises on the bill.
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

      <section className="bg-brand-red text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Generator Down? Call Now.</h2>
          <p className="text-brand-white/90 mb-8">
            Our emergency team is ready to respond. Same-day service across Gauteng.
          </p>
          <a
            href="tel:0603160484"
            className="inline-flex items-center justify-center px-10 py-5 bg-brand-white text-brand-red font-bold text-xl hover:bg-brand-surface transition-colors"
          >
            060 316 0484
          </a>
        </div>
      </section>

      <div className="h-14 md:hidden" />
    </>
  )
}
