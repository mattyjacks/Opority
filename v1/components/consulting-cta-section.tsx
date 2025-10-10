"use client";

import Link from "next/link";

export function ConsultingCtaSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-1/3 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 left-1/3 w-96 h-96 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Emoji Icon */}
        <div className="mb-6 sm:mb-8 animate-scale-in">
          <span className="inline-block text-6xl sm:text-7xl transition-transform duration-300 hover:scale-110">
            💬
          </span>
        </div>

        {/* Small Title */}
        <div className="mb-4 sm:mb-5 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-sm sm:text-base font-medium text-primary">
            Your chance to speak with Experts
          </p>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Make Facebook Your Next{" "}
          <span className="dark:text-gradient-purple text-gradient-blue">
            Revenue Stream
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.3s" }}>
          By scheduling a free consulting call with our team, we&apos;ll review your current setup, uncover the biggest opportunities for growth, and give you a clear plan on how Facebook can start driving inquiries.
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Link
            href="/ad-funnel"
            className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-[1.05] active:scale-[0.98] shadow-xl hover:shadow-2xl hover:shadow-primary/30"
          >
            See How Facebook Could Work for Me
          </Link>
        </div>
      </div>
    </section>
  );
}
