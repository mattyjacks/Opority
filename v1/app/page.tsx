import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Marquee Section */}
      <Marquee text="Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025" />
      
      {/* Hero Section */}
      <section className="relative bg-background py-20 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <AnimatedGradientBackground />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight animate-slide-up">
            Struggling to Get <span className="dark:text-gradient-purple text-gradient-blue">High Paying Clients</span> Consistently?
          </h1>
          
          <p className="text-xl md:text-2xl text-center text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.1s"}}>
            Get more consistent clients or higher paying ones.
          </p>
          
          <div className="flex justify-center animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Link
              href="/strategy-call"
              className="dark:gradient-purple gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-110 animate-pulse-glow shadow-lg"
            >
              Book Your Free Strategy Call
            </Link>
          </div>
          
          {/* Trusted By Section */}
          <div className="mt-16 text-center animate-slide-up" style={{animationDelay: "0.3s"}}>
            <p className="text-lg font-semibold mb-4 animate-float">Trusted By Many</p>
          </div>
        </div>
      </section>

      {/* You Don't Need More Clicks Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-left">
              You Don&apos;t Need <span className="dark:text-gradient-purple text-gradient-blue">More Clicks</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-in-left" style={{animationDelay: "0.1s"}}>
              You need consistent leads who are genuinely interested in your service and have the budget to pay for it. 
              That&apos;s why we build custom lead generation systems that attract, qualify, and deliver serious prospects straight to your calendar.
            </p>
            <Link
              href="/paid-ads"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 animate-slide-in-left"
              style={{animationDelay: "0.2s"}}
            >
              Show Me How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Website Section */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: "3s"}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-right">
              Why Your <span className="dark:text-gradient-purple text-gradient-blue">Website</span> Isn&apos;t Getting You Clients
            </h2>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed animate-slide-in-right" style={{animationDelay: "0.1s"}}>
              Let&apos;s say you have 500 visitors a month. If none of them are calling, booking, or buying — your website&apos;s not doing its job.
            </p>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-in-right" style={{animationDelay: "0.2s"}}>
              Most sites confuse visitors, fail to build trust, or make it unclear what to do next. We fix that by turning your site into a conversion machine.
            </p>
            <Link
              href="/web-design"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 animate-slide-in-right"
              style={{animationDelay: "0.3s"}}
            >
              See What&apos;s Broken on Your Site
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 dark:gradient-purple gradient-blue opacity-10 animate-gradient-xy" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-scale-in">
            Stop Chasing Leads. Start Getting <span className="dark:text-gradient-purple text-gradient-blue">Clients Who Buy</span>.
          </h2>
          <Link
            href="/strategy-call"
            className="inline-block dark:gradient-purple gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-110 mt-6 animate-pulse-glow shadow-lg"
          >
            Book Your Free Strategy Call
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: "1.5s"}} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">FAQs</h2>
          <div className="space-y-6">
            <details className="group border border-border rounded-lg p-6">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                How quick can websites take?
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-4 text-muted-foreground">
                Depending on the complexity, most websites can be completed within 2-4 weeks. We&apos;ll provide a detailed timeline during your strategy call.
              </p>
            </details>
            
            <details className="group border border-border rounded-lg p-6">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                What is the process?
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-4 text-muted-foreground">
                We start with a discovery call to understand your business goals, then create a custom strategy, implement the solution, and provide ongoing support to ensure results.
              </p>
            </details>
            
            <details className="group border border-border rounded-lg p-6">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                Is advertising worth it?
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-4 text-muted-foreground">
                When done right, absolutely. We focus on qualified leads with smart targeting and optimization to ensure your ad spend delivers real ROI.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 dark:gradient-purple gradient-blue opacity-10 animate-gradient-xy" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 animate-scale-in">Ready for <span className="dark:text-gradient-purple text-gradient-blue">more clients</span>?</h2>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
            Tap the button below to get started—risk-free.
          </p>
          <Link
            href="/strategy-call"
            className="inline-block dark:gradient-purple gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-110 animate-pulse-glow shadow-lg animate-float"
          >
            Get More Leads
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
