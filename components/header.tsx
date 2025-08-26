"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

    return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300",
        isHomePage && !isScrolled 
          ? "bg-transparent" 
          : "bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-lg"
      )}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo Section - Left aligned */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={cn(
                "text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-300 hover:scale-105",
                isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80"
              )}
            >
              Celeste Abode
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav
              className={cn(
                "flex items-center gap-6 lg:gap-8 px-6 lg:px-8 py-4 lg:py-5 rounded-full backdrop-blur-xl transition-all duration-300 hover:shadow-xl",
                isHomePage && !isScrolled 
                  ? "bg-white/10 border border-white/20 backdrop-blur-md" 
                  : "bg-white/95 shadow-xl border border-white/40 backdrop-blur-xl",
              )}
            >
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:scale-105",
                  isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground hover:text-primary"
                )}
              >
                Home
              </Link>
              <Link
                href="/philosophy"
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:scale-105",
                  isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground hover:text-primary"
                )}
              >
                Philosophy
              </Link>
              <Link
                href="/properties"
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:scale-105",
                  isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground hover:text-primary"
                )}
              >
                Properties
              </Link>
              <Link
                href="/reviews"
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:scale-105",
                  isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground hover:text-primary"
                )}
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:scale-105",
                  isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground hover:text-primary"
                )}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Desktop Book Consultation Button - Right aligned */}
          <div className="hidden md:block flex-shrink-0">
            <Button className={cn(
              "px-4 lg:px-8 py-3 lg:py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm lg:text-base",
              isHomePage && !isScrolled 
                ? "bg-secondary hover:bg-secondary/90 text-white" 
                : "bg-primary hover:bg-primary/90 text-white"
            )}>
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button - Right aligned */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden h-10 w-10 rounded-full hover:bg-white/20"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="absolute top-0 left-0 w-80 h-full bg-white shadow-2xl">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-10 w-10 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-6">
                <Link
                  href="/"
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/philosophy"
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Philosophy
                </Link>
                <Link
                  href="/properties"
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Properties
                </Link>
                <Link
                  href="/reviews"
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  href="/contact"
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              {/* Book Consultation Button */}
              <div className="mt-8 pt-6 border-t border-border">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 rounded-xl font-medium text-lg shadow-lg">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
