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

  const handleNavigation = (path: string) => {
    window.location.href = path
  }

  const handleContact = () => {
    setIsPopupOpen(true)
  }

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

      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center text-white transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-6">
          From Masterpiece of Time into a <span className="text-secondary font-bold">Masterpiece of Living</span>
        </h1>

        <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
          Redefining luxury real estate consulting in India's premium segment
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="premium-button"
            onClick={() => handleNavigation('/properties')}
          >
            Explore Properties
          </Button>
                      <Button 
              className="border-2 border-white text-primary bg-white hover:bg-white/90 hover:text-black text-lg px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={handleContact}
            >
              Get Started
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
