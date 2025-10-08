"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LogoCarousel } from "@/components/logo-carousel";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { User, Mail, Calendar, BarChart3, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

function BookingContent() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  // Get answers from URL params
  const q1 = searchParams.get('q1') || '';
  const q2 = searchParams.get('q2') || '';
  const q3 = searchParams.get('q3') || '';
  const q4 = searchParams.get('q4') || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !agreedToTerms) {
      alert("Please fill in all fields and agree to the terms.");
      return;
    }
    setShowCalendly(true);
  };

  // Build Calendly URL with prefilled data
  const calendlyParams = new URLSearchParams();
  if (name) calendlyParams.set('name', name);
  if (email) calendlyParams.set('email', email);
  
  // Add custom fields with quiz answers
  const quizAnswers = `Goals: ${q1} | Price: ${q2} | Role: ${q3} | Budget: ${q4}`;
  if (quizAnswers) calendlyParams.set('a1', quizAnswers); // Notes field
  
  const calendlyUrl = `https://calendly.com/arnoldkostecki/strategy-call?${calendlyParams.toString()}`;

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
              Last step. Please only arrange a meeting with us if you are actually interested 👋
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Facebook?
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-muted-foreground">
              Schedule Your Free Call Now!
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/20"
                required
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I have read and agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!name || !email || !agreedToTerms}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                name && email && agreedToTerms
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl hover:scale-[1.02]'
                  : 'bg-secondary text-muted-foreground cursor-not-allowed'
              }`}
            >
              Choose a preferred date now
            </button>
          </form>
        </div>

        {/* Logo Carousel - Full width outside container */}
        <LogoCarousel />
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl h-[90vh] mx-4">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-card rounded-2xl overflow-hidden shadow-2xl h-full">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Schedule a Strategy Call"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
