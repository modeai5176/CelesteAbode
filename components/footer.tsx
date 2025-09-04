"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Contact Column */}
          <div>
            <h3 className="h4 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+91 9818735258</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>celsteabode@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Noida, IN</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="h4 mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block hover:text-secondary transition-colors">
                Home
              </Link>
              <Link href="/philosophy" className="block hover:text-secondary transition-colors">
                Philosophy
              </Link>
              <Link href="/services" className="block hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/properties" className="block hover:text-secondary transition-colors">
                Properties
              </Link>
              <Link href="/reviews" className="block hover:text-secondary transition-colors">
                Reviews
              </Link>
              <Link href="/contact" className="block hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social & Newsletter Column */}
          <div>
            <h3 className="h4 mb-6">Social & Newsletter</h3>
            <div className="space-y-6">
              {/* Social Links */}
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="h4 mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-secondary/20 border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  <Button className="bg-secondary hover:bg-secondary/90 text-primary-foreground">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2024 Celeste Abode Private Limited. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="hover:text-secondary transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
