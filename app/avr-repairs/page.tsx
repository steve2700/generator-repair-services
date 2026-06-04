import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'AVR Repairs Gauteng | Voltage Regulator Repair & Replacement',
  description: 'AVR and automatic voltage regulator repairs across Gauteng. Restore stable power output from your generator. Expert diagnosis and repair. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/avr-repairs',
  },
}

const relatedServices = [
  { href: '/control-panel-repairs', label: 'Control Panel Repairs' },
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-rewinding', label: 'Generator Rewinding' },
]

export default function AVRRepairsPage() {
  return (
    <>
      <ServiceSchema
        name="AVR & Voltage Regulator Repairs"
        description="AVR and automatic voltage regulator repairs across Gauteng. Restore stable power output from your generator."
        url="/avr-repairs"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'AVR Repairs' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AVR & Voltage Regulator Repairs</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              The Automatic Voltage Regulator is a critical component that maintains stable output 
              voltage regardless of load changes. When an AVR fails, you may experience voltage 
              fluctuations, low voltage that cannot power your equipment, high voltage that damages 
              connected devices, or complete loss of generator output. Generator Repair Services 
              diagnoses and repairs AVR problems to restore clean, stable power.
            </p>

            <p>
              AVR failures can result from age, heat exposure, power surges, moisture ingress, or 
              manufacturing defects. Symptoms include unstable voltage readings, the generator not 
              producing power despite the engine running normally, voltage that rises or falls with 
              load changes, or error codes on modern digital controllers. Our technicians use 
              specialised test equipment to pinpoint AVR problems accurately.
            </p>

            <p>
              Depending on the AVR type and failure mode, repair may be possible. We can replace 
              failed components on repairable units, restoring function at lower cost than full 
              replacement. For unrepairable units or when replacement is more economical, we source 
              and install compatible AVR modules from quality manufacturers.
            </p>

            <p>
              Proper AVR selection matters. We ensure replacement units match your generator 
              specifications and are calibrated correctly for your specific alternator. An 
              improperly matched or calibrated AVR causes the same problems as a failed one. 
              After installation, we verify stable voltage output across the full load range.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need AVR Repairs?</h2>
          <p className="text-brand-white/80 mb-8">
            Contact us for expert AVR diagnosis and repair.
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
