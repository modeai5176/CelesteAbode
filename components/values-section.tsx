"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, Users, Award, CheckCircle, Building2, Heart, Zap } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our dealings. Every project we present is thoroughly vetted, with all legal compliances and approvals clearly communicated to our clients.",
      features: ["RERA Compliance", "Legal Verification", "Clear Documentation", "No Hidden Costs"]
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Premium Quality",
      description: "We curate only the finest luxury real estate projects that meet our stringent quality standards. Each development represents the pinnacle of architectural excellence and modern living.",
      features: ["Handpicked Projects", "Premium Developers", "Quality Assurance", "Luxury Standards"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Client-Centric Approach",
      description: "Your satisfaction is our priority. We provide personalized service, understanding your unique requirements and guiding you to the perfect investment that aligns with your lifestyle and financial goals.",
      features: ["Personalized Service", "Expert Guidance", "End-to-End Support", "Post-Sale Care"]
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Proven Track Record",
      description: "With years of experience in premium real estate, we have successfully helped thousands of families find their dream homes and make sound investment decisions.",
      features: ["Years of Experience", "Successful Projects", "Happy Clients", "Market Expertise"]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            Our Values
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-6">
            Why Choose <span className="text-secondary">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to delivering exceptional value through our core principles of trust, 
            quality, and client satisfaction in every real estate transaction.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-secondary mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {value.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {value.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We are committed to being your trusted partner in premium real estate, 
              providing expert guidance, transparent processes, and exceptional service 
              to help you make informed investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
