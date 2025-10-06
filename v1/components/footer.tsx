import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">OPORITY</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4">
              Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025
            </p>
            <p className="text-xs text-muted-foreground">
              © Copyright 2025, OPORITY Ltd. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Company Number: 15783178
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-4">Quick Links</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/website-creation" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Website Creation
              </Link>
              <Link href="/web-design" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Web Design
              </Link>
              <Link href="/consulting" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Consulting
              </Link>
              <Link href="/paid-ads" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Paid Ads
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <Link href="/team" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Team
              </Link>
              <Link href="/strategy-call" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Book a Strategy Call
              </Link>
              <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
