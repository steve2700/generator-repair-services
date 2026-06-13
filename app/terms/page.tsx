import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Generator Repair Services Gauteng',
  description:
    'Terms and conditions for Generator Repair Services Gauteng. Read our service terms, payment conditions, warranties and liability policy.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/terms',
  },
}

const sections = [
  {
    heading: '1. About These Terms',
    body: `These terms and conditions govern the relationship between Generator Repair Services Gauteng ("we", "us", "our") and any person or business ("you", "the client") who requests or receives services from us.

By requesting a quote, booking a service, or allowing us to carry out work on your generator, you agree to these terms. If you do not agree, please do not use our services.`,
  },
  {
    heading: '2. Our Services',
    body: `We provide generator repair, servicing, maintenance, installation, load bank testing, AVR repairs, control panel repairs, fuel system repairs, and rewinding services across Gauteng.

All services are carried out by qualified technicians. We reserve the right to decline any job we deem unsafe, outside our scope, or where access to the equipment is inadequate.`,
  },
  {
    heading: '3. Quotes and Pricing',
    body: `All quotes are provided in South African Rand (ZAR) and are valid for 14 days from the date of issue unless stated otherwise.

Quotes are based on the information available at the time. If additional faults or required work are discovered once a job is underway, we will inform you before proceeding and obtain your approval. We will not carry out additional work without your consent.

Call-out fees apply to emergency and on-site visits and are charged separately from parts and labour costs. These fees are communicated upfront before a technician is dispatched.`,
  },
  {
    heading: '4. Payment Terms',
    body: `Payment is due upon completion of the work unless a credit account or alternative arrangement has been agreed in writing in advance.

We accept EFT bank transfer and cash. Invoices not paid within 30 days of the due date may attract interest at the prime lending rate plus 2% per annum.

For large jobs or parts orders, we may require a deposit of up to 50% before work commences. This will be communicated in your quote.`,
  },
  {
    heading: '5. Workmanship Warranty',
    body: `We warrant our workmanship for 90 days from the date the service or repair is completed. If a fault directly related to our work recurs within this period, we will return to inspect and rectify it at no additional labour charge.

This warranty does not cover:

— Faults caused by misuse, neglect, or external damage after our visit
— Normal wear and tear of parts
— Faults unrelated to the work we carried out
— Damage caused by power surges, flooding, or acts of God
— Parts supplied by the client`,
  },
  {
    heading: '6. Parts and Materials',
    body: `Where parts are required, we will source quality OEM-specification or quality aftermarket components. Parts carry the manufacturer's warranty where applicable.

We are not liable for delays caused by parts availability, shipping, or supplier issues beyond our control. We will communicate any delays to you promptly.

Parts that have been ordered or installed cannot be returned or refunded unless they are found to be faulty.`,
  },
  {
    heading: '7. Client Responsibilities',
    body: `You agree to:

— Provide accurate information about the generator, its history, and the fault or service required
— Ensure safe and adequate access to the equipment at the agreed time
— Ensure the area is reasonably clear and safe for our technicians to work
— Not operate the generator while our technicians are working on it unless specifically instructed to do so
— Inform us of any known hazards on site before our technicians arrive

Failure to provide adequate access or safe working conditions may result in the job being rescheduled and a call-out fee being charged.`,
  },
  {
    heading: '8. Liability',
    body: `Our liability for any loss or damage arising from our services is limited to the value of the work carried out. We are not liable for:

— Indirect or consequential losses (including loss of profit, revenue, or production)
— Damage caused by pre-existing faults not related to our work
— Loss or damage arising from your failure to follow our recommendations
— Damage resulting from operating the generator outside its rated capacity

Nothing in these terms limits our liability for personal injury or death caused by our negligence.`,
  },
  {
    heading: '9. Cancellations and Rescheduling',
    body: `You may cancel or reschedule a booking by giving us at least 4 hours' notice before the scheduled appointment. Cancellations with less than 4 hours' notice may incur a call-out fee.

We reserve the right to reschedule appointments due to unforeseen circumstances. We will notify you as early as possible and find the next available time that suits you.`,
  },
  {
    heading: '10. Maintenance Contracts',
    body: `Maintenance contracts are governed by a separate written agreement. In the absence of a specific agreement, these general terms apply.

Maintenance contracts may be cancelled by either party with 30 days' written notice. Services already performed and parts already installed are payable in full regardless of cancellation.`,
  },
  {
    heading: '11. Governing Law',
    body: `These terms are governed by the laws of the Republic of South Africa. Any disputes arising from these terms or our services will be subject to the jurisdiction of the South Gauteng High Court or the applicable Magistrate's Court, depending on the value of the claim.

We encourage resolution of any disputes informally in the first instance. Please contact us directly so we can address your concern.`,
  },
  {
    heading: '12. Changes to These Terms',
    body: `We may update these terms from time to time. The current version will always be published on this page with the date it was last updated. Continued use of our services after changes are published constitutes acceptance of the updated terms.`,
  },
]

export default function TermsPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]} />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: June 2026 · Applicable to all services provided by Generator Repair Services Gauteng
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 md:py-20 bg-[#f5f4f0]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#1a1a1a]/70 text-base leading-relaxed mb-10 pb-10 border-b border-[#1a1a1a]/10">
            Please read these terms carefully before using our services. They set out your rights and
            obligations as a client, our responsibilities to you, and the conditions under which we
            carry out generator repair, servicing, and maintenance work across Gauteng.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{section.heading}</h2>
                <div className="w-8 h-0.5 bg-[#c8a84b] mb-4" />
                <p className="text-[#1a1a1a]/65 text-sm leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-14 p-6 bg-white border border-[#1a1a1a]/8">
            <h2 className="font-bold text-[#1a1a1a] mb-2">Questions about these terms?</h2>
            <p className="text-sm text-[#1a1a1a]/60 mb-4">
              Get in touch and we'll clarify anything you're unsure about before work begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#b91c1c] text-white font-semibold text-sm hover:bg-red-800 transition-colors"
              >
                Call 060 316 0484
              </a>
              <a
                href="mailto:info@generatorrepairservices.co.za"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-[#1a1a1a]/15 text-[#1a1a1a] font-semibold text-sm hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
              >
                info@generatorrepairservices.co.za
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer links ── */}
      <section className="py-10 bg-white border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row gap-4 text-sm">
          <Link href="/privacy-policy" className="text-[#1a1a1a]/50 hover:text-[#c8a84b] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-[#1a1a1a]/50 hover:text-[#c8a84b] transition-colors">
            Contact Us
          </Link>
          <Link href="/" className="text-[#1a1a1a]/50 hover:text-[#c8a84b] transition-colors">
            Back to Home
          </Link>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
