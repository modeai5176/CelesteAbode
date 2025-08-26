"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const values = [
  {
    title: "Timeless Craftsmanship",
    description: "Enduring beauty and architectural excellence that stands the test of time.",
    icon: "🏛️",
  },
  {
    title: "Personalized Luxury",
    description: "Every experience bespoke and client-centered, tailored to your unique vision.",
    icon: "✨",
  },
  {
    title: "Ethical Stewardship",
    description: "Transparency and responsibility always guide our business practices.",
    icon: "🤝",
  },
  {
    title: "Data-Driven Distinction",
    description: "Intelligence to anticipate market trends and deliver superior outcomes.",
    icon: "📊",
  },
  {
    title: "Sustainable Legacy",
    description: "Value that transcends transactions and builds lasting relationships.",
    icon: "🌱",
  },
  {
    title: "Human-Centric Innovation",
    description: "Technology infused with empathy to enhance the human experience.",
    icon: "💡",
  },
]

export function ValuesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-6">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide every interaction and shape our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              data-index={index}
              className={`premium-card hover-lift transition-all duration-500 ${
                visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
