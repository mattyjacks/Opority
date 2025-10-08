"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

function AdFunnelContent() {
  const searchParams = useSearchParams();
  const response = searchParams.get('response');

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-background py-20 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <AnimatedGradientBackground />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            {response === 'yes' ? (
              <>Great! Let&apos;s <span className="dark:text-gradient-purple text-gradient-blue">Enhance</span> Your Website</>
            ) : (
              <>Let&apos;s Build Your <span className="dark:text-gradient-purple text-gradient-blue">Online Presence</span></>
            )}
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.1s"}}>
            {response === 'yes'
              ? "We'll help you optimize and grow your existing website to attract more customers and increase conversions."
              : "Starting from scratch? Perfect! We'll create a stunning website that sets you apart from the competition."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Link
              href="/quick-quote"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              Get a Quick Quote
            </Link>
            <Link
              href="/strategy-call"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {response === 'yes' ? 'How We Can Help' : 'What You Get'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {response === 'yes' ? 'Modern Redesign' : 'Custom Design'}
              </h3>
              <p className="text-muted-foreground">
                {response === 'yes'
                  ? 'Refresh your website with a modern, conversion-focused design'
                  : 'Beautiful, bespoke design tailored to your brand and goals'
                }
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {response === 'yes' ? 'SEO Optimization' : 'Fast Performance'}
              </h3>
              <p className="text-muted-foreground">
                {response === 'yes'
                  ? 'Improve your search rankings and get found by more customers'
                  : 'Lightning-fast loading speeds that keep visitors engaged'
                }
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {response === 'yes' ? 'More Conversions' : 'Built to Convert'}
              </h3>
              <p className="text-muted-foreground">
                {response === 'yes'
                  ? 'Turn more visitors into paying customers with proven strategies'
                  : 'Strategic design that guides visitors to take action'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss your project and create a website that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quick-quote"
              className="inline-block bg-background text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-background/90 transition-all transform hover:scale-105"
            >
              Get Your Quote Now
            </Link>
            <Link
              href="/strategy-call"
              className="inline-block border-2 border-background text-background px-8 py-4 rounded-full text-lg font-semibold hover:bg-background hover:text-foreground transition-all transform hover:scale-105"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function AdFunnelPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdFunnelContent />
    </Suspense>
  );
}
