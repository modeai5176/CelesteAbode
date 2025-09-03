import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  intro?: {
    kicker?: string
    title: string
    lead?: string
  }
}

export function Section({ children, className, intro }: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="max-w-screen-xl mx-auto px-6">
        {intro && (
          <div className="text-center mb-12">
            {intro.kicker && (
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                {intro.kicker}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-6">
              {intro.title}
            </h2>
            {intro.lead && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {intro.lead}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
