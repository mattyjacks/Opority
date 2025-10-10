"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { User, Mail, Package, MessageCircle, ArrowRight, Sparkles, Instagram, Linkedin, ExternalLink } from "lucide-react";

function StrategyCallContent() {
  const searchParams = useSearchParams();

  // Get parameters from URL
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const phone = searchParams.get('phone') || '';
  const company = searchParams.get('company') || '';
  const packageType = searchParams.get('package') || '';

  // Build Calendly URL with prefilled data
  const calendlyParams = new URLSearchParams();

  // Standard Calendly fields
  if (name) calendlyParams.set('name', name);
  if (email) calendlyParams.set('email', email);

  // Map to correct Calendly custom fields
  // Based on your screenshot, the order appears to be:
  // 1. Notes (a1) - leave empty
  // 2. Phone Number (a2) - put phone
  // 3. Website (a3) - put company | package

  // a1 = Notes - intentionally left empty

  if (phone) {
    // a2 = Phone Number field
    calendlyParams.set('a2', phone);
  }

  if (packageType || company) {
    // a3 = Website field with format: company | package
    const websiteValue = company && packageType
      ? `${company} | ${packageType}`
      : packageType || company || '';
    if (websiteValue) {
      calendlyParams.set('a3', websiteValue);
    }
  }

  const calendlyUrl = `https://calendly.com/arnoldkostecki/strategy-call?${calendlyParams.toString()}`;

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 py-8 md:py-12 lg:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 lg:mb-6">
              Book a Strategy Call with Our Director
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              By scheduling a free consulting call with our team, we&apos;ll review your current setup, uncover the biggest opportunities for growth, and give you a clear plan on how Facebook can start driving inquiries.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN - Content */}
            <div className="space-y-4 md:space-y-6 animate-slide-in-left flex flex-col lg:justify-center lg:min-h-[700px]">
              {/* Show user info if available */}
              {name && (
                <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-card border-2 border-primary/30 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg shadow-primary/10 backdrop-blur-sm overflow-hidden group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                  {/* Decorative gradient orb */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                      <p className="text-sm font-medium text-primary uppercase tracking-wider">Booking Details</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Full Name</p>
                          <p className="text-lg font-bold text-foreground">{name}</p>
                        </div>
                      </div>

                      {email && (
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                            <Mail className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Email Address</p>
                            <p className="text-sm font-medium text-foreground">{email}</p>
                          </div>
                        </div>
                      )}

                      {packageType && (
                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-primary/20">
                          <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                            <Package className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Selected Package</p>
                            <p className="text-base font-bold text-primary">{packageType}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Information Section */}
              <div className="relative bg-card border border-border rounded-2xl p-4 md:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-4 md:mb-6">
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">
                      Contact Information:
                    </h2>
                  </div>

                  <ul className="space-y-3 md:space-y-4">
                    {/* Email */}
                    <li className="group/item">
                      <a
                        href="mailto:arnold@opority.com"
                        className="flex items-start gap-3 hover:bg-primary/5 rounded-lg p-2 -m-2 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover/item:bg-primary/20 transition-colors duration-200">
                            <Mail className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">Email</p>
                          <span className="text-base md:text-lg text-foreground/90 font-medium group-hover/item:text-primary transition-colors duration-200">
                            arnold@opority.com
                          </span>
                        </div>
                      </a>
                    </li>

                    {/* Instagram */}
                    <li className="group/item">
                      <a
                        href="https://www.instagram.com/oporityltd/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 hover:bg-primary/5 rounded-lg p-2 -m-2 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center group-hover/item:bg-accent/20 transition-colors duration-200">
                            <Instagram className="w-5 h-5 text-accent group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">Instagram</p>
                          <div className="flex items-center gap-2">
                            <span className="text-base md:text-lg text-foreground/90 font-medium group-hover/item:text-accent transition-colors duration-200">
                              Message us on Instagram
                            </span>
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/item:text-accent transition-colors duration-200" />
                          </div>
                        </div>
                      </a>
                    </li>

                    {/* LinkedIn */}
                    <li className="group/item">
                      <a
                        href="https://uk.linkedin.com/company/opority"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 hover:bg-primary/5 rounded-lg p-2 -m-2 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover/item:bg-primary/20 transition-colors duration-200">
                            <Linkedin className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">LinkedIn</p>
                          <div className="flex items-center gap-2">
                            <span className="text-base md:text-lg text-foreground/90 font-medium group-hover/item:text-primary transition-colors duration-200">
                              Connect and message us on LinkedIn
                            </span>
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/item:text-primary transition-colors duration-200" />
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Call to Action Text */}
              <div className="relative bg-gradient-to-br from-accent/10 via-primary/5 to-card border border-accent/30 rounded-2xl p-4 md:p-6 lg:p-8 shadow-md hover:shadow-lg hover:border-accent/50 transition-all duration-300 overflow-hidden group">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold mb-1.5 md:mb-2 text-foreground">Ready to Get Started?</h3>
                      <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                        To start the process, just use our calendar to book a call. We&apos;ll discuss your needs and create a customized plan to help you grow your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Note - Only visible on desktop */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-4 border border-border/50">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <p>
                    Have questions before booking? Feel free to reach out to us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Calendly Embed */}
            <div className="lg:sticky lg:top-24 animate-slide-in-right">
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="700"
                  style={{ border: 0, minHeight: '600px' }}
                  className="rounded-2xl h-[600px] md:h-[700px]"
                  title="Schedule a Strategy Call"
                />
              </div>
            </div>
          </div>

          {/* Footer Note - Mobile only */}
          <div className="lg:hidden mt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3 border border-border/50">
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <p>
                Have questions before booking? Feel free to reach out to us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function StrategyCallPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StrategyCallContent />
    </Suspense>
  );
}
