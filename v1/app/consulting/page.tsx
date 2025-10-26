import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import Image from "next/image";
import { Grid3x3, Users, ClipboardList } from "lucide-react";

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
            Consulting that actually moves the needle.
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Client Acquisition Consulting</h2>
              </div>
              <div className="space-y-4 sm:space-y-5 text-muted-foreground px-2 sm:px-0">
                <p className="leading-relaxed text-base sm:text-lg">
                  We&apos;ll guide you to build a clear system for getting clients, whether that&apos;s figuring out cold calling, DMs, or improving how you sell.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  You&apos;ll get direct feedback and actionable steps you can use immediately to start booking meetings and closing deals.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  This is for business owners who want predictable growth.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-border hover:border-primary transition-all">
                <Image
                  src="/consulting/social-media.jpeg"
                  alt="Social Media Management"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Service 2: 1:1 Coaching - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Image Left */}
            <div className="animate-slide-in-left">
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-border hover:border-primary transition-all">
                <Image
                  src="/consulting/coaching.jpeg"
                  alt="1:1 Coaching"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
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

            {/* Image Right */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-border hover:border-primary transition-all">
                <Image
                  src="/consulting/team-consult.jpeg"
                  alt="Team Consultancy"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
