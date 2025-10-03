import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Award Badge */}
          <div className="mb-8 text-center">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-sm font-medium">
              Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
            Struggling to Get High Paying Clients Consistently?
          </h1>
          
          <p className="text-xl md:text-2xl text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            Get more consistent clients or higher paying ones.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/strategy-call"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              Book Your Free Strategy Call
            </Link>
          </div>
          
          {/* Trusted By Section */}
          <div className="mt-16 text-center">
            <p className="text-lg font-semibold mb-4">Trusted By Many</p>
          </div>
        </div>
      </section>

      {/* You Don't Need More Clicks Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              You Don&apos;t Need More Clicks
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              You need consistent leads who are genuinely interested in your service and have the budget to pay for it. 
              That&apos;s why we build custom lead generation systems that attract, qualify, and deliver serious prospects straight to your calendar.
            </p>
            <Link
              href="/paid-ads"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Show Me How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Website Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Your Website Isn&apos;t Getting You Clients
            </h2>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Let&apos;s say you have 500 visitors a month. If none of them are calling, booking, or buying — your website&apos;s not doing its job.
            </p>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Most sites confuse visitors, fail to build trust, or make it unclear what to do next. We fix that by turning your site into a conversion machine.
            </p>
            <Link
              href="/web-design"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              See What&apos;s Broken on Your Site
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Chasing Leads. Start Getting Clients Who Buy.
          </h2>
          <Link
            href="/strategy-call"
            className="inline-block bg-background text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-background/90 transition-all transform hover:scale-105 mt-6"
          >
            Book Your Free Strategy Call
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
          <div className="space-y-6">
            <details className="group border border-border rounded-lg p-6">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                How quick can websites take?
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-4 text-muted-foreground">
                Depending on the complexity, most websites can be completed within 2-4 weeks. We'll provide a detailed timeline during your strategy call.
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
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for more clients?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tap the button below to get started—risk-free.
          </p>
          <Link
            href="/strategy-call"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Get More Leads
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
