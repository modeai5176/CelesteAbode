"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHomepage = pathname === "/"
  
  const headerHeight = useTransform(scrollY, [0, 100], [80, 80])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20])
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial mobile state
    handleResize()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 h-20"
      style={{ 
        height: headerHeight,
        backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.95)' : (isHomepage && isScrolled ? 'rgba(255, 255, 255, 0.95)' : isHomepage ? 'transparent' : 'rgba(255, 255, 255, 0.95)'),
        backdropFilter: isMobile ? 'blur(8px)' : (isHomepage && isScrolled ? `blur(${headerBlur}px)` : isHomepage ? 'none' : 'blur(20px)'),
        borderColor: isMobile ? 'rgba(0, 0, 0, 0.1)' : (isHomepage && isScrolled ? 'rgba(0, 0, 0, 0.1)' : isHomepage ? 'transparent' : 'rgba(0, 0, 0, 0.1)')
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isMobile ? 'bg-primary' : (isHomepage && isScrolled ? 'bg-primary' : isHomepage ? 'bg-white' : 'bg-primary')}`}>
            <span className={`font-semibold text-lg transition-all duration-300 ${isMobile ? 'text-primary-foreground' : (isHomepage && isScrolled ? 'text-primary-foreground' : isHomepage ? 'text-black' : 'text-primary-foreground')}`}>C</span>
          </div>
          <span className={`h4 transition-all duration-300 ${isMobile ? 'text-primary' : (isHomepage && isScrolled ? 'text-primary' : isHomepage ? 'text-white' : 'text-primary')}`}>Celeste Abode</span>
        </Link>

        {/* Navigation */}
        <nav className={`hidden md:flex items-center rounded-full px-2 py-3 border transition-all duration-300 ${
          isHomepage && isScrolled 
            ? 'bg-muted/30 border-black/20' 
            : isHomepage 
            ? 'bg-white/20 border-gray-300/60' 
            : 'bg-muted/30 border-black/20'
        }`}>
          <Link href="/" className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
            isHomepage && isScrolled 
              ? 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105' 
              : isHomepage 
              ? 'text-white hover:text-white hover:scale-105'
              : 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105'
          }`}>
            Home
          </Link>
          <Link href="/philosophy" className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
            isHomepage && isScrolled 
              ? 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105' 
              : isHomepage 
              ? 'text-white hover:text-white hover:scale-105'
              : 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105'
          }`}>
            Philosophy
          </Link>
          <Link href="/services" className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
            isHomepage && isScrolled 
              ? 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105' 
              : isHomepage 
              ? 'text-white hover:text-white hover:scale-105'
              : 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105'
          }`}>
            Services
          </Link>
          <Link href="/properties" className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
            isHomepage && isScrolled 
              ? 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105' 
              : isHomepage 
              ? 'text-white hover:text-white hover:scale-105'
              : 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105'
          }`}>
            Properties
          </Link>
          <Link href="/contact" className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
            isHomepage && isScrolled 
              ? 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105' 
              : isHomepage 
              ? 'text-white hover:text-white hover:scale-105'
              : 'text-foreground/80 hover:text-foreground hover:bg-muted/60 hover:scale-105'
          }`}>
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Button 
          asChild
          className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground px-4 md:px-6 py-2 rounded-full button-text transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Link href="/contact">Book Consultation</Link>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-3 mr-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 md:hidden"
        >
          <nav className="px-6 py-4 space-y-4">
            <Link 
              href="/" 
              className="block nav-text text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/philosophy" 
              className="block nav-text text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Philosophy
            </Link>
            <Link 
              href="/services" 
              className="block nav-text text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/properties" 
              className="block nav-text text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              href="/contact" 
              className="block nav-text text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="pt-4 border-t border-border/50">
              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full button-text transition-all duration-300"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
