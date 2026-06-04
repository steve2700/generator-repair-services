import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'Generator Installation Gauteng | Professional Setup & Connection',
  description: 'Professional generator installation across Gauteng. Site assessment, electrical connections, fuel systems, and changeover switches. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-installation',
  },
}

const relatedServices = [
  { href: '/control-panel-repairs', label: 'Control Panel Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/load-bank-testing', label: 'Load Bank Testing' },
]

export default function GeneratorInstallationPage() {
  return (
    <>
      <ServiceSchema
        name="Generator Installation"
        description="Professional generator installation across Gauteng. Complete setup including electrical connections and changeover switches."
        url="/generator-installation"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Generator Installation' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Installation</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              A properly installed generator provides reliable backup power for years. A poorly 
              installed one creates ongoing problems, safety risks, and premature failures. 
              Generator Repair Services provides professional installation services that ensure 
              your new generator operates safely, efficiently, and in compliance with all applicable 
              regulations.
            </p>

            <p>
              Every installation begins with a site assessment. We evaluate your power requirements, 
              available space, ventilation needs, fuel storage options, and electrical infrastructure. 
              This assessment ensures the generator you have selected is appropriate for your needs 
              and that we can install it correctly in your available space.
            </p>

            <p>
              Our installation services cover the complete scope: generator positioning and mounting, 
              fuel system connections and storage, exhaust routing and ventilation, electrical 
              connections to your distribution board, automatic or manual changeover switch installation, 
              and control system configuration. We handle everything needed to get your generator 
              ready for operation.
            </p>

            <p>
              After installation, we thoroughly test the system under load to verify proper operation. 
              We walk you through the controls, explain the maintenance requirements, and ensure you 
              know how to operate your new generator safely. Our installations include all necessary 
              documentation for compliance purposes.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Installation?</h2>
          <p className="text-brand-white/80 mb-8">
            Contact us to discuss your installation requirements and get a quote.
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
