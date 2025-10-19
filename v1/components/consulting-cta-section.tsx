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
        {/* Facebook Icon */}
        <div className="mb-6 sm:mb-8 animate-scale-in">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-[#1877F2] rounded-2xl transition-transform duration-300 hover:scale-110 shadow-lg">
            <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
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
