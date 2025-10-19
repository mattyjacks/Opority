import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import { LogoCarousel } from "@/components/logo-carousel";
import { BenefitsSection } from "@/components/benefits-section";
import { ConsultingCtaSection } from "@/components/consulting-cta-section";
import { TestimonialsSection, Testimonial } from "@/components/testimonials-section";
import Link from "next/link";

// Testimonials data - Real client video testimonials (showing 2 on home page)
const homeTestimonials: Testimonial[] = [
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
  }
];

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
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-center text-white mb-5 sm:mb-6 lg:mb-8 xl:mb-10 leading-tight animate-slide-up">
            Tired of <span className="dark:text-gradient-purple text-gradient-blue">Chasing Clients</span> who<br /><span className="dark:text-gradient-purple text-gradient-blue">Don&apos;t Pay</span> Enough?
          </h1>

          <div className="flex flex-col items-center animate-slide-up" style={{animationDelay: "0.1s"}}>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6 sm:mb-8">
              Are you active on Facebook for your business or yourself?
            </p>
            <div className="flex flex-row gap-3 sm:gap-6 justify-center items-center w-full sm:w-auto px-4 max-w-md sm:max-w-none mx-auto">
              <Link
                href="/ad-funnel"
                className="group relative flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary rounded-xl p-3 sm:p-5 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-primary/20 flex-1 sm:flex-none sm:w-32 lg:w-36"
              >
                <span className="text-4xl sm:text-6xl mb-1.5 sm:mb-2.5">👍</span>
                <span className="text-base sm:text-xl font-bold text-white">Yes</span>
              </Link>

              <Link
                href="/ad-funnel"
                className="group relative flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-red-500/50 rounded-xl p-3 sm:p-5 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 flex-1 sm:flex-none sm:w-32 lg:w-36"
              >
                <span className="text-4xl sm:text-6xl mb-1.5 sm:mb-2.5">👎</span>
                <span className="text-base sm:text-xl font-bold text-white">No</span>
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

      {/* Testimonials Section */}
      <TestimonialsSection 
        testimonials={homeTestimonials}
        ctaText="See more success stories"
        ctaLink="/web-design"
      />

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 dark:gradient-purple gradient-blue opacity-10 animate-gradient-xy" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 animate-scale-in">
            Are you active on Facebook for your business or yourself?
          </h2>

          <div className="flex flex-row gap-3 sm:gap-6 justify-center items-center w-full sm:w-auto px-4 max-w-md sm:max-w-none mx-auto">
            <Link
              href="/ad-funnel"
              className="group relative flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary rounded-xl p-3 sm:p-5 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-primary/20 flex-1 sm:flex-none sm:w-40 lg:w-44"
            >
              <span className="text-4xl sm:text-6xl mb-1.5 sm:mb-2.5">👍</span>
              <span className="text-base sm:text-xl font-bold text-white">Yeah I am</span>
            </Link>

            <Link
              href="/ad-funnel"
              className="group relative flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-red-500/50 rounded-xl p-3 sm:p-5 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 flex-1 sm:flex-none sm:w-40 lg:w-44"
            >
              <span className="text-4xl sm:text-6xl mb-1.5 sm:mb-2.5">👎</span>
              <span className="text-base sm:text-xl font-bold text-white">Not yet</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
