import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function ReviewsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "Business Owner",
      image: "/indian-businessman-portrait.png",
      rating: 5,
      review:
        "Celeste Abode transformed our property search experience completely. Their attention to detail and understanding of our requirements was exceptional. The team guided us through every step, making what seemed like a daunting process incredibly smooth. We found our dream home within weeks, and the after-sales service has been outstanding.",
      property: "Garden Villa Estate, Sector 150",
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "Investment Consultant",
      image: "/indian-businesswoman-portrait.png",
      rating: 5,
      review:
        "As an investment consultant, I've worked with many real estate firms, but Celeste Abode stands apart. Their market analysis is thorough, their recommendations are spot-on, and they truly understand the luxury segment. The ROI on my property investment has exceeded expectations, thanks to their strategic guidance.",
      property: "Metropolitan Heights, Sector 76",
    },
    {
      id: 3,
      name: "Amit Gupta",
      role: "Tech Entrepreneur",
      image: "/young-indian-tech-entrepreneur-portrait.png",
      rating: 5,
      review:
        "The level of professionalism and expertise at Celeste Abode is unmatched. They didn't just sell us a property; they helped us find a home that perfectly aligns with our lifestyle and future plans. The technology integration in their process made everything transparent and efficient. Highly recommended for anyone seeking premium real estate solutions.",
      property: "Skyline Residences, Sector 62",
    },
    {
      id: 4,
      name: "Sunita Agarwal",
      role: "Interior Designer",
      image: "/elegant-indian-woman-interior-designer-portrait.png",
      rating: 5,
      review:
        "Working with Celeste Abode was a delightful experience. Their team understood my vision for the perfect workspace-home combination. They presented options that I hadn't even considered, each better than the last. The negotiation process was handled with such finesse, and we closed the deal at a fantastic price.",
      property: "Urban Oasis, Sector 93",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Corporate Executive",
      image: "/senior-indian-corporate-executive-portrait.png",
      rating: 5,
      review:
        "Celeste Abode's commitment to excellence is evident in every interaction. From the initial consultation to the final handover, every detail was meticulously managed. Their market insights helped us make an informed decision, and the property has appreciated significantly since our purchase. They've earned a client for life.",
      property: "Royal Manor, Sector 168",
    },
    {
      id: 6,
      name: "Neha Kapoor",
      role: "Marketing Director",
      image: "/confident-indian-marketing-professional-portrait.png",
      rating: 5,
      review:
        "The personalized approach of Celeste Abode is what sets them apart. They took time to understand our family's needs, our budget constraints, and our long-term goals. The result was a perfect match that we couldn't have found on our own. Their post-purchase support has been exceptional, making us feel valued as clients.",
      property: "Premium Plot, Sector 137",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Client Testimonials
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              What Our <span className="text-secondary">Clients Say</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied clients who found their perfect properties with us.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-0 bg-card/50 hover:bg-card transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-2xl object-cover"
                        sizes="64px"
                        quality={85}
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-secondary/20" />
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial.review}"</p>

                    <div className="text-sm text-secondary font-medium">Property: {testimonial.property}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
