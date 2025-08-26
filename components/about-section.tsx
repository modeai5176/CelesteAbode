"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactPopup } from "@/components/contact-popup"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const handleNavigation = (path: string) => {
    window.location.href = path
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">Our Philosophy</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Celeste Abode curates bespoke residential experiences — villas, apartments, legacy plots — all tailored to
              client aspirations. We balance cutting-edge technology with genuine human empathy to create extraordinary
              outcomes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every property we present is more than a transaction; it's a carefully considered match between your
              lifestyle and architectural excellence. Our approach combines data-driven insights with personalized
              service to deliver exceptional results that exceed expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="premium-button"
                onClick={() => handleNavigation('/philosophy')}
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={() => setIsPopupOpen(true)}
              >
                Our Story
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-800 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="hover-lift">
              <Image
                src="/modern-luxury-apartment-building-architectural-pho.png"
                alt="Luxury apartment building"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        propertyTitle="About Celeste Abode"
        propertyLocation="Noida, India"
      />
    </section>
  )
}
