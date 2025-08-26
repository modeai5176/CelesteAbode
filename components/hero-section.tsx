"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactPopup } from "@/components/contact-popup"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.avif"
        alt="Luxury real estate background"
        fill
        priority
        className="object-cover transition-transform duration-1000 hover:scale-105"
        sizes="100vw"
        quality={85}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/20" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center text-white transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-6">
          From Masterpiece of Time into a <span className="text-secondary">Masterpiece of Living</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Redefining luxury real estate consulting in India's premium segment
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.location.href = '/properties'}
          >
            Explore Properties
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => setIsPopupOpen(true)}
          >
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        propertyTitle="General Consultation"
        propertyLocation="Noida, India"
      />
    </section>
  )
}
