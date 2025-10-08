"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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

      <section className="flex-1 py-12 md:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Book a Discovery Call with our Director.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer an initial 30 free minute consultation with our Director, allowing us to learn more about your business,
              your goals and even if we can help you get more quotes.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN - Content */}
            <div className="space-y-6">
              {/* Show user info if available */}
              {name && (
                <div className="bg-card border border-primary/50 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">Booking for:</p>
                  <p className="text-lg font-semibold">{name}</p>
                  {email && <p className="text-sm text-muted-foreground">{email}</p>}
                  {packageType && (
                    <p className="text-sm text-primary mt-2">Package: {packageType}</p>
                  )}
                </div>
              )}

              {/* Questions Section */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6">On the call, we&apos;ll ask questions like:</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl flex-shrink-0">•</span>
                    <span className="text-base md:text-lg">How are you currently getting quotes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl flex-shrink-0">•</span>
                    <span className="text-base md:text-lg">How long has the business been running?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl flex-shrink-0">•</span>
                    <span className="text-base md:text-lg">What&apos;s stopping you from getting more quotes?</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action Text */}
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-base md:text-lg text-muted-foreground">
                  To start the process, just use our calendar to book a call. We&apos;ll discuss your needs and create a customized plan to help you grow your business.
                </p>
              </div>

              {/* Footer Note - Only visible on desktop */}
              <div className="hidden lg:block">
                <p className="text-sm text-muted-foreground">
                  Have questions before booking? Feel free to reach out to us directly.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN - Calendly Embed */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="rounded-2xl"
                  title="Schedule a Strategy Call"
                />
              </div>
            </div>
          </div>

          {/* Footer Note - Mobile only */}
          <div className="lg:hidden text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Have questions before booking? Feel free to reach out to us directly.
            </p>
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
