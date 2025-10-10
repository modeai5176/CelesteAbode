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
            style={{
              color: isMobile
                ? "#D4B16A"
                : isHomepage && isScrolled
                ? "#D4B16A"
                : isHomepage
                ? "white"
                : "#D4B16A",
            }}
          >
            Celeste Abode
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link
            href="/"
            className="text-lg font-medium text-white hover:text-white transition-all duration-300 relative group py-2"
          >
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/philosophy"
            className="text-lg font-medium text-white hover:text-white transition-all duration-300 relative group py-2"
          >
            PHILOSOPHY
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/services"
            className="text-lg font-medium text-white hover:text-white transition-all duration-300 relative group py-2"
          >
            SERVICES
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/properties"
            className="text-lg font-medium text-white hover:text-white transition-all duration-300 relative group py-2"
          >
            PROPERTIES
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-white hover:text-white transition-all duration-300 relative group py-2"
          >
            CONTACT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 md:hidden"
        >
          <nav className="px-6 py-4 space-y-6">
            <Link
              href="/"
              className="block text-lg font-medium text-white hover:text-white transition-colors py-3 relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/philosophy"
              className="block text-lg font-medium text-white hover:text-white transition-colors py-3 relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PHILOSOPHY
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="block text-lg font-medium text-white hover:text-white transition-colors py-3 relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/properties"
              className="block text-lg font-medium text-white hover:text-white transition-colors py-3 relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PROPERTIES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-medium text-white hover:text-white transition-colors py-3 relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
