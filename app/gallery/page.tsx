import type { Metadata } from 'next'
import Breadcrumbs from '@/components/breadcrumbs'
import GalleryGrid from '@/components/gallery-grid'

export const metadata: Metadata = {
  title: 'Generator Repair Gallery | Our Work Across Gauteng',
  description: 'View our generator repair, servicing and installation work across Gauteng. Professional generator services for residential and commercial clients.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/gallery',
  },
}

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Gallery' }]} />
      
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-lg md:text-xl text-brand-white/80 max-w-2xl">
            Browse our gallery of generator repairs, installations, and maintenance work 
            completed for homes and businesses across Gauteng.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <GalleryGrid />
        </div>
      </section>

      {/* Bottom spacing for mobile call bar */}
      <div className="h-14 md:hidden" />
    </>
  )
}
