import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'Load Bank Testing Gauteng | Generator Capacity Testing',
  description: 'Professional load bank testing for generators across Gauteng. Verify your generator can handle its rated capacity. Essential for standby systems. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/load-bank-testing',
  },
}

const relatedServices = [
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-repairs', label: 'Generator Repairs' },
]

export default function LoadBankTestingPage() {
  return (
    <>
      <ServiceSchema
        name="Load Bank Testing"
        description="Professional load bank testing for generators across Gauteng. Verify your generator can handle its rated capacity."
        url="/load-bank-testing"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Load Bank Testing' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Load Bank Testing</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Standby generators often run only during testing or actual power outages, rarely 
              experiencing their full rated load. Over time, this light-duty operation can lead 
              to problems that only manifest under heavy load, precisely when you need the generator 
              most. Load bank testing reveals these hidden issues before they cause failures during 
              actual emergencies.
            </p>

            <p>
              A load bank is a device that places an artificial electrical load on the generator, 
              allowing us to test performance at various load levels up to and including full rated 
              capacity. During testing, we monitor voltage stability, frequency regulation, temperature 
              rise, fuel consumption, and overall operating behaviour. This data tells us whether 
              your generator can actually deliver the power it is rated for.
            </p>

            <p>
              Load bank testing also addresses a common diesel generator problem called wet stacking. 
              When diesel engines run under light loads for extended periods, unburned fuel and carbon 
              accumulate in the exhaust system. Running the generator under heavy load burns off these 
              deposits, restoring proper operation and preventing long-term damage.
            </p>

            <p>
              We recommend load bank testing annually for critical standby generators, or after any 
              major repair work. The test provides documented proof of your generator capacity, which 
              can be important for insurance purposes, compliance requirements, or simply your own 
              peace of mind that your backup power will perform when needed.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Load Bank Testing?</h2>
          <p className="text-brand-white/80 mb-8">
            Schedule load bank testing to verify your generator capacity.
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
