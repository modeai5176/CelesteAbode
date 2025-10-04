"use client"

import { Section } from "@/components/ui/section"
import { PillButton } from "@/components/ui/pill-button"
import { Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <Section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          Ready to find your masterpiece?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
          <PillButton 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <a href="/contact">Book a Consultation</a>
          </PillButton>
        </div>

        {/* Inline Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <a 
            href="tel:+919818735258" 
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 9818735258</span>
          </a>
          <a 
            href={`mailto:${process.env.NEXT_PUBLIC_APP_EMAIL || 'celesteabode@gmail.com'}`} 
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{process.env.NEXT_PUBLIC_APP_EMAIL || 'celesteabode@gmail.com'}</span>
          </a>
        </div>
      </div>
    </Section>
  )
}
