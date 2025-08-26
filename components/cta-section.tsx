import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">Ready to find your masterpiece?</h2>

        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Let us help you discover the perfect property that matches your vision and lifestyle.
        </p>

        <Button className="pill-button bg-secondary hover:bg-secondary/90 text-white text-lg px-12 py-4">
          Book a Consultation
        </Button>
      </div>
    </section>
  )
}
