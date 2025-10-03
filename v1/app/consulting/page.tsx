import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ConsultingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Business Growth Consulting
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert guidance to help you leverage digital marketing and social media to impact your personal and business growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Social Media Management */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Social Media Management</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Ideal if you&apos;re a business looking to outsource your social media - saving you time to focus on your expertise.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We specialise in delivering social media with impact - generating increased engagement and awareness for your business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We will work with you on a monthly basis to make an impact on your marketing and your profits.
                And, we&apos;re a little different to other agencies - we&apos;ve done it ourselves! We&apos;ve built a huge online community, 
                so we know exactly what it takes to be hugely successful on social media.
              </p>
            </div>

            {/* 1:1 Coaching */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">1:1 Coaching</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Are you looking to become a key person of influence in your industry?
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our coaching is bespoke to you and your personal goals - we&apos;ll help you use the positive power of social media 
                to impact your personal and business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;ll give you all of our insight, tools and expertise, including how to build your own online community and a 
                social media strategy that stops pointless posting and starts creating commercial impact.
              </p>
            </div>

            {/* Consultancy */}
            <div className="bg-card border border-border rounded-xl p-8 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Team Consultancy</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Perfect for your team - intensive, fast and actionable to deliver impact on your business quickly.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We&apos;ll help your team understand how social media can create impact for your business and deliver results you&apos;re not currently getting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;ve got a five-star track record of building small social media followings into national brands and we&apos;re ready to 
                share our insight, tools and expertise with your team.
              </p>
            </div>
          </div>

          {/* VSL Placeholder Section */}
          <div className="bg-secondary/30 border border-border rounded-xl p-12 text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">See Our Success Stories</h3>
            <p className="text-muted-foreground mb-8">
              Watch how we've helped businesses transform their digital presence
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-background border border-border rounded-lg aspect-video flex items-center justify-center">
                <p className="text-muted-foreground">Video Success Story 1</p>
              </div>
              <div className="bg-background border border-border rounded-lg aspect-video flex items-center justify-center">
                <p className="text-muted-foreground">Video Success Story 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Opority?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-3">01</div>
              <p className="text-muted-foreground">
                One of the only agencies to have built a huge online community ourselves.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-3">02</div>
              <p className="text-muted-foreground">
                We deliver organic social media which impacts engagement and awareness for your business, bolstering your brand and bottom line.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-3">03</div>
              <p className="text-muted-foreground">
                We have first hand experience of building and working with high-profile personal brands.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-3">04</div>
              <p className="text-muted-foreground">
                We believe in the positive power of social media and want to help you experience this.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-3">05</div>
              <p className="text-muted-foreground">
                Social Media for us isn&apos;t pretty Instagram grids, it&apos;s results which impact your bottom line.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-3">06</div>
              <p className="text-muted-foreground">
                Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free strategy call to discuss how we can help you achieve your goals.
          </p>
          <Link
            href="/strategy-call"
            className="inline-block bg-background text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-background/90 transition-all transform hover:scale-105"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
