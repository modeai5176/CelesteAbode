"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Quote, Building2, Award, Users, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      project: "FOREST WALK VILLAS",
      content: "The team provided exceptional guidance throughout the entire process. Forest Walk Villas exceeded our expectations with its unique forest-inspired design and premium amenities. Highly recommended!",
      rating: 5,
      verified: true
    },
    {
      name: "Priya Sharma",
      role: "IT Professional",
      project: "IVORY COUNTY",
      content: "Investing in Ivory County was the best decision we made. The project's location, amenities, and County Group's reputation gave us complete confidence. The team's expertise made everything seamless.",
      rating: 5,
      verified: true
    },
    {
      name: "Amit Patel",
      role: "Corporate Executive",
      project: "ESTATE 360",
      content: "Estate 360's inter-generational concept and Antara partnership impressed us immediately. The team's market knowledge and project insights helped us make an informed investment decision.",
      rating: 5,
      verified: true
    },
    {
      name: "Sunita Verma",
      role: "Entrepreneur",
      project: "CRC MAESTA",
      content: "CRC Maesta's Club Maesta amenities and CRC Group's 38+ years legacy convinced us. The team's attention to detail and post-sale support has been outstanding. We're extremely satisfied with our investment choice.",
      rating: 5,
      verified: true
    }
  ]

  const projectStats = [
    {
      icon: <Building2 className="w-8 h-8" />,
      number: "4",
      label: "Premium Projects",
      description: "Handpicked luxury developments"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "100%",
      label: "Client Satisfaction",
      description: "Based on verified reviews"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "5-Star",
      label: "Service Rating",
      description: "Consistent excellence"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: "RERA",
      label: "Approved Projects",
      description: "All legal compliances met"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-6">
            What Our <span className="text-secondary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience with our premium real estate projects and services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto relative"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2 h-full">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                      <CardContent className="p-5 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-primary text-lg">{testimonial.name}</h4>
                              <p className="text-muted-foreground">{testimonial.role}</p>
                            </div>
                            {testimonial.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                Verified Client
                              </Badge>
                            )}
                          </div>
                          
                          <div className="mb-3">
                            <Badge variant="secondary" className="mb-2">
                              {testimonial.project}
                            </Badge>
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative mt-auto">
                          <Quote className="w-8 h-8 text-secondary/30 absolute -top-2 -left-2" />
                          <p className="text-muted-foreground leading-relaxed pl-6">
                            {testimonial.content}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows - Left and Right Sides */}
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
              <CarouselPrevious className="relative translate-y-0 left-0 right-0 bg-white hover:bg-gray-50 border-2 border-primary text-primary hover:text-primary shadow-lg w-12 h-12" />
            </div>
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
              <CarouselNext className="relative translate-y-0 left-0 right-0 bg-white hover:bg-gray-50 border-2 border-primary text-primary hover:text-primary shadow-lg w-12 h-12" />
            </div>
          </Carousel>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-secondary w-8" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-3xl font-semibold text-primary mb-8 text-center">
            Our Success Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-secondary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Trusted by Thousands of Families
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Our commitment to excellence and client satisfaction has made us the preferred choice 
              for premium real estate investments. Join our growing family of satisfied clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>RERA Compliant Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Legal Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
