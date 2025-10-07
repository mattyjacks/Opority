"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border sticky top-0 z-50 animate-slide-up">
      <div className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <div className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <button className="text-foreground hover:text-primary transition-colors">
                  Solutions
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    href="/website-creation"
                    className="block px-4 py-2 hover:bg-accent rounded-t-lg transition-colors"
                  >
                    Website Creation
                  </Link>
                  <Link
                    href="/web-design"
                    className="block px-4 py-2 hover:bg-accent transition-colors"
                  >
                    Web Design
                  </Link>
                  <Link
                    href="/consulting"
                    className="block px-4 py-2 hover:bg-accent transition-colors"
                  >
                    Consulting
                  </Link>
                  <Link
                    href="/paid-ads"
                    className="block px-4 py-2 hover:bg-accent rounded-b-lg transition-colors"
                  >
                    Paid Ads
                  </Link>
                </div>
              </div>
              <Link
                href="/strategy-call"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 font-semibold"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Positioned absolutely to overlay content */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/website-creation"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Website Creation
              </Link>
              <Link
                href="/web-design"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Web Design
              </Link>
              <Link
                href="/consulting"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Consulting
              </Link>
              <Link
                href="/paid-ads"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Paid Ads
              </Link>
              <Link
                href="/strategy-call"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
