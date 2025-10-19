"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Globe2, Palette, Lightbulb, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Service configurations with icons
const services = [
  {
    name: "Website Quote",
    href: "/quick-quote",
    icon: Globe2,
  },
  {
    name: "Web Design",
    href: "/web-design",
    icon: Palette,
  },
  {
    name: "Consulting",
    href: "/consulting",
    icon: Lightbulb,
  },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="w-full border-b border-border sticky top-0 z-50 animate-slide-up">
      <div className="w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:scale-105 transition-transform">
              <Image
                src="/opority-logo/r-logo.png"
                alt="Opority Logo"
                width={96}
                height={96}
                className="object-contain -mr-2"
              />
              <span className="text-3xl font-bold text-white">
                OPORITY
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Direct Navigation Links */}
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-[15px] font-medium text-foreground/90 hover:text-[#8b5cf6] dark:hover:text-[#a78bfa] transition-all duration-200 transform hover:scale-110 active:scale-95"
                >
                  {service.name}
                </Link>
              ))}

              {/* Contact Us Button */}
              <Link
                href="/strategy-call"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] font-semibold shadow-sm hover:shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Bottom Sheet Pattern */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100 || info.velocity.y > 500) {
                  setIsMenuOpen(false);
                }
              }}
              className="md:hidden fixed bottom-0 left-0 right-0 max-h-[60vh] bg-background border-t border-border rounded-t-3xl shadow-2xl z-50 flex flex-col cursor-grab active:cursor-grabbing"
            >
              {/* Drag Handle - Fixed at top */}
              <div className="flex-shrink-0 px-6 pt-6 pb-3">
                <div className="w-12 h-1.5 bg-border rounded-full mx-auto" />
              </div>

              {/* Scrollable content */}
              <div className="flex-1 px-6 pb-6 overflow-y-auto overscroll-contain"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >

                {/* Services */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Solutions
                  </div>
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium text-foreground">
                          {service.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Contact Us Button */}
                <Link
                  href="/strategy-call"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold text-center shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
