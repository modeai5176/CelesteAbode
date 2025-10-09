"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const headerHeight = useTransform(scrollY, [0, 100], [80, 80]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial mobile state
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // EDIT: navbar updated to use dark glassmorphism instead of white strip
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 h-20"
      style={{
        height: headerHeight,
        backgroundColor: isMobile
          ? "#0f1112" // match footer color for mobile
          : isHomepage && isScrolled
          ? "#0f1112" // match footer color when scrolled on homepage
          : isHomepage
          ? "transparent"
          : "#0f1112", // match footer color for internal pages
        // EDIT: Use existing blur values but keep dark glass look
        backdropFilter: isMobile
          ? "blur(8px)"
          : isHomepage && isScrolled
          ? `blur(${headerBlur}px)`
          : isHomepage
          ? "none"
          : "blur(20px)",
        // EDIT: subtle border color adjusted for contrast on dark strip
        borderColor: isMobile
          ? "rgba(255,255,255,0.04)"
          : isHomepage && isScrolled
          ? "rgba(255,255,255,0.04)"
          : isHomepage
          ? "transparent"
          : "rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center -ml-2">
          <div className="relative w-20 h-20 flex items-center justify-center pt-2">
            <Image
              src="/logoceleste.png"
              alt="Celeste Abode Logo"
              width={80}
              height={80}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span
            className={`h4 transition-all duration-300 -ml-1 -mt-1 ${
              isMobile
                ? "text-primary"
                : isHomepage && isScrolled
                ? "text-primary"
                : isHomepage
                ? "text-white"
                : "text-primary"
            }`}
          >
            Celeste Abode
          </span>
        </Link>

        {/* Navigation */}
        {/* EDIT: nav background for homepage changed to use card-based translucent bg */}
        <nav
          className={`hidden md:flex items-center rounded-full px-2 py-3 border transition-all duration-300 ${
            isHomepage && isScrolled
              ? "bg-muted/30 border-black/20"
              : isHomepage
              ? "bg-card/20 border-border/40"
              : "bg-muted/30 border-black/20"
          }`}
        >
          <Link
            href="/"
            className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
              isHomepage && isScrolled
                ? "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
                : isHomepage
                ? "text-white hover:text-white hover:scale-105"
                : "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
            }`}
          >
            Home
          </Link>
          <Link
            href="/philosophy"
            className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
              isHomepage && isScrolled
                ? "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
                : isHomepage
                ? "text-white hover:text-white hover:scale-105"
                : "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
            }`}
          >
            Philosophy
          </Link>
          <Link
            href="/services"
            className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
              isHomepage && isScrolled
                ? "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
                : isHomepage
                ? "text-white hover:text-white hover:scale-105"
                : "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
            }`}
          >
            Services
          </Link>
          <Link
            href="/properties"
            className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
              isHomepage && isScrolled
                ? "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
                : isHomepage
                ? "text-white hover:text-white hover:scale-105"
                : "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
            }`}
          >
            Properties
          </Link>
          <Link
            href="/contact"
            className={`nav-text transition-all duration-200 px-4 py-2 rounded-full ${
              isHomepage && isScrolled
                ? "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
                : isHomepage
                ? "text-white hover:text-white hover:scale-105"
                : "text-white hover:text-white hover:bg-muted/60 hover:scale-105"
            }`}
          >
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
          className="md:hidden p-4 mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
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
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
