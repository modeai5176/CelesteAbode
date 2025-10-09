"use client";

import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import { StatList } from "@/components/ui/stat-list";
import { motion } from "framer-motion";
import { useRef } from "react"; /* EDIT: add useRef import for VariableProximity container */
import VariableProximity from "./VariableProximity"; /* EDIT: import VariableProximity component */
export function HeroSection() {
  const stats = [
    {
      label: "Lifestyle-centric curation",
      description: "Curating properties that match your lifestyle aspirations",
    },
    {
      label: "Technology-enabled precision",
      description:
        "Leveraging data and technology for precise property matching",
    },
    {
      label: "Human-centered consulting",
      description:
        "Personalized guidance from experienced real estate professionals",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(
    null
  ); /* EDIT: ref passed to VariableProximity */

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
        {/* EDIT: replaced static heading with VariableProximity animated words (font inherited) */}
        <h1 className="h1 text-white mb-2 leading-snug tracking-tight text-4xl md:text-5xl lg:text-6xl">
          <div ref={containerRef} style={{ display: "inline-block" }}>
            <VariableProximity
              label={"From Masterpieces of Time To"}
              className={
                "block text-white whitespace-nowrap"
              } /*prevent wrapping so this phrase stays on one line */
              fromFontVariationSettings={"'wght' 700, 'opsz' 9"}
              toFontVariationSettings={"'wght' 1000, 'opsz' 40"}
              containerRef={containerRef}
              radius={140}
              falloff="linear"
              style={{
                fontFamily: "inherit",
              }} /* EDIT: inherit existing font-family */
            />
            <VariableProximity
              label={"Masterpieces of Living"}
              className={"block text-primary-foreground mt-1"}
              fromFontVariationSettings={"'wght' 700, 'opsz' 9"}
              toFontVariationSettings={"'wght' 1000, 'opsz' 40"}
              containerRef={containerRef}
              radius={140}
              falloff="linear"
              style={{
                fontFamily: "inherit",
                color: "#E3C67A",
              }} /* EDIT: inherit existing font-family */
            />
          </div>
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
  );
}
