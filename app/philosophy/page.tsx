import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Award, Shield, Lightbulb } from "lucide-react"

export default function PhilosophyPage() {
  const coreValues = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail meticulously planned and executed with unwavering accuracy.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Seeing beyond the present to anticipate future market trends and opportunities.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships through trust, transparency, and mutual success.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Setting the highest standards in luxury real estate service and delivery.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Conducting business with honesty, ethics, and unwavering moral principles.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technology and creative solutions for modern living.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Intro Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Our Philosophy
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              A Different Path in <span className="text-secondary">Luxury Real Estate</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Where intentionality meets technology.</p>
          </div>
        </section>

        {/* Mission & Vision Split */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  Mission
                </div>
                <h2 className="text-3xl font-bold text-foreground">Tailored Excellence</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct in-depth assessments of each client's unique needs, lifestyle, and investment goals to
                  create tailored portfolios that exceed expectations. Our approach combines market expertise with
                  personalized service to deliver exceptional results.
                </p>
                <Button className="pill-button bg-secondary hover:bg-secondary/90 text-white">Learn More</Button>
              </div>

              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  Vision
                </div>
                <h2 className="text-3xl font-bold text-foreground">Redefining Luxury</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To redefine luxury real estate as both strategic investment and living masterpiece. We envision a
                  future where every property transaction creates lasting value and transforms lives through exceptional
                  spaces and experiences.
                </p>
                <Button className="pill-button bg-secondary hover:bg-secondary/90 text-white">Our Vision</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                Core Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Drives Us Forward</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our fundamental principles that guide every decision and interaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="border-0 bg-card/50 hover:bg-card transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
