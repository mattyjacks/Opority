import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import { LogoCarousel } from "@/components/logo-carousel";
import { BenefitsSection } from "@/components/benefits-section";
import { ConsultingCtaSection } from "@/components/consulting-cta-section";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Marquee Section */}
      <Marquee text="Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025" />
      
      {/* Hero Section */}
      <section className="relative bg-background min-h-[70vh] sm:min-h-[60vh] lg:min-h-0 flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <AnimatedGradientBackground />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-16 lg:py-20 xl:py-24">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-center mb-5 sm:mb-6 lg:mb-8 xl:mb-10 leading-tight animate-slide-up">
            Tired of <span className="dark:text-gradient-purple text-gradient-blue">Chasing Clients</span> who<br /><span className="dark:text-gradient-purple text-gradient-blue">Don&apos;t Pay</span> Enough?
          </h1>

          <p className="text-base sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-center text-muted-foreground mb-8 sm:mb-10 lg:mb-10 xl:mb-12 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.1s"}}>
            We show you how to replace them with high value clients who book, pay and stay.
          </p>

          <div className="flex flex-col items-center animate-slide-up" style={{animationDelay: "0.2s"}}>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8">
              See how it works?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto px-4">
              <Link
                href="/ad-funnel"
                className="group relative flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary rounded-xl p-4 sm:p-5 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-primary/20 w-full sm:w-32 lg:w-36"
              >
                <span className="text-5xl sm:text-6xl mb-2.5">👍</span>
                <span className="text-lg sm:text-xl font-bold text-foreground">Yes</span>
              </Link>

              <Link
                href="/ad-funnel"
                className="group relative flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-red-500/50 rounded-xl p-4 sm:p-5 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 w-full sm:w-32 lg:w-36"
              >
                <span className="text-5xl sm:text-6xl mb-2.5">👎</span>
                <span className="text-lg sm:text-xl font-bold text-foreground">No</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Logo Carousel Section */}
      <LogoCarousel />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Consulting CTA Section */}
      <ConsultingCtaSection />

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 dark:gradient-purple gradient-blue opacity-10 animate-gradient-xy" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-scale-in">
            Stop Chasing Leads. Start Getting <span className="dark:text-gradient-purple text-gradient-blue">Clients Who Buy</span>.
          </h2>

          {/* Multiple Choice Question */}
          <div className="mt-8 sm:mt-10">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">
              Are you already active on Facebook for your business or yourself?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/strategy-call?facebook=yes"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 dark:gradient-purple gradient-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg overflow-hidden w-auto sm:w-52"
              >
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="relative z-10">Yeah I am</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              </Link>

              <Link
                href="/strategy-call?facebook=no"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-card text-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg w-auto sm:w-52"
              >
                <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Not yet</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
