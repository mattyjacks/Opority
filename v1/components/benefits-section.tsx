"use client";

interface Benefit {
  title: string;
  description: string;
  weekLabel: string;
  color: string;
  colorFrom: string;
  colorTo: string;
}

const benefits: Benefit[] = [
  {
    title: "Campaign Setup & Audit",
    description:
      "We install tracking on your site, and we create targeted campaigns. If you have ads running, we'll audit them to help you get more value for your money.",
    weekLabel: "WEEK 1",
    color: "rose",
    colorFrom: "from-rose-500",
    colorTo: "to-rose-600",
  },
  {
    title: "Creative Testing & Optimisation",
    description:
      "We create multiple ad variations (images, videos, and copywriting) and test them with your audience.",
    weekLabel: "WEEK 2-3",
    color: "amber",
    colorFrom: "from-amber-500",
    colorTo: "to-amber-600",
  },
  {
    title: "Clear Communication, Reporting & Transparent Costs",
    description:
      "You'll have direct contact with us, plus weekly updates that break down performance in plain English.",
    weekLabel: "WEEK 4",
    color: "emerald",
    colorFrom: "from-emerald-500",
    colorTo: "to-emerald-600",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 animate-slide-up">
          <div className="inline-block mb-4 sm:mb-5">
            <span className="inline-flex items-center dark:bg-purple-600 bg-violet-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              Your benefits
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-5 leading-tight">
            What you can expect in{" "}
            <span className="dark:text-gradient-purple text-gradient-blue">
              30 days
            </span>{" "}
            of Advertising on Facebook
          </h2>
        </div>

        {/* Timeline Connecting Line */}
        <div className="relative mb-8">
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-border opacity-30 z-0" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {benefits.map((benefit, index) => (
              <div
                key={index}
                className="
                  group relative h-full
                  bg-card/60 backdrop-blur-md
                  border border-border/50
                  rounded-2xl p-8 md:p-10
                  hover:shadow-xl hover:border-border
                  hover:scale-[1.02]
                  transition-all duration-300
                  animate-slide-up
                  overflow-hidden
                "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Week Label */}
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-white">
                    {benefit.weekLabel}
                  </h3>
                </div>

                {/* Subtitle */}
                <div className="mb-4">
                  <p className="text-lg font-semibold text-center text-white/90">
                    {benefit.title}
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed text-center">
                  {benefit.description}
                </p>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
