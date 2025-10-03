import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function WebDesignPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bespoke Web Design
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Unlock your business potential with a bespoke web design that captivates, informs, and converts. 
            Embrace the power of design and watch your business soar.
          </p>
          <Link
            href="/website-creation"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Take the first step
          </Link>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Recent projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <p className="text-muted-foreground">Project Showcase 1</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Success</h3>
                <p className="text-muted-foreground">Modern online store with seamless checkout experience</p>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <p className="text-muted-foreground">Project Showcase 2</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Professional Services</h3>
                <p className="text-muted-foreground">Clean, conversion-focused design for service business</p>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <p className="text-muted-foreground">Project Showcase 3</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lead Generation</h3>
                <p className="text-muted-foreground">High-converting landing pages that drive results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            A website design solution that makes things easy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Built for SEO */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Built for SEO</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Every website we create is built with search engine optimization in mind from day one. 
                Clean code, fast loading times, mobile responsiveness, and proper meta tags ensure your site ranks well in search results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We follow Google&apos;s best practices and latest SEO guidelines to give your business the visibility it deserves.
              </p>
            </div>

            {/* Easy to Edit */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Easy to edit</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Take control of your content with an intuitive content management system. Update text, images, and pages without needing technical knowledge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We provide full training and ongoing support to ensure you&apos;re comfortable managing your website, 
                while we&apos;re always here to help when you need us.
              </p>
            </div>

            {/* Responsive Design */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Mobile-First Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 60% of web traffic coming from mobile devices, we ensure your website looks stunning and functions 
                perfectly on every screen size. Responsive design isn&apos;t optional—it&apos;s essential.
              </p>
            </div>

            {/* Conversion Focused */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Conversion Focused</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beautiful design means nothing without results. We strategically place calls-to-action, optimize user journeys, 
                and remove friction points to turn visitors into customers. Your website becomes a 24/7 sales machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Complete Online Peace of Mind
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Hosting</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with SSL certificates, regular backups, and 24/7 monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimized Performance</h3>
              <p className="text-muted-foreground">
                Lightning-fast load times with optimized images, caching, and CDN delivery
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Lifetime support and regular updates to keep your website running smoothly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Ready, steady, GROW!</h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s create a website that not only looks amazing but drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/website-creation"
              className="inline-block bg-background text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-background/90 transition-all transform hover:scale-105"
            >
              Get a Quick Quote
            </Link>
            <Link
              href="/strategy-call"
              className="inline-block border-2 border-background text-background px-8 py-4 rounded-full text-lg font-semibold hover:bg-background hover:text-foreground transition-all transform hover:scale-105"
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
