"use client"

import { Button } from "@/components/ui/button"
import { ContactPopup } from "@/components/contact-popup"
import { useState } from "react"

export function CTASection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">Ready to find your masterpiece?</h2>

        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Let us help you discover the perfect property that matches your vision and lifestyle.
        </p>

        <Button 
          className="pill-button bg-secondary hover:bg-secondary/90 text-white text-lg px-12 py-4"
          onClick={() => setIsPopupOpen(true)}
        >
          Book a Consultation
        </Button>
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
