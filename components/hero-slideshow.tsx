'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  { src: '/images/Industrial_Generator_Repair_Team.webp',               alt: 'Industrial generator repair team on-site in Gauteng' },
  { src: '/images/2026-06-11_Generator_Preventative_Maintenance.webp',  alt: 'Generator preventative maintenance Gauteng' },
  { src: '/images/generator-repair-technician-onsite-midrand.webp',     alt: 'Generator repair technician on-site in Midrand' },
  { src: '/images/generator-repair-services-technicians.webp',          alt: 'Generator Repair Services technician team' },
  { src: '/images/Technician_Servicing_Generator.webp',                 alt: 'Technician servicing a generator' },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Show hero image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-[#c8a84b] w-4' : 'bg-white/30 w-1.5 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </>
  )
}
