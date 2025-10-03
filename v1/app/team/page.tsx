import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the Team
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We&apos;re a passionate team of digital marketing experts dedicated to helping businesses grow through strategic marketing and innovative solutions.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Member Card - Placeholder */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-5xl">👤</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Team Member</h3>
                <p className="text-primary font-semibold mb-3">Director</p>
                <p className="text-muted-foreground text-sm">
                  Leading the vision and strategy for Opority&apos;s growth and client success.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-5xl">👤</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Team Member</h3>
                <p className="text-primary font-semibold mb-3">Digital Marketing Specialist</p>
                <p className="text-muted-foreground text-sm">
                  Expert in creating high-converting campaigns that drive measurable results.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-5xl">👤</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Team Member</h3>
                <p className="text-primary font-semibold mb-3">Web Designer</p>
                <p className="text-muted-foreground text-sm">
                  Crafting beautiful, user-friendly websites that convert visitors into customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            At Opority, we&apos;re committed to helping businesses achieve sustainable growth through innovative digital marketing strategies. 
            We believe in building long-term partnerships based on trust, transparency, and measurable results.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Rated as a Top 3 Advertising & Marketing StartUp in the East Of England 2025, we&apos;re proud to deliver exceptional 
            service and results that exceed expectations.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free strategy call to discuss how we can help your business grow.
          </p>
          <Link
            href="/strategy-call"
            className="inline-block bg-background text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-background/90 transition-all transform hover:scale-105"
          >
            Book Your Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
