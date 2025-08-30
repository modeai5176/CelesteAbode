"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Award, Users, Star, CheckCircle } from "lucide-react"

export function AboutSection() {
  const handleContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    {
      icon: <Building2 className="w-8 h-8" />,
      number: "4",
      label: "Premium Projects",
      description: "Handpicked luxury developments"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "38+",
      label: "Years Experience",
      description: "CRC Group's proven legacy"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "7000+",
      label: "Happy Families",
      description: "Trusted by thousands"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "100%",
      label: "RERA Approved",
      description: "All projects fully compliant"
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              About Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-6">
              Your Trusted Partner in <span className="text-secondary">Premium Real Estate</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We specialize in curating and presenting the finest luxury real estate projects that redefine 
              modern living. Our portfolio features handpicked developments from renowned developers, 
              each offering unique value propositions and exceptional investment opportunities.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Exclusive access to premium projects before public launch</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Comprehensive project analysis and investment guidance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">End-to-end support from selection to possession</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Trusted partnerships with leading developers</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg"
              onClick={handleContact}
            >
              Get Expert Consultation
            </Button>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="pt-20">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-secondary mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
