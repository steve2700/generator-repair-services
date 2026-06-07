import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Generator Installation Gauteng | Professional Setup, Wiring & Commissioning',
  description:
    'Professional generator installation across Gauteng. Site assessment, foundation, fuel lines, electrical connections, changeover switch wiring and full commissioning. SANS compliant. Call 060 316 0484.',
  keywords: [
    'generator installation Gauteng',
    'generator installation Johannesburg',
    'generator changeover switch installation Gauteng',
    'generator electrical connection Gauteng',
    'generator setup Gauteng',
    'automatic changeover switch Gauteng',
    'generator commissioning Gauteng',
    'standby generator installation Johannesburg',
    'generator wiring Gauteng',
    'SANS compliant generator installation Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-installation',
  },
  openGraph: {
    title: 'Generator Installation Gauteng | Professional Setup, Wiring & Commissioning',
    description:
      'Professional generator installation across Gauteng. Site assessment, fuel lines, electrical connections, changeover switch and commissioning. SANS compliant. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-installation',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const installationSteps = [
  {
    step: '01',
    title: 'Site Assessment',
    desc: 'We evaluate your power requirements, available space, ventilation, fuel storage options, and electrical infrastructure before any work begins.',
  },
  {
    step: '02',
    title: 'Generator Sizing Advice',
    desc: 'We confirm the correct kVA rating for your load profile — avoiding undersized units that overload and oversized units that wet-stack.',
  },
  {
    step: '03',
    title: 'Foundation & Mounting',
    desc: 'Correct placement and anti-vibration mounting to manufacturer spec, including concrete bases, lifting, and positioning.',
  },
  {
    step: '04',
    title: 'Fuel System Installation',
    desc: 'Fuel tank, supply lines, return lines, and day tank installation with correct fittings and leak-tested connections.',
  },
  {
    step: '05',
    title: 'Electrical & Changeover Switch',
    desc: 'SANS-compliant wiring to your distribution board plus automatic or manual changeover switch installation and configuration.',
  },
  {
    step: '06',
    title: 'Commissioning & Handover',
    desc: 'Full load test, control system configuration, operator walkthrough, and all compliance documentation provided on completion.',
  },
]

const whyUs = [
  {
    num: '01',
    title: 'SANS-compliant installations',
    body: 'All electrical connections and installations comply with SANS standards. We provide documentation for compliance and insurance purposes.',
  },
  {
    num: '02',
    title: 'Complete scope, one team',
    body: 'From foundation to final commissioning, we handle everything. No coordinating multiple contractors or gaps in responsibility.',
  },
  {
    num: '03',
    title: 'Correct sizing guidance',
    body: 'We help you confirm the right generator for your load — preventing the costly mistakes of over or undersizing before installation.',
  },
  {
    num: '04',
    title: 'Ongoing support after install',
    body: 'Once installed, we offer servicing and maintenance plans to keep your new generator in peak condition for years.',
  },
]

const relatedServices = [
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'AMF / ATS controllers' },
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Oil, filters, full inspection' },
  { href: '/load-bank-testing', label: 'Load Bank Testing', desc: 'Capacity verification' },
  { href: '/generator-maintenance', label: 'Maintenance Plans', desc: 'Scheduled service contracts' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function GeneratorInstallationPage() {
  return (
    <>
      <ServiceSchema
        name="Generator Installation"
        description="Professional generator installation across Gauteng. Complete setup including site assessment, foundation, fuel system, electrical connections, changeover switch and commissioning. SANS compliant."
        url="/generator-installation"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Generator Installation' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generator-installation.png"
            alt="Professional generator installation including electrical connections and changeover switch in Gauteng"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#c8a84b]" />
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase">
              Generator Installation · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Installation.<br />
            <span className="text-[#c8a84b]">Done Right, First Time.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            A professional installation is critical to the safety, performance, and longevity of
            your generator. We handle the complete scope — from site assessment and foundation
            to final commissioning — across all of Gauteng.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['SANS-compliant wiring', 'Changeover switch included', 'Fuel system installation', 'Full commissioning & load test'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="#c8a84b" strokeWidth="1"/>
                  <path d="M4 7l2 2 4-4" stroke="#c8a84b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/65 text-sm">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0603160484"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#b91c1c] text-white font-black text-base hover:bg-red-800 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call 060 316 0484
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c8a84b]/40 text-[#c8a84b] font-semibold text-base hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Installation process ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Our Process</p>
            <h2 id="process-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              From Assessment to Commissioning
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/10">
            {installationSteps.map((item) => (
              <div key={item.step} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.step}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy + why us ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">The Service</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Professional Generator Installation Across Gauteng
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  A properly installed generator provides reliable backup power for years. A poorly
                  installed one creates ongoing problems, safety risks, and premature failures.
                  Generator Repair Services provides professional installation services that ensure
                  your new generator operates safely, efficiently, and in compliance with all
                  applicable regulations.
                </p>
                <p>
                  Every installation begins with a thorough site assessment. We evaluate your power
                  requirements, available space, ventilation needs, fuel storage options, and
                  electrical infrastructure. This assessment ensures the generator you have selected
                  is appropriate for your needs and that we can install it correctly in your
                  available space.
                </p>
                <p>
                  Our installation services cover the complete scope: generator positioning and
                  mounting, fuel system connections and storage, exhaust routing and ventilation,
                  electrical connections to your distribution board, automatic or manual changeover
                  switch installation, and control system configuration.
                </p>
                <p>
                  After installation, we thoroughly test the system under load to verify proper
                  operation. We walk you through the controls, explain the maintenance requirements,
                  and ensure you know how to operate your new generator safely. All installations
                  include compliance documentation for insurance and regulatory purposes.
                </p>
              </div>
            </div>

            {/* Why us sidebar */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Why Choose Us</p>
              {whyUs.map((item, i) => (
                <div key={item.num} className={`flex gap-5 py-5 ${i < whyUs.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}>
                  <span className="text-[#c8a84b]/40 font-black text-[22px] leading-none w-8 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[#0a0a0a] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">Planning a new installation?</p>
                <p className="text-white/50 text-sm mb-4">Call to discuss your requirements and get a quote.</p>
                <a
                  href="tel:0603160484"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  060 316 0484
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section className="py-12 bg-[#f5f4f0] border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white border-l-2 border-[#c8a84b]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#c8a84b]" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">
              <strong className="text-[#0a0a0a] font-bold">Service coverage:</strong>{' '}
              Generator installation is available across all Gauteng areas including Johannesburg,
              Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Boksburg,
              Benoni, Germiston, Alberton, Fourways, and surrounding regions.{' '}
              <Link href="/areas" className="text-[#c8a84b] hover:text-[#0a0a0a] font-semibold transition-colors">
                View all service areas →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="py-14 bg-white border-t border-[#1a1a1a]/8" aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-lg font-bold text-[#0a0a0a] mb-6">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-4 bg-[#f5f4f0] border border-[#1a1a1a]/8 hover:border-[#c8a84b]/40 transition-colors"
              >
                <p className="font-bold text-sm text-[#0a0a0a] group-hover:text-[#c8a84b] transition-colors mb-1">{s.label}</p>
                <p className="text-xs text-[#1a1a1a]/45">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Call to action">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Installation?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Call to discuss your installation requirements and get a quote. We cover all
                of Gauteng from site assessment through to commissioning.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                060 316 0484
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold text-base hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
