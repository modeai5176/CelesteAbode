"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Star, Award, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export function CTASection() {
  const handleContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewProperties = () => {
    window.location.href = '/properties'
  }

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Project Selection",
      description: "Expert guidance in choosing the perfect property from our curated portfolio"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Investment Analysis",
      description: "Comprehensive market analysis and ROI projections for informed decisions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Legal Verification",
      description: "Thorough verification of all legal compliances and project approvals"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "End-to-End Support",
      description: "Complete assistance from selection to possession and beyond"
    }
  ]

  const featuredProjects = [
    {
      name: "FOREST WALK VILLAS",
      status: "Pre-Launch",
      highlight: "Phase 2 Launch • 52 Acres • Forest Living"
    },
    {
      name: "IVORY COUNTY",
      status: "Under Construction",
      highlight: "3, 4 & 5 BHK • County Group • Premium Amenities"
    },
    {
      name: "ESTATE 360",
      status: "Under Construction",
      highlight: "Inter-Generational • Antara Towers • Luxury Living"
    },
    {
      name: "CRC MAESTA",
      status: "Under Construction",
      highlight: "5 Towers • Club Maesta • 270° Green Views"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-white/20 text-white mb-6">Get Started Today</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Invest in <span className="text-white">Premium Real Estate</span>?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Let our expert team guide you through the finest luxury real estate opportunities. 
            Get exclusive access to premium projects and make informed investment decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Services & Projects */}
          <div className="space-y-8">
            {/* Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-white/80">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{service.title}</h4>
                          <p className="text-sm opacity-80">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>
              <div className="space-y-3">
                {featuredProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm opacity-80">{project.highlight}</p>
                    </div>
                    <Badge className="bg-white/20 text-white text-xs">
                      {project.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form & Info */}
          <div className="space-y-8">
            {/* Contact Form */}
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Get Expert Consultation</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                  />
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white/50">
                    <option value="" className="bg-gray-800">Select Project of Interest</option>
                    <option value="forest-walk" className="bg-gray-800">FOREST WALK VILLAS</option>
                    <option value="ivory-county" className="bg-gray-800">IVORY COUNTY</option>
                    <option value="estate-360" className="bg-gray-800">ESTATE 360</option>
                    <option value="crc-maesta" className="bg-gray-800">CRC MAESTA</option>
                  </select>
                  <textarea
                    placeholder="Additional Requirements"
                    rows={3}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 resize-none"
                  ></textarea>
                  <Button 
                    className="w-full bg-white text-primary hover:bg-white/90 py-3 text-lg"
                    onClick={handleContact}
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/80" />
                  <span className="opacity-90">+91 [Your Phone Number]</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/80" />
                  <span className="opacity-90">info@yourcompany.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white/80" />
                  <span className="opacity-90">Noida, Greater Noida, Gurgaon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-white/10 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-semibold mb-4">
              Don't Miss Out on Premium Opportunities
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Our exclusive projects are in high demand. Contact us today to secure your 
              preferred unit and get the best pricing available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
                onClick={handleViewProperties}
              >
                View All Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-primary bg-white hover:bg-white/90 hover:text-black px-8 py-4 text-lg"
                onClick={handleContact}
              >
                Schedule Viewing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
