import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import Link from "next/link";
import { Grid3x3, Users, ClipboardList, Play, Heart, Info } from "lucide-react";

export default function ConsultingPage() {
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Business <span className="dark:text-gradient-purple text-gradient-blue">Growth</span> Consulting
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.1s"}}>
            Expert guidance to help you leverage digital marketing and social media to impact your personal and business growth.
          </p>
        </div>
      </section>

      {/* Services Section - New Layout */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

          {/* Service 1: Social Media Management - Content Left, Video Right */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Content Left */}
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex-shrink-0">
                  <Grid3x3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Social Media Management</h2>
              </div>
              <div className="space-y-4 sm:space-y-5 text-muted-foreground px-2 sm:px-0">
                <p className="leading-relaxed text-base sm:text-lg">
                  Ideal if you&apos;re a business looking to outsource your social media - saving you time to focus on your expertise.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  We specialise in delivering social media with impact - generating increased engagement and awareness for your business.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  We will work with you on a monthly basis to make an impact on your marketing and your profits.
                  And, we&apos;re a little different to other agencies - we&apos;ve done it ourselves! We&apos;ve built a huge online community,
                  so we know exactly what it takes to be hugely successful on social media.
                </p>
              </div>
            </div>

            {/* Video Right */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative h-[220px] sm:h-auto sm:aspect-video bg-zinc-900 dark:bg-zinc-950 rounded-lg sm:rounded-xl overflow-hidden border border-border group hover:border-primary transition-all">
                {/* Video Placeholder Background */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-900 dark:to-black">
                  <p className="text-zinc-500 text-xs sm:text-sm px-4 text-center">Video Embed: Social Media Success Story</p>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl">
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-900 ml-1" fill="currentColor" />
                  </button>
                </div>

                {/* Top Right Icons */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1.5 sm:gap-2">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center transition-all backdrop-blur-sm">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center transition-all backdrop-blur-sm">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: 1:1 Coaching - Video Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Video Left */}
            <div className="animate-slide-in-left">
              <div className="relative h-[220px] sm:h-auto sm:aspect-video bg-zinc-900 dark:bg-zinc-950 rounded-lg sm:rounded-xl overflow-hidden border border-border group hover:border-primary transition-all">
                {/* Video Placeholder Background */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-900 dark:to-black">
                  <p className="text-zinc-500 text-xs sm:text-sm px-4 text-center">Video Embed: 1:1 Coaching Testimonial</p>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl">
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-900 ml-1" fill="currentColor" />
                  </button>
                </div>

                {/* Top Right Icons */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1.5 sm:gap-2">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center transition-all backdrop-blur-sm">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center transition-all backdrop-blur-sm">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="animate-slide-in-right">
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">1:1 Coaching</h2>
              </div>
              <div className="space-y-4 sm:space-y-5 text-muted-foreground px-2 sm:px-0">
                <p className="leading-relaxed text-base sm:text-lg">
                  Are you looking to become a key person of influence in your industry?
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  Our coaching is bespoke to you and your personal goals - we&apos;ll help you use the positive power of social media
                  to impact your personal and business growth.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  We&apos;ll give you all of our insight, tools and expertise, including how to build your own online community and a
                  social media strategy that stops pointless posting and starts creating commercial impact.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3: Team Consultancy - Content Left, Video Right */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Content Left */}
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex-shrink-0">
                  <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Team Consultancy</h2>
              </div>
              <div className="space-y-4 sm:space-y-5 text-muted-foreground px-2 sm:px-0">
                <p className="leading-relaxed text-base sm:text-lg">
                  Perfect for your team - intensive, fast and actionable to deliver impact on your business quickly.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  We&apos;ll help your team understand how social media can create impact for your business and deliver results you&apos;re not currently getting.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  We&apos;ve got a five-star track record of building small social media followings into national brands and we&apos;re ready to
                  share our insight, tools and expertise with your team.
                </p>
              </div>
            </div>

            {/* Video Right */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative h-[220px] sm:h-auto sm:aspect-video bg-zinc-900 dark:bg-zinc-950 rounded-lg sm:rounded-xl overflow-hidden border border-border group hover:border-primary transition-all">
                {/* Video Placeholder Background */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-900 dark:to-black">
                  <p className="text-zinc-500 text-xs sm:text-sm px-4 text-center">Video Embed: Team Training Success</p>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl">
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-900 ml-1" fill="currentColor" />
                  </button>
                </div>

                {/* Top Right Icons */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1.5 sm:gap-2">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center transition-all backdrop-blur-sm">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center transition-all backdrop-blur-sm">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">Why <span className="dark:text-gradient-purple text-gradient-blue">Opority</span>?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-xl animate-scale-in" style={{animationDelay: "0.1s"}}>
              <div className="text-3xl font-bold dark:text-gradient-purple text-gradient-blue mb-3">01</div>
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
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 dark:gradient-purple gradient-blue opacity-10 animate-gradient-xy" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-scale-in">
            Ready to <span className="dark:text-gradient-purple text-gradient-blue">Transform</span> Your Business?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground animate-slide-up">
            Book a free strategy call to discuss how we can help you achieve your goals.
          </p>
          <Link
            href="/strategy-call"
            className="inline-block dark:gradient-purple gradient-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-110 animate-pulse-glow shadow-lg"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
