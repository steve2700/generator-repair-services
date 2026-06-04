import type { Metadata } from 'next'
import Link from 'next/link'
import FAQSchema from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Generator Repair Services Gauteng | Professional Generator Repairs & Servicing',
  description: 'Professional generator repair, servicing and maintenance across Gauteng. Emergency callouts available. Diesel, petrol and industrial generators. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/generator-maintenance', label: 'Generator Maintenance' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-installation', label: 'Generator Installation' },
  { href: '/load-bank-testing', label: 'Load Testing' },
  { href: '/avr-repairs', label: 'AVR Repairs' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs' },
  { href: '/generator-rewinding', label: 'Generator Rewinding' },
]

const areas = [
  'Johannesburg', 'Pretoria', 'Sandton', 'Centurion', 'Midrand', 'Randburg',
  'Roodepoort', 'Kempton Park', 'Boksburg', 'Benoni', 'Germiston', 'Alberton',
  'Edenvale', 'Krugersdorp', 'Springs', 'Soweto', 'Fourways', 'Vereeniging'
]

const homepageFAQs = [
  {
    question: 'How quickly can you respond to an emergency generator breakdown?',
    answer: 'We offer same-day emergency callouts across all of Gauteng. In most cases, we can have a technician on-site within 2-4 hours of your call. For businesses and essential services, we prioritise response times to minimise your downtime during loadshedding or power outages.',
  },
  {
    question: 'Do you service all generator brands and types?',
    answer: 'Yes, our technicians are trained and experienced in servicing all major generator brands including Cummins, Perkins, Caterpillar, Deutz, Volvo, John Deere, and many others. We work with diesel generators, petrol generators, and industrial standby systems of all sizes.',
  },
  {
    question: 'What areas in Gauteng do you cover?',
    answer: 'We provide generator repair and servicing across the entire Gauteng province, including Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, and all surrounding areas. No matter where you are in Gauteng, we can get to you.',
  },
]

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={homepageFAQs} />
      
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8a84b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl text-balance">
            Generator Repairs & Servicing Across Gauteng
          </h1>
          <p className="text-lg md:text-xl text-brand-white/80 max-w-2xl mb-10 leading-relaxed">
            When loadshedding strikes or your generator fails, you need expert technicians you can trust. 
            We provide fast, reliable generator repairs, servicing and maintenance for homes and businesses 
            throughout Gauteng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0603160484"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red text-brand-white font-semibold hover:bg-red-800 transition-colors text-lg"
            >
              Call 060 316 0484
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold hover:text-brand-black transition-colors text-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-center text-foreground/80 text-sm md:text-base">
            Serving Gauteng Since 2010 · All Generator Brands · Same-Day Callouts Available · Fully Insured Technicians
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Generator Services</h2>
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                Generator Repair Services is your trusted partner for all generator-related needs in Gauteng. 
                From emergency repairs during critical power outages to scheduled maintenance that keeps your 
                equipment running at peak performance, our experienced technicians handle it all.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                We specialise in diesel and petrol generators of all sizes, from small residential units to 
                large industrial standby systems. Our team carries the parts and expertise needed to diagnose 
                and fix issues on the first visit, minimising your downtime and keeping your operations running.
              </p>
            </div>
            <div className="md:col-span-2">
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-foreground hover:text-brand-gold transition-colors font-medium"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Gauteng Businesses Trust Us</h2>
          <div className="max-w-3xl space-y-8">
            <p className="text-lg leading-relaxed text-foreground/80">
              With over a decade of experience in the generator repair industry, our technicians have seen 
              and fixed it all. We maintain certifications across all major generator brands and stay current 
              with the latest diagnostic techniques and repair methods. When you call us, you get professionals 
              who understand your equipment inside and out.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              We know that when your generator fails, every minute counts. That is why we offer same-day 
              emergency callouts across all of Gauteng, with most responses within 2-4 hours. Our vehicles 
              are stocked with common parts, and our technicians are trained to work efficiently without 
              cutting corners. We get you back online fast.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              No hidden fees, no surprise charges. Before we begin any work, you will receive a clear 
              assessment and honest quote. We stand behind our repairs with a workmanship guarantee, 
              giving you peace of mind that the job is done right the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Generator Repairs Across Gauteng</h2>
          <p className="text-lg leading-relaxed text-foreground/80 mb-10 max-w-3xl">
            From the commercial hubs of Sandton and Johannesburg to the industrial areas of Boksburg and 
            Germiston, we provide comprehensive generator services throughout Gauteng province. Our mobile 
            technicians reach every corner of the region.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3">
            {areas.map((area) => (
              <Link
                key={area}
                href={`/generator-repairs-${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-foreground/80 hover:text-brand-gold transition-colors"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-brand-red text-brand-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Generator Emergency? We Respond Fast.</h2>
          <p className="text-lg md:text-xl text-brand-white/90 mb-8 max-w-2xl mx-auto">
            Do not let a generator failure disrupt your business or leave your home without power. 
            Our emergency team is ready to help.
          </p>
          <a
            href="tel:0603160484"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-white text-brand-red font-bold text-xl hover:bg-brand-surface transition-colors"
          >
            060 316 0484
          </a>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl space-y-8">
            {homepageFAQs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/faq"
              className="text-brand-gold hover:text-foreground font-medium transition-colors"
            >
              View all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom spacing for mobile call bar */}
      <div className="h-14 md:hidden" />
    </>
  )
}
