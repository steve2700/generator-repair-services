import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Pretoria | Expert Service in PTA',
  description: 'Professional generator repairs and servicing in Pretoria. Emergency callouts, maintenance, and installation. Serving Pretoria East, North, and Central. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-pretoria',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function PretoriaPage() {
  return (
    <>
      <AreaSchema areaName="Pretoria" url="/generator-repairs-pretoria" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Pretoria' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Pretoria, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Pretoria, South Africa&apos;s administrative capital, hosts government departments, 
              embassies, and major corporate headquarters that cannot afford power disruptions. 
              Generator Repair Services provides comprehensive generator services throughout 
              Pretoria, ensuring businesses and residents maintain power during loadshedding 
              and outages.
            </p>

            <p>
              Our Pretoria coverage spans from Centurion in the south to Montana in the north, 
              and from Pretoria West to the eastern suburbs. We service generators in Hatfield, 
              Menlyn, Brooklyn, Waterkloof, Lynnwood, Arcadia, Sunnyside, and throughout the 
              greater Pretoria area.
            </p>

            <p>
              Government facilities and diplomatic missions have strict uptime requirements. 
              Our maintenance contracts ensure these critical installations receive proactive 
              service that prevents failures. For residential clients, we offer the same 
              professional standard of service, keeping your home comfortable during extended 
              loadshedding periods.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Pretoria</h2>
            <ul className="space-y-2">
              {services.map((service) => (
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

          <div className="mt-12 p-6 bg-brand-surface border border-border">
            <p className="text-foreground/80">
              Serving Pretoria and surrounding neighbourhoods including Hatfield, Menlyn, Brooklyn, 
              Waterkloof, Lynnwood, Arcadia, Sunnyside, Montana, and Pretoria West.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Pretoria?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator service in PTA.
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
