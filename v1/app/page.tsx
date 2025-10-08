import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import { LogoCarousel } from "@/components/logo-carousel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Marquee Section */}
      <Marquee text="Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025" />
      
      {/* Hero Section */}
      <section className="relative bg-background min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <AnimatedGradientBackground />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 sm:mb-6 leading-tight animate-slide-up">
            Tired of <span className="dark:text-gradient-purple text-gradient-blue">Chasing Clients</span> who<br /><span className="dark:text-gradient-purple text-gradient-blue">Don&apos;t Pay</span> Enough?
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-center text-muted-foreground mb-6 sm:mb-10 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.1s"}}>
            We show you how to replace them with high value clients who book, pay and stay.
          </p>

          <div className="flex justify-center animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Link
              href="/strategy-call"
              className="dark:gradient-purple gradient-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-110 animate-pulse-glow shadow-lg"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Logo Carousel Section */}
      <LogoCarousel />

      {/* Combined Section - You Don't Need More Clicks & Website */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: "3s"}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-32">
          {/* You Don't Need More Clicks */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                You Don&apos;t Need <span className="dark:text-gradient-purple text-gradient-blue">More Clicks</span>
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                You need consistent leads who are genuinely interested in your service and have the budget to pay for it.
                That&apos;s why we build custom lead generation systems that attract, qualify, and deliver serious prospects straight to your calendar.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/paid-ads"
                  className="inline-block bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  Show Me How It Works
                </Link>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src="/rocketlaptop.png"
                  alt="Rocket launching from laptop representing lead generation growth"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Why Your Website Isn't Getting You Clients */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - Left Side */}
            <div className="animate-slide-in-left">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src="/arrow.avif"
                  alt="Upward trending arrow charts representing website growth"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="animate-slide-in-right">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Why Your <span className="dark:text-gradient-purple text-gradient-blue">Website</span> Isn&apos;t Getting You Clients
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                Let&apos;s say you have 500 visitors a month. If none of them are calling, booking, or buying — your website&apos;s not doing its job.
              </p>
              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Most sites confuse visitors, fail to build trust, or make it unclear what to do next. We fix that by turning your site into a conversion machine.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/web-design"
                  className="inline-block bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  See What&apos;s Broken on Your Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
