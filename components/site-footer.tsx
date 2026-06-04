import Link from 'next/link'

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-installation', label: 'Installation' },
  { href: '/load-bank-testing', label: 'Load Bank Testing' },
]

const areas = [
  { href: '/generator-repairs-johannesburg', label: 'Johannesburg' },
  { href: '/generator-repairs-pretoria', label: 'Pretoria' },
  { href: '/generator-repairs-sandton', label: 'Sandton' },
  { href: '/generator-repairs-midrand', label: 'Midrand' },
  { href: '/generator-repairs-centurion', label: 'Centurion' },
  { href: '/generator-repairs-randburg', label: 'Randburg' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Generator Repair Services</h3>
            <p className="text-brand-white/70 leading-relaxed mb-4">
              Professional generator repair, servicing and maintenance across Gauteng. We keep your power running when you need it most.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <a href="tel:0603160484" className="text-brand-gold hover:text-brand-white transition-colors font-mono">
                  060 316 0484
                </a>
              </p>
              <p>
                <a href="mailto:info@generatorrepairservices.co.za" className="text-brand-gold hover:text-brand-white transition-colors">
                  info@generatorrepairservices.co.za
                </a>
              </p>
              <p className="text-brand-white/70">Serving all of Gauteng, South Africa</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-brand-white/70 hover:text-brand-gold transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-brand-white/70 hover:text-brand-gold transition-colors text-sm"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-brand-gold hover:text-brand-white transition-colors text-sm font-medium"
                >
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-white/60">
          <p>&copy; {new Date().getFullYear()} Generator Repair Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
