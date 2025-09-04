"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-0 pb-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-6xl mx-auto text-center pt-32">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Contact
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to start your journey towards finding your perfect property? Let's connect and discuss how we can help you achieve your real estate goals.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h2>
                    
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            type="text"
                            required
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            type="text"
                            required
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          rows={5}
                          required
                          placeholder="Tell us about your requirements, preferred locations, budget, or any specific questions you have..."
                        />
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="consent" className="text-sm text-muted-foreground">
                          I agree to receive communications from Celeste Abode regarding my inquiry and related services. I understand that I can unsubscribe at any time.
                        </label>
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                          <p className="text-muted-foreground">+91 9818735258</p>
                          <p className="text-sm text-muted-foreground">Available 24/7 for urgent inquiries</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <p className="text-muted-foreground">celsteabode@gmail.com</p>
                          <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Office Locations</h3>
                          <p className="text-muted-foreground">Noida, IN</p>
                          <p className="text-sm text-muted-foreground">Serving the entire NCR region</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                          <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                          <p className="text-sm text-muted-foreground">Sunday: By appointment only</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-primary mb-4">Quick Actions</h3>
                    
                    <div className="space-y-4">
                      <Button 
                        variant="outline"
                        className="w-full justify-start gap-3"
                        asChild
                      >
                        <a href="tel:+919818735258">
                          <Phone className="w-4 h-4" />
                          Schedule a Call
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline"
                        className="w-full justify-start gap-3"
                        asChild
                      >
                        <a href="https://wa.me/919910906306" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4" />
                          Message on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        {/* Map Section */}
        <Section className="bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Our Service Areas</h2>
            
            <div className="bg-muted rounded-lg p-8 text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Map Coming Soon</h3>
              <p className="text-muted-foreground">
                We're working on an interactive map to show our service areas and office locations. 
                For now, please contact us directly for specific location information.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
