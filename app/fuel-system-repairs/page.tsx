import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'Fuel System Repairs Gauteng | Injector & Pump Service',
  description: 'Generator fuel system repairs across Gauteng. Fuel contamination, injector problems, pump failures. Expert diagnosis and repair. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/fuel-system-repairs',
  },
}

const relatedServices = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
]

export default function FuelSystemRepairsPage() {
  return (
    <>
      <ServiceSchema
        name="Fuel System Repairs"
        description="Generator fuel system repairs across Gauteng. Expert diagnosis and repair of fuel contamination, injectors, and pump problems."
        url="/fuel-system-repairs"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Fuel System Repairs' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fuel System Repairs</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Fuel system problems are among the most common causes of generator failures. Contaminated 
              fuel, degraded diesel, clogged filters, failed lift pumps, worn injectors, and blocked 
              lines all prevent your generator from running properly. Generator Repair Services 
              diagnoses and repairs fuel system issues across all diesel and petrol generator types.
            </p>

            <p>
              Diesel fuel degrades over time, particularly in standby generators that sit for extended 
              periods between uses. Bacteria and fungi grow in the fuel, producing sludge that clogs 
              filters and injectors. Water condensation in tanks accelerates this degradation. We test 
              fuel quality, clean or polish contaminated fuel, and flush systems when necessary to 
              restore proper fuel delivery.
            </p>

            <p>
              Injector problems cause rough running, black smoke, poor fuel economy, and loss of power. 
              Worn or clogged injectors cannot atomise fuel correctly, leading to incomplete combustion. 
              We test injector spray patterns and flow rates, cleaning or replacing injectors as needed. 
              Fuel pumps, both mechanical lift pumps and high-pressure injection pumps, are tested and 
              rebuilt or replaced when faulty.
            </p>

            <p>
              Fuel line inspection is part of every fuel system service. Cracked, hardened, or deteriorated 
              lines can leak fuel or allow air into the system, causing starting problems or shutdowns. 
              We replace suspect lines and ensure all connections are secure and leak-free.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Fuel System Repairs?</h2>
          <p className="text-brand-white/80 mb-8">
            Contact us for expert fuel system diagnosis and repair.
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
