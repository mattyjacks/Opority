import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import Link from "next/link";

export default function PaidAdsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Marquee Section */}
      <Marquee text="Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025" />
      
      {/* Hero Section */}
      <section className="relative bg-background py-20 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute inset-0 dark:gradient-purple gradient-blue animate-gradient-xy" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 leading-tight animate-slide-up">
            Redefine Your <span className="dark:gradient-purple-pink gradient-blue bg-clip-text text-transparent animate-gradient">ROI</span>
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: "0.1s"}}>
            With return on investment for paid advertising continuing to grow, it&apos;s no wonder more businesses than ever are exploring the potential of paid ads.
          </p>
          <p className="text-lg text-center text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.2s"}}>
            Our campaigns deliver visibility, website traffic, and ultimately conversions for our clients. Smart targeting, budgeting and strategy has lead to notable business growth that out-performs both local and national competitors.
          </p>
          <p className="text-lg text-center text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.3s"}}>
            We believe the digital world should give confidence, not fear. With the largest global audience there&apos;s ever been, we&apos;ll help you cut through the noise and engage with your customers directly.
          </p>
          <div className="flex justify-center animate-slide-up" style={{animationDelay: "0.4s"}}>
            <Link
              href="/strategy-call"
              className="dark:gradient-purple-pink gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-110 animate-pulse-glow shadow-lg"
            >
              Talk to us today
            </Link>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">How we <span className="dark:gradient-purple-pink gradient-blue bg-clip-text text-transparent animate-gradient">do it</span></h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Ad Artwork and Design */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-xl animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-4">Ad Artwork and Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Since 65% of customers click on PPC ads, visuals are key. A great ad grabs attention, sparks interest and influences buying decisions. 
                Our team possess a deep understanding of compelling ad design, ensuring that your audience click for all the right reasons.
              </p>
            </div>

            {/* Keyword Selection */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-xl animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-4">Audience Targeting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Precise targeting is central to your Meta ads, helping define who sees them. Blending industry trends, competitor insights, and customer data, 
                we&apos;ll select relevant and optimised audience segments that speak for your brand. Our understanding of user intent will be imperative in the kind of targeting that leads your customers to click through and convert.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-secondary/30 border border-border rounded-xl p-8 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">10.52 ROAS</p>
                  <p className="text-muted-foreground">Return on Ad Spend</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">1.5M+</p>
                  <p className="text-muted-foreground">People Reached</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">£789k</p>
                  <p className="text-muted-foreground">In Website Sales</p>
                </div>
              </div>
            </div>

            {/* Re-targeting */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Re-targeting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reaching out to inactive customers often has better results than you might think. By using previously viewed content and special offers, 
                we&apos;ll draw users back to re-engage. Tailored ads and a reason to return will ensure your brand remains at the forefront of visitors&apos; minds.
              </p>
            </div>

            {/* Programmatic Marketing */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Smart Optimization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilising Meta&apos;s AI and machine learning, we help drive a revolution in ad performance. We&apos;ll harness your data with smart optimization to automate your ads and achieve optimal reach. 
                Each ad impression is smartly optimized in real-time, considering user behaviour, context, and demographics to reach the right people at the right time.
              </p>
            </div>

            {/* Reporting */}
            <div className="bg-card border border-border rounded-xl p-8 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Reporting and ROI Analysis</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide detailed monthly reports showing exactly where your ad spend is going and what results you&apos;re getting. 
                Transparent metrics, actionable insights, and continuous optimization ensure your campaigns deliver maximum ROI.
              </p>
              <div className="text-center">
                <p className="text-lg font-semibold mb-4">Want results for your business? Get in touch with us and let&apos;s make it happen!</p>
                <Link
                  href="/strategy-call"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book Your Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Ads Focus Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Specializing in Meta Ads
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            While others focus on Google Ads, we specialize in Meta (Facebook & Instagram) advertising. 
            With billions of active users and advanced targeting capabilities, Meta platforms offer unparalleled opportunities to reach your ideal customers where they spend their time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 dark:gradient-purple gradient-blue opacity-10 animate-gradient-xy" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-scale-in">
            Ready to <span className="dark:gradient-purple-pink gradient-blue bg-clip-text text-transparent animate-gradient">Scale</span> Your Business with Meta Ads?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground animate-slide-up">
            Let&apos;s create a custom advertising strategy that delivers real results.
          </p>
          <Link
            href="/strategy-call"
            className="inline-block dark:gradient-purple-pink gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-110 animate-pulse-glow shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
