import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up">
            Bespoke <span className="dark:text-gradient-purple text-gradient-blue">Web Design</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-center text-muted-foreground mb-6 sm:mb-10 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.1s"}}>
            We're here to help your business grow with bespoke web design that really works.
          </p>

          {/* Funnel Question - Cleaner, more direct */}
          <div className="animate-slide-up" style={{animationDelay: "0.2s"}}>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90">
              Do you have an active website for yourself or your business?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              {/* Yes - Primary action */}
              <Link
                href="/ad-funnel?response=yes"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] font-semibold text-lg shadow-lg shadow-primary/25"
              >
                <span>Yes, I do</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* No - Secondary action */}
              <Link
                href="/ad-funnel?response=no"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-card border-2 border-border hover:border-primary hover:bg-primary/5 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] font-semibold text-lg"
              >
                <span>Not yet</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
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

      {/* How It Works Section - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-72 h-72 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: "3s"}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Helping Your Business <span className="dark:text-gradient-purple text-gradient-blue">Grow</span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              In 3 easy steps
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {/* Step 1 - Discover */}
            <div className="group relative animate-slide-up" style={{animationDelay: "0.1s"}}>
              {/* Card Container */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl dark:gradient-purple gradient-blue text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  01
                </div>

                {/* Content */}
                <div className="space-y-4 mt-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Discover
                  </h3>

                  {/* Animated gradient underline */}
                  <div className="h-1.5 w-full dark:gradient-purple gradient-blue rounded-full"></div>

                  <p className="text-muted-foreground leading-relaxed text-base">
                    Let&apos;s meet in person or over the phone to discuss your goals and guide you through the web design process.
                  </p>
                </div>

              </div>

            </div>

            {/* Step 2 - Design */}
            <div className="group relative animate-slide-up" style={{animationDelay: "0.2s"}}>
              {/* Card Container */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl dark:gradient-purple gradient-blue text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  02
                </div>

                {/* Content */}
                <div className="space-y-4 mt-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Design
                  </h3>

                  {/* Animated gradient underline */}
                  <div className="h-1.5 w-full dark:gradient-purple gradient-blue rounded-full"></div>

                  <p className="text-muted-foreground leading-relaxed text-base">
                    Once we capture your brief, our expert designers will create your unique new website. Our tech team will handle the rest.
                  </p>
                </div>

              </div>

            </div>

            {/* Step 3 - Deliver */}
            <div className="group relative animate-slide-up" style={{animationDelay: "0.3s"}}>
              {/* Card Container */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl dark:gradient-purple gradient-blue text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  03
                </div>

                {/* Content */}
                <div className="space-y-4 mt-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Deliver
                  </h3>

                  {/* Animated gradient underline */}
                  <div className="h-1.5 w-full dark:gradient-purple gradient-blue rounded-full"></div>

                  <p className="text-muted-foreground leading-relaxed text-base">
                    We optimise and launch your website, providing you with training and lifetime web support to unlock your business growth.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* CTA Buttons - Redesigned */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: "0.4s"}}>
            <Link
              href="/quick-quote"
              className="group relative inline-flex items-center gap-3 dark:gradient-purple gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-105 active:scale-95 shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Take the first step</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            </Link>

            <Link
              href="#video"
              className="group inline-flex items-center gap-3 bg-card border-2 border-primary text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span>Watch our video</span>
            </Link>
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
              href="/quick-quote"
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
