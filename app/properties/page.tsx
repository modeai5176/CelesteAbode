"use client"

import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactPopup } from "@/components/contact-popup"
import { MapPin, Bed, Bath, Square, Eye } from "lucide-react"

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<{ title: string; location: string } | null>(null)
  const filters = ["All", "Apartments", "Villas", "Plots"]

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  const properties = [
    {
      id: 1,
      type: "Apartments",
      title: "Skyline Residences",
      location: "Sector 62, Noida",
      price: "₹2.5 Cr",
      image: "/luxury-modern-apartment.png",
      beds: 3,
      baths: 2,
      area: "1,850 sq ft",
      featured: true,
    },
    {
      id: 2,
      type: "Villas",
      title: "Garden Villa Estate",
      location: "Sector 150, Noida",
      price: "₹4.2 Cr",
      image: "/luxury-villa-with-garden-and-modern-design.png",
      beds: 4,
      baths: 3,
      area: "3,200 sq ft",
      featured: false,
    },
    {
      id: 3,
      type: "Plots",
      title: "Premium Plot",
      location: "Sector 137, Noida",
      price: "₹1.8 Cr",
      image: "/premium-residential-plot-with-landscaping.png",
      beds: null,
      baths: null,
      area: "2,400 sq ft",
      featured: false,
    },
    {
      id: 4,
      type: "Apartments",
      title: "Metropolitan Heights",
      location: "Sector 76, Noida",
      price: "₹3.1 Cr",
      image: "/high-rise-luxury-apartment-complex.png",
      beds: 4,
      baths: 3,
      area: "2,100 sq ft",
      featured: true,
    },
    {
      id: 5,
      type: "Villas",
      title: "Royal Manor",
      location: "Sector 168, Noida",
      price: "₹5.5 Cr",
      image: "/luxury-royal-style-villa-with-grand-entrance.png",
      beds: 5,
      baths: 4,
      area: "4,500 sq ft",
      featured: false,
    },
    {
      id: 6,
      type: "Apartments",
      title: "Urban Oasis",
      location: "Sector 93, Noida",
      price: "₹2.8 Cr",
      image: "/modern-apartment-building-with-green-spaces.png",
      beds: 3,
      baths: 2,
      area: "1,950 sq ft",
      featured: false,
    },
  ]

  const filteredProperties =
    activeFilter === "All" ? properties : properties.filter((property) => property.type === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Properties
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Explore <span className="text-secondary">Premium Properties</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Discover exceptional homes and investment opportunities in prime locations.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={
                    activeFilter === filter ? "pill-button bg-secondary hover:bg-secondary/90 text-white" : "pill-button"
                  }
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Card
                  key={property.id}
                  className="border-0 bg-card overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      loading="lazy"
                    />
                    {property.featured && (
                      <Badge className="absolute top-4 left-4 bg-secondary text-white">Featured</Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">{property.title}</h3>
                    <p className="text-2xl font-bold text-secondary mb-4">{property.price}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      {property.beds && (
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          {property.beds} Beds
                        </div>
                      )}
                      {property.baths && (
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          {property.baths} Baths
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {property.area}
                      </div>
                    </div>

                    <Button 
                      className="w-full pill-button bg-secondary hover:bg-secondary/90 text-white"
                      onClick={() => {
                        setSelectedProperty({
                          title: property.title,
                          location: property.location
                        })
                        setIsPopupOpen(true)
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Schedule Viewing
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

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

      <Footer />
    </div>
  )
}
