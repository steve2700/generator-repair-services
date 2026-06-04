'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const galleryImages = [
  {
    src: '/images/hero-generator.png',
    alt: 'Large industrial diesel generator',
    title: 'Industrial Generator Installation',
    category: 'Installation',
  },
  {
    src: '/images/generator-repair-technician.png',
    alt: 'Technician repairing a generator',
    title: 'Professional Generator Repair',
    category: 'Repairs',
  },
  {
    src: '/images/industrial-generator.png',
    alt: 'Commercial backup generator system',
    title: 'Commercial Backup Power System',
    category: 'Installation',
  },
  {
    src: '/images/control-panel.png',
    alt: 'Generator control panel with digital display',
    title: 'Control Panel Diagnostics',
    category: 'Repairs',
  },
  {
    src: '/images/generator-servicing.png',
    alt: 'Generator servicing and maintenance',
    title: 'Routine Maintenance Service',
    category: 'Servicing',
  },
  {
    src: '/images/emergency-repair.png',
    alt: 'Emergency generator repair at night',
    title: 'Emergency Callout Service',
    category: 'Emergency',
  },
  {
    src: '/images/residential-generator.png',
    alt: 'Residential standby generator installation',
    title: 'Home Backup Generator',
    category: 'Installation',
  },
  {
    src: '/images/load-bank-testing.png',
    alt: 'Load bank testing equipment',
    title: 'Load Bank Performance Testing',
    category: 'Testing',
  },
  {
    src: '/images/avr-repair.png',
    alt: 'AVR voltage regulator repair',
    title: 'AVR Board Repair',
    category: 'Repairs',
  },
  {
    src: '/images/fuel-system.png',
    alt: 'Generator fuel system components',
    title: 'Fuel System Maintenance',
    category: 'Servicing',
  },
  {
    src: '/images/generator-rewinding.png',
    alt: 'Generator alternator rewinding',
    title: 'Alternator Rewinding',
    category: 'Repairs',
  },
  {
    src: '/images/team-service-van.png',
    alt: 'Generator repair service vehicle and team',
    title: 'Mobile Service Team',
    category: 'Team',
  },
]

const categories = ['All', 'Repairs', 'Servicing', 'Installation', 'Testing', 'Emergency', 'Team']

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-brand-gold text-brand-black'
                : 'bg-brand-surface text-foreground hover:bg-brand-gold/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setLightboxImage(image)}
            className="group relative aspect-[4/3] overflow-hidden bg-brand-surface cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-brand-gold text-xs font-medium uppercase tracking-wider">{image.category}</span>
                <h3 className="text-brand-white font-semibold mt-1">{image.title}</h3>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-brand-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-brand-white hover:text-brand-gold transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10] bg-brand-surface">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-brand-gold text-sm font-medium uppercase tracking-wider">{lightboxImage.category}</span>
              <h3 className="text-brand-white text-xl font-semibold mt-1">{lightboxImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
          Need generator repair, servicing, or installation? Our experienced team is ready to help 
          with any generator project across Gauteng.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0603160484"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-red text-brand-white font-semibold hover:bg-red-800 transition-colors"
          >
            Call 060 316 0484
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold hover:text-brand-black transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}
