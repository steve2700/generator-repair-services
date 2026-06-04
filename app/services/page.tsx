import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Generator Services | Repairs, Servicing & Maintenance',
  description: 'Complete generator services across Gauteng including repairs, servicing, maintenance, emergency callouts, installation, and more. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/services',
  },
}

const services = [
  {
    href: '/generator-repairs',
    title: 'Generator Repairs',
    description: 'Expert diagnosis and repair of all generator faults, from minor electrical issues to major mechanical failures. We work on all brands and sizes, getting your generator back to full operation quickly.',
  },
  {
    href: '/generator-servicing',
    title: 'Generator Servicing',
    description: 'Regular servicing keeps your generator reliable and extends its lifespan. Our comprehensive service includes oil changes, filter replacements, coolant checks, and full system inspections.',
  },
  {
    href: '/generator-maintenance',
    title: 'Maintenance Plans',
    description: 'Scheduled maintenance contracts tailored to your usage patterns. We track service intervals and handle everything proactively, so your generator is always ready when you need it.',
  },
  {
    href: '/emergency-generator-repair',
    title: 'Emergency Callouts',
    description: 'Generator down during loadshedding? Our emergency response team is available for same-day callouts across Gauteng. We prioritise getting your power restored as quickly as possible.',
  },
  {
    href: '/generator-installation',
    title: 'Generator Installation',
    description: 'Professional installation of new generators, including site assessment, electrical connections, fuel systems, and changeover switches. We ensure your installation meets all safety standards.',
  },
  {
    href: '/load-bank-testing',
    title: 'Load Bank Testing',
    description: 'Verify your generator can handle its rated capacity with professional load bank testing. Essential for standby generators that rarely run under full load.',
  },
  {
    href: '/avr-repairs',
    title: 'AVR & Voltage Regulator Repairs',
    description: 'Automatic Voltage Regulator failures cause unstable power output. We diagnose and repair or replace AVR units to restore clean, stable power from your generator.',
  },
  {
    href: '/control-panel-repairs',
    title: 'Control Panel Repairs',
    description: 'From simple relay replacements to complex controller programming, we repair and upgrade generator control panels to keep your system operating correctly.',
  },
  {
    href: '/fuel-system-repairs',
    title: 'Fuel System Repairs',
    description: 'Fuel contamination, injector problems, and pump failures are common generator issues. We clean, repair, and replace fuel system components to restore proper operation.',
  },
  {
    href: '/generator-rewinding',
    title: 'Generator Rewinding',
    description: 'When generator windings fail, rewinding is often more economical than replacement. Our workshop handles alternator and motor rewinding to factory specifications.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services' },
          ]}
        />
      </div>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Generator Services</h1>
          <p className="text-lg leading-relaxed text-foreground/80 max-w-3xl mb-16">
            Generator Repair Services provides comprehensive generator solutions for residential, commercial, 
            and industrial clients across Gauteng. From emergency repairs to scheduled maintenance, our 
            experienced technicians deliver reliable service that keeps your power running.
          </p>

          <div className="space-y-12">
            {services.map((service) => (
              <div key={service.href} className="border-b border-border pb-12 last:border-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <Link href={service.href} className="hover:text-brand-gold transition-colors">
                    {service.title}
                  </Link>
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4 max-w-3xl">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-brand-gold hover:text-foreground font-medium transition-colors"
                >
                  Learn more about {service.title.toLowerCase()}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service?</h2>
          <p className="text-brand-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a quote or to schedule a service appointment. Emergency callouts available.
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
