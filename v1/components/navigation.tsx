"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            OPORITY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
              href="/team" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </Link>
            <Link 
              href="/strategy-call" 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-semibold"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link 
                href="/website-creation" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Website Creation
              </Link>
              <Link 
                href="/web-design" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Web Design
              </Link>
              <Link 
                href="/consulting" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Consulting
              </Link>
              <Link 
                href="/paid-ads" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Paid Ads
              </Link>
              <Link 
                href="/team" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Team
              </Link>
              <Link 
                href="/strategy-call" 
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-semibold text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
