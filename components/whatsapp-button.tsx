'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  
  // Phone number 060 316 0484 formatted for WhatsApp (South Africa country code 27, drop the leading 0)
  const phoneNumber = '27603160484'
  const message = encodeURIComponent("Hi Generator Repair Services! I'd like to enquire about your services.")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={cn(
          'absolute bottom-full right-0 mb-3 whitespace-nowrap bg-[#1a1a1a] text-white px-4 py-2 text-sm shadow-lg transition-all duration-300',
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        )}
      >
        Chat with us on WhatsApp
        <div className="absolute top-full right-6 border-8 border-transparent border-t-[#1a1a1a]" />
      </div>

      {/* WhatsApp Button - Plain styled button per design requirements */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center px-5 py-3 bg-[#1a1a1a] text-[#c8a84b] font-medium border border-[#c8a84b] shadow-lg hover:bg-[#c8a84b] hover:text-[#1a1a1a] transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        WhatsApp Us
      </a>
    </div>
  )
}
