import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'Generator Maintenance Plans Gauteng | Scheduled Maintenance',
  description: 'Generator maintenance contracts and scheduled service plans across Gauteng. We track service intervals and handle maintenance proactively. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-maintenance',
  },
}

const relatedServices = [
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/load-bank-testing', label: 'Load Bank Testing' },
  { href: '/generator-repairs', label: 'Generator Repairs' },
]

export default function GeneratorMaintenancePage() {
  return (
    <>
      <ServiceSchema
        name="Generator Maintenance Plans"
        description="Scheduled generator maintenance contracts across Gauteng. Proactive maintenance keeps your generator ready when you need it."
        url="/generator-maintenance"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Maintenance Plans' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Maintenance Plans</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              For businesses and homeowners who rely on generator backup power, maintenance contracts 
              offer peace of mind and cost predictability. Generator Repair Services provides tailored 
              maintenance plans that ensure your generator receives proper care on schedule, without 
              you having to remember service dates or chase down technicians.
            </p>

            <p>
              Our maintenance agreements are customised to your equipment and usage. We assess your 
              generator type, age, running hours, and criticality to establish an appropriate service 
              schedule. We then track all service intervals, contact you proactively when service is 
              due, and maintain complete records of all work performed.
            </p>

            <p>
              Maintenance contract clients receive priority scheduling and preferred rates. When your 
              generator needs attention outside scheduled visits, you go to the front of the queue. 
              This priority access is particularly valuable during extended loadshedding periods when 
              demand for generator services peaks across Gauteng.
            </p>

            <p>
              Every maintenance visit includes a comprehensive inspection that goes beyond basic 
              servicing. We check for developing problems, test safety systems, verify proper 
              operation under load, and document the overall condition of your equipment. Issues 
              identified during these inspections can be addressed before they cause failures, 
              saving you from emergency repair costs and unexpected downtime.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Maintenance Plan?</h2>
          <p className="text-brand-white/80 mb-8">
            Contact us to discuss a maintenance agreement tailored to your generator.
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
