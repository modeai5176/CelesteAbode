"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Loader2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    setSubscribeStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubscribeStatus("success");
      setEmail("");
    } catch (error) {
      setSubscribeStatus("error");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    // EDIT: changed footer bg from primary (yellow) to a lighter black hex for a premium dark footer
    <footer className="bg-[#0f1112] text-foreground">
      {" "}
      {/* EDIT: lighter shade of black to match bottom image */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Contact Column */}
          <div>
            <h3 className="h4 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-white group-hover:text-primary transition-colors" />{" "}
                {/* EDIT: icon default white, hover to primary */}
                <span className="text-white group-hover:text-primary transition-colors">
                  {" "}
                  {/* EDIT: contact text default white, hover to primary */}
                  +91 9818735258
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-white group-hover:text-primary transition-colors" />{" "}
                {/* EDIT: icon default white, hover to primary */}
                <span className="text-white group-hover:text-primary transition-colors">
                  {" "}
                  {/* EDIT: contact text default white, hover to primary */}
                  celsteabode@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-white group-hover:text-primary transition-colors" />{" "}
                {/* EDIT: icon default white, hover to primary */}
                <span className="text-white group-hover:text-primary transition-colors">
                  {" "}
                  {/* EDIT: contact text default white, hover to primary */}
                  Noida, IN
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="h4 mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-white hover:text-primary transition-colors"
              >
                Home{/* EDIT: footer nav default white, hover primary */}
              </Link>
              <Link
                href="/philosophy"
                className="block text-white hover:text-primary transition-colors"
              >
                Philosophy{/* EDIT: footer nav default white, hover primary */}
              </Link>
              <Link
                href="/services"
                className="block text-white hover:text-primary transition-colors"
              >
                Services{/* EDIT: footer nav default white, hover primary */}
              </Link>
              <Link
                href="/properties"
                className="block text-white hover:text-primary transition-colors"
              >
                Properties{/* EDIT: footer nav default white, hover primary */}
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-primary transition-colors"
              >
                Contact{/* EDIT: footer nav default white, hover primary */}
              </Link>
            </div>
          </div>

          {/* Social & Newsletter Column */}
          <div>
            <h3 className="h4 mb-6">Social & Newsletter</h3>
            <div className="space-y-6">
              {/* Social Links */}
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/celesteabode/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 hover:scale-110 transition-all duration-200 group"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-primary transition-colors" />{" "}
                  {/* EDIT: social icon default white, hover primary */}
                </Link>
                <Link
                  href="https://wa.me/919910906306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  title="WhatsApp"
                >
                  <Image
                    src="/pngtree-whatsapp-icon-png-image_3584844.jpg"
                    alt="WhatsApp"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain rounded-full"
                  />
                </Link>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="h4 mb-3">Stay Updated</h4>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubscribing}
                      className="bg-card/80 border-border text-foreground placeholder:text-muted-foreground/60 disabled:opacity-50 px-3 py-2 rounded-md" /* EDIT: switched newsletter input to bg-card and border-border for visibility */
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isSubscribing || !email}
                      className="bg-secondary hover:bg-secondary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubscribing ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Subscribe"
                      )}
                    </Button>
                  </div>

                  {subscribeStatus === "success" && (
                    <p className="text-sm text-green-300">
                      Successfully subscribed! Thank you.
                    </p>
                  )}

                  {subscribeStatus === "error" && (
                    <p className="text-sm text-red-300">
                      Failed to subscribe. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        {/* EDIT: adjusted top border to use border-border/40 to better suit the new footer background */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary">
              {" "}
              {/* EDIT: copyright text changed to primary (yellow) */}© 2024
              Celeste Abode Private Limited. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-white hover:text-primary transition-colors"
              >
                Privacy Policy
                {/* EDIT: legal link default white, hover primary */}
              </Link>
              <Link
                href="/terms"
                className="text-white hover:text-primary transition-colors"
              >
                Terms of Service
                {/* EDIT: legal link default white, hover primary */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
