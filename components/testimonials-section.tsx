"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Abhishek Khare",
    quote:
      "They truly understood my needs and found me the perfect home that matches my lifestyle. The attention to detail was exceptional.",
  },
  {
    name: "Raj Patel",
    quote: "Supportive and knowledgeable at every step. The team made the entire process seamless and stress-free.",
  },
  {
    name: "Digvijay Singh",
    quote: "Curated options that reflected my lifestyle perfectly. I couldn't be happier with my new home.",
  },
  {
    name: "Garima Singh",
    quote: "Attention to detail transformed my living experience. The personalized service exceeded all expectations.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="reviews" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">What Clients Say</h2>
        </div>

        <div className="relative">
          <Card className="rounded-2xl border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <blockquote className="text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <cite className="text-lg font-medium text-secondary">— {testimonials[currentIndex].name}</cite>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-secondary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
