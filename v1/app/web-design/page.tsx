import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import Link from "next/link";

export default function WebDesignPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-background min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background - same as landing page */}
        <div className="absolute inset-0">
          <AnimatedGradientBackground />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up">
            Bespoke <span className="dark:text-gradient-purple text-gradient-blue">Web Design</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.1s"}}>
            We're here to help your business grow with bespoke web design that really works.
          </p>

          <div className="animate-slide-up" style={{animationDelay: "0.2s"}}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-foreground/90 px-4">
              Do you have an active website for yourself or your business?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {/* Yes - Primary action */}
              <Link
                href="/ad-funnel?response=yes"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 dark:gradient-purple gradient-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg overflow-hidden w-auto sm:w-52">
                <span className="relative z-10">Yes, I do</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              </Link>

              {/* No - Secondary action */}
              <Link
                href="/ad-funnel?response=no"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-card text-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg w-auto sm:w-52"
              >
                <span>Not yet</span>
                <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Website design to <span className="dark:text-gradient-purple text-gradient-blue">future-proof your success</span>
            </h2>
          </div>
          
          {/* Portfolio Carousel */}
          <div className="mb-12">
            <PortfolioCarousel />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/quick-quote"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 dark:gradient-purple gradient-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Explore our portfolio</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section - Redesigned */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-72 h-72 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: "3s"}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Helping Your Business <span className="dark:text-gradient-purple text-gradient-blue">Grow</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              In 3 easy steps
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Step 1 - Discover */}
            <div className="group relative animate-slide-up pt-6" style={{animationDelay: "0.1s"}}>
              {/* Card Container */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-6 sm:-top-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl dark:gradient-purple gradient-blue text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  01
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4 mt-8 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Discover
                  </h3>

                  {/* Animated gradient underline */}
                  <div className="h-1.5 w-full dark:gradient-purple gradient-blue rounded-full"></div>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Let&apos;s meet in person or over the phone to discuss your goals and guide you through the web design process.
                  </p>
                </div>

              </div>

            </div>

            {/* Step 2 - Design */}
            <div className="group relative animate-slide-up pt-6" style={{animationDelay: "0.2s"}}>
              {/* Card Container */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-6 sm:-top-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl dark:gradient-purple gradient-blue text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  02
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4 mt-8 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Design
                  </h3>

                  {/* Animated gradient underline */}
                  <div className="h-1.5 w-full dark:gradient-purple gradient-blue rounded-full"></div>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Once we capture your brief, our expert designers will create your unique new website. Our tech team will handle the rest.
                  </p>
                </div>

              </div>

            </div>

            {/* Step 3 - Deliver */}
            <div className="group relative animate-slide-up pt-6" style={{animationDelay: "0.3s"}}>
              {/* Card Container */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-6 sm:-top-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl dark:gradient-purple gradient-blue text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  03
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4 mt-8 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Deliver
                  </h3>

                  {/* Animated gradient underline */}
                  <div className="h-1.5 w-full dark:gradient-purple gradient-blue rounded-full"></div>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    We optimise and launch your website, providing you with training and lifetime web support to unlock your business growth.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* CTA Buttons - Redesigned */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up" style={{animationDelay: "0.4s"}}>
            <Link
              href="/quick-quote"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 dark:gradient-purple gradient-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg overflow-hidden w-auto sm:w-64"
            >
              <span className="relative z-10">Take the first step</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            </Link>

            <Link
              href="#video"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-card text-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg w-auto sm:w-64"
            >
              <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Watch our video</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Get on with growing your business CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Get on with <span className="dark:text-gradient-purple text-gradient-blue">growing your business</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
              We&apos;d love to hear from you – get in touch with us to get started.
            </p>
            <div className="flex justify-center">
              <Link
                href="/quick-quote"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 dark:gradient-purple gradient-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Take the first step</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Ready, steady, GROW!</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Discovery</h3>
              <p className="text-muted-foreground text-sm">
                We learn about your business, goals, and target audience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">
                Create beautiful, bespoke designs tailored to your brand
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Develop</h3>
              <p className="text-muted-foreground text-sm">
                Build your website with clean code and best practices
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Launch</h3>
              <p className="text-muted-foreground text-sm">
                Go live and start converting visitors into customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s create a website that not only looks amazing but drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quick-quote"
              className="inline-block bg-background text-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-background/90 transition-all transform hover:scale-105"
            >
              Get a Quick Quote
            </Link>
            <Link
              href="/strategy-call"
              className="inline-block border-2 border-background text-background px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-background hover:text-foreground transition-all transform hover:scale-105"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
