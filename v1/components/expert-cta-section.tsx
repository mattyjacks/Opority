"use client";

import Link from "next/link";

export function ExpertCtaSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Emoji Icon */}
        <div className="mb-4 sm:mb-6 animate-scale-in">
          <span className="text-5xl sm:text-6xl lg:text-7xl inline-block transition-transform duration-300 hover:scale-110">
            💬
          </span>
        </div>

        {/* Small Title (Eyebrow) */}
        <p
          className="text-sm sm:text-base font-semibold text-primary tracking-wide uppercase mb-3 sm:mb-4 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Your chance to speak with Experts
        </p>

        {/* Main Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 sm:mb-6 lg:mb-8 leading-tight animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Make Facebook Your{" "}
          <span className="dark:text-gradient-purple text-gradient-blue">
            Next Revenue Stream
          </span>
        </h2>

        {/* Description */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          By scheduling a free consulting call with our team, we&apos;ll review your
          current setup, uncover the biggest opportunities for growth, and give
          you a clear plan on how Facebook can start driving inquiries.
        </p>

        {/* CTA Button */}
        <div
          className="flex justify-center animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="/strategy-call"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 dark:gradient-purple gradient-blue text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <span className="relative z-10">
              See How Facebook Could Work for Me
            </span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}
