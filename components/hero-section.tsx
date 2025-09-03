"use client"

import Image from "next/image"
import { PillButton } from "@/components/ui/pill-button"
import { StatList } from "@/components/ui/stat-list"
import { motion } from "framer-motion"

export function HeroSection() {
  const stats = [
    {
      label: "Lifestyle-centric curation",
      description: "Curating properties that match your lifestyle aspirations"
    },
    {
      label: "Technology-enabled precision",
      description: "Leveraging data and technology for precise property matching"
    },
    {
      label: "Human-centered consulting",
      description: "Personalized guidance from experienced real estate professionals"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.avif"
        alt="Luxury real estate background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
      >
        <h1 className="h1 text-white mb-6">
          From Masterpieces of Time<br />
          to <span className="text-secondary">Masterpieces of Living</span>
        </h1>

        <p className="lead text-white/90 mb-12 max-w-2xl mx-auto">
          Redefining luxury real estate consulting in India's premium segment
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16">
          <PillButton 
            variant="primary"
            size="lg"
            className="sm:text-base sm:px-8 sm:py-4 text-sm px-4 py-2"
            asChild
          >
            <a href="/properties">Explore Properties</a>
          </PillButton>
          <PillButton 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary sm:text-base sm:px-8 sm:py-4 text-sm px-4 py-2"
            asChild
          >
            <a href="/contact">Book Consultation</a>
          </PillButton>
        </div>
      </motion.div>

      {/* Stats List Below Hero - Desktop Only */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/95 backdrop-blur-sm hidden md:block">
        <StatList items={stats} />
      </div>
    </section>
  )
}
