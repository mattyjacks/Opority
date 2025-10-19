import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import { TestimonialsSection, Testimonial } from "@/components/testimonials-section";
import Link from "next/link";

// Testimonials data - Real client video testimonials
const webDesignTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Digital Harmony",
    title: "Client Success Story",
    testimonial: "Watch how Opority transformed our digital presence and helped us achieve remarkable results.",
    rating: 5,
    imagePlaceholder: "DH",
    embedUrl: "https://www.youtube.com/embed/rLz6OettNMI"
  },
  {
    id: 2,
    name: "The English Project",
    title: "Client Success Story",
    testimonial: "Discover how our partnership with Opority elevated our business to new heights.",
    rating: 5,
    imagePlaceholder: "EP",
    embedUrl: "https://www.youtube.com/embed/85UCdX1pbhs"
  },
  {
    id: 3,
    name: "Subtyped.me",
    title: "Client Success Story",
    testimonial: "See how Opority's web design expertise helped us create a stunning online presence that drives results.",
    rating: 5,
    imagePlaceholder: "SM",
    embedUrl: "https://www.youtube.com/embed/bYeIWM1s3bU"
  },
  {
    id: 4,
    name: "Main St Experts",
    title: "Client Success Story",
    testimonial: "Working with Opority transformed our business. Watch our story and see the impact of professional web design.",
    rating: 5,
    imagePlaceholder: "MS",
    embedUrl: "https://www.youtube.com/embed/pZ1y_gdtkWk"
  },
  {
    id: 5,
    name: "AI Solutions",
    title: "Client Success Story",
    testimonial: "Opority delivered a website that perfectly captures our brand and engages our audience. Hear about our experience.",
    rating: 5,
    imagePlaceholder: "AI",
    embedUrl: "https://www.youtube.com/embed/5zSrJz8RPcY"
  }
];

export default function WebDesignPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-background min-h-[75vh] sm:min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background - same as landing page */}
        <div className="absolute inset-0">
          <AnimatedGradientBackground />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-4 sm:py-8 md:py-10">
          {/* Multi-line heading with purple underline on "easy" */}
          <div className="mb-4 sm:mb-8 md:mb-10 animate-slide-up">
            <p className="text-sm sm:text-base md:text-lg text-white mb-3 sm:mb-4">
              Bespoke, and affordable website design and SEO
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block mb-2"><span className="text-gradient-purple">Websites</span> made</span>
              <span className="relative inline-block">
                {/* Purple background highlight behind text */}
                <span className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 bg-purple-600 dark:bg-purple-500 rounded-sm"></span>
                <span className="relative text-foreground">easy</span>
              </span>
            </h1>
          </div>

          <div className="animate-slide-up" style={{animationDelay: "0.1s"}}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-foreground/90 px-4">
              Do you have an active website for yourself or your business?
            </h2>

            {/* Emoji-based button cards - matching homepage style */}
            <div className="flex flex-row gap-3 sm:gap-6 justify-center items-center w-full sm:w-auto px-4 max-w-md sm:max-w-none mx-auto">
              <Link
                href="/ad-funnel?response=yes"
                className="group relative flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary rounded-xl p-3 sm:p-5 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-primary/20 flex-1 sm:flex-none sm:w-40 lg:w-44"
              >
                <span className="text-4xl sm:text-6xl mb-1.5 sm:mb-2.5">👍</span>
                <span className="text-base sm:text-xl font-bold text-foreground">Sure do</span>
              </Link>

              <Link
                href="/ad-funnel?response=no"
                className="group relative flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-red-500/50 rounded-xl p-3 sm:p-5 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 flex-1 sm:flex-none sm:w-40 lg:w-44"
              >
                <span className="text-4xl sm:text-6xl mb-1.5 sm:mb-2.5">👎</span>
                <span className="text-base sm:text-xl font-bold text-foreground">Not yet</span>
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
          <PortfolioCarousel />
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

                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    Let&apos;s meet over the phone to discuss your goals and guide you through the web design process.
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

                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    Once we capture your brief, our expert designers will create your unique new website.
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

                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    We optimise and launch your website, providing you with training and lifetime web support to unlock your business growth.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center animate-slide-up" style={{animationDelay: "0.4s"}}>
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
      </section>

      {/* Get on with growing your business CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Get on with <span className="dark:text-gradient-purple text-gradient-blue">growing your business</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
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

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={webDesignTestimonials}
        title="We get to work for the most innovative <span>B2B Companies</span>"
      />

      <Footer />
    </main>
  );
}
