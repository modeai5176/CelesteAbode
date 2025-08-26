"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactPopup } from "@/components/contact-popup"
import { useEffect, useRef, useState } from "react"

const properties = [
  {
    image: "/luxury-villa-exterior-modern-architecture.png",
    price: "₹2.5 Cr",
    location: "Sector 50, Noida",
    specs: "4 BHK Villa • 3,200 sq ft",
    type: "Villa",
    features: ["Private Garden", "Swimming Pool", "Premium Finishes"],
  },
  {
    image: "/premium-apartment-interior-living-room.png",
    price: "₹1.8 Cr",
    location: "Sector 137, Noida",
    specs: "3 BHK Apartment • 2,100 sq ft",
    type: "Apartment",
    features: ["City Views", "Modern Amenities", "Prime Location"],
  },
  {
    image: "/residential-plot-with-landscaping.png",
    price: "₹85 Lakh",
    location: "Sector 168, Noida",
    specs: "Residential Plot • 200 sq yards",
    type: "Plot",
    features: ["Corner Plot", "Approved Layout", "Investment Ready"],
  },
]

export function PropertiesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<{ title: string; location: string } | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const handleNavigation = (path: string) => {
    window.location.href = path
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="properties" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-6">Featured Properties</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked premium homes that represent the pinnacle of luxury living and architectural excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card
              key={index}
              data-index={index}
              className={`premium-card hover-lift overflow-hidden group transition-all duration-500 ${
                visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={`${property.type} in ${property.location}`}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {property.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-primary">{property.price}</h3>
                </div>

                <p className="text-card-foreground font-semibold mb-2">{property.location}</p>
                <p className="text-muted-foreground mb-4">{property.specs}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-card border border-border px-2 py-1 rounded-full text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  className="premium-button w-full"
                  onClick={() => {
                    setSelectedProperty({
                      title: `${property.type} in ${property.location}`,
                      location: property.location
                    })
                    setIsPopupOpen(true)
                  }}
                >
                  Schedule Viewing
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-transparent"
            onClick={() => handleNavigation('/properties')}
          >
            View All Properties
          </Button>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false)
          setSelectedProperty(null)
        }}
        propertyTitle={selectedProperty?.title}
        propertyLocation={selectedProperty?.location}
      />
    </section>
  )
}
