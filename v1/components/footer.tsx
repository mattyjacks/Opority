import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Mobile: Quick Links (left) and Get In Touch (right) in 2 columns on top, Company Info full width below */}
        {/* Desktop: All 3 sections in a 3-column grid side by side - Company Info | Quick Links | Get In Touch */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info - Spans 2 columns on mobile (full width on bottom), 1st column on desktop */}
          <div className="col-span-2 md:col-span-1 order-3 md:order-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image
                src="/opority-logo/r-logo.png"
                alt="Opority Logo"
                width={96}
                height={96}
                className="object-contain -mr-2"
              />
              <h3 className="text-2xl sm:text-3xl font-bold dark:text-gradient-purple text-gradient-blue">OPORITY</h3>
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              © Copyright 2024-2026, OPORITY Ltd.
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Company Number: 15783178
            </p>
          </div>

          {/* Quick Links - 1st column of 2-col grid on mobile (left), 2nd column on desktop */}
          <div className="col-span-1 order-1 md:order-2 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/quick-quote" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Website Quote
              </Link>
              <Link href="/web-design" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Web Design
              </Link>
              <Link href="/consulting" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Consulting
              </Link>
              <Link href="/strategy-call" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Get In Touch - 2nd column of 2-col grid on mobile (right), 3rd column on desktop */}
          <div className="col-span-1 order-2 md:order-3 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wide">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <Link href="/strategy-call" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Book Strategy Call
              </Link>
              <Link href="/privacy" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Terms of Use
              </Link>
              <Link href="/cookies" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
