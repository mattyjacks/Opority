"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Globe2, Palette, Lightbulb, TrendingUp, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Service configurations with icons
const services = [
  {
    name: "Website Creation",
    href: "/website-creation",
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
  {
    name: "Paid Ads",
    href: "/paid-ads",
    icon: TrendingUp,
  },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };

    if (isSolutionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSolutionsOpen]);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isSolutionsOpen) {
        setIsSolutionsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isSolutionsOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isSolutionsOpen]);

  return (
    <nav className="w-full border-b border-border sticky top-0 z-50 animate-slide-up">
      <div className="w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 hover:scale-105 transition-transform">
              <Image
                src="/opority-logo/r-logo.png"
                alt="Opority Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold dark:text-gradient-purple text-gradient-blue">
                OPORITY
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center gap-1.5 text-[15px] font-medium text-foreground/90 hover:text-foreground transition-colors"
                  aria-expanded={isSolutionsOpen}
                  aria-haspopup="true"
                  aria-controls="solutions-menu"
                >
                  Solutions
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      ref={dropdownRef}
                      id="solutions-menu"
                      role="menu"
                      aria-label="Solutions menu"
                      initial={{ opacity: 0, scale: 0.95, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[220px] bg-card border border-border/50 rounded-xl shadow-xl p-2 overflow-hidden"
                    >
                      {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.025 }}
                          >
                            <Link
                              href={service.href}
                              role="menuitem"
                              onClick={() => setIsSolutionsOpen(false)}
                              className="group flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-primary/10 transition-all duration-200"
                            >
                              <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="font-medium text-[15px] text-foreground">
                                {service.name}
                              </span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
              className="md:hidden fixed bottom-0 left-0 right-0 max-h-[60vh] bg-background border-t border-border rounded-t-3xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="px-6 py-6 overflow-y-auto max-h-[60vh]">
                {/* Drag Handle */}
                <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-6" />

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
