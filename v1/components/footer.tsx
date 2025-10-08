import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Grid Layout - Stack on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold">OPORITY</h3>
              <ThemeToggle />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              © Copyright 2025, OPORITY Ltd.
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Company Number: 15783178
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/quick-quote" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Website Creation
              </Link>
              <Link href="/web-design" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Web Design
              </Link>
              <Link href="/consulting" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Consulting
              </Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wide">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <Link href="/team" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Team
              </Link>
              <Link href="/strategy-call" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Book Strategy Call
              </Link>
              <Link href="/privacy" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
