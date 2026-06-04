import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

export const metadata: Metadata = {
  title: 'Control Panel Repairs Gauteng | Generator Controller Service',
  description: 'Generator control panel repairs across Gauteng. From relay replacements to controller programming. Expert diagnosis and repair. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/control-panel-repairs',
  },
}

const relatedServices = [
  { href: '/avr-repairs', label: 'AVR Repairs' },
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function ControlPanelRepairsPage() {
  return (
    <>
      <ServiceSchema
        name="Control Panel Repairs"
        description="Generator control panel repairs across Gauteng. Expert diagnosis and repair of generator controllers and electrical panels."
        url="/control-panel-repairs"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Control Panel Repairs' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Control Panel Repairs</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              The control panel is the brain of your generator system, managing starting sequences, 
              monitoring engine parameters, controlling output, and coordinating automatic transfer 
              in standby applications. When control panel components fail, the generator may not 
              start, may shut down unexpectedly, or may fail to transfer power correctly. Generator 
              Repair Services repairs and upgrades control systems across all generator types.
            </p>

            <p>
              Control panel problems range from simple relay failures to complex controller malfunctions. 
              Common issues include failed start relays, faulty fuel solenoids, defective sensors and 
              senders, damaged wiring and connections, failed circuit breakers, and malfunctioning 
              automatic transfer switches. Our technicians systematically diagnose the fault and 
              implement targeted repairs.
            </p>

            <p>
              Modern generators use sophisticated digital controllers that monitor dozens of parameters 
              and provide detailed fault codes. We work with all major controller brands including 
              Deep Sea Electronics, ComAp, Woodward, and others. Our team can read and interpret 
              fault logs, adjust settings, update firmware, and replace controllers when necessary.
            </p>

            <p>
              For older generators with basic mechanical controls, we offer upgrades to modern digital 
              systems. These upgrades provide better monitoring, more reliable automatic operation, 
              and remote monitoring capabilities. We assess your requirements and recommend appropriate 
              control system upgrades that add functionality without unnecessary complexity.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Control Panel Repairs?</h2>
          <p className="text-brand-white/80 mb-8">
            Contact us for expert control panel diagnosis and repair.
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
