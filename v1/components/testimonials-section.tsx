"use client";

import Link from "next/link";

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  testimonial: string;
  rating: number;
  imagePlaceholder: string;
  image?: string; // Optional: path to real client image
  video?: string; // Optional: path to self-hosted video (/videos/testimonial.mp4)
  videoPoster?: string; // Optional: thumbnail image for video
  embedUrl?: string; // Optional: YouTube/Vimeo embed URL (preferred for performance)
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function TestimonialsSection({
  testimonials,
  title = "Client Success Stories",
  subtitle = "We partner with innovative B2B companies to deliver transformative web experiences",
  ctaText = "Start your success story",
  ctaLink = "/quick-quote"
}: TestimonialsSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {title.split(' ').map((word, i) => 
              word === 'Success' ? (
                <span key={i} className="dark:text-gradient-purple text-gradient-blue">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-card border-2 border-border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-slide-up flex flex-col"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Card Header - Avatar and Info */}
              <div className="flex items-start gap-4 mb-4 sm:mb-6">
                {/* Avatar Placeholder */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full dark:gradient-purple gradient-blue flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0 shadow-lg">
                  {testimonial.imagePlaceholder}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h3>

                  {/* Title and Company */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-2">
                    {testimonial.title}
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1" aria-label={`${testimonial.rating} star rating`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text - Scrollable with fixed height */}
              <div className="mb-6 flex-shrink-0">
                <blockquote className="text-muted-foreground leading-relaxed text-sm sm:text-base max-h-24 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40">
                  &quot;{testimonial.testimonial}&quot;
                </blockquote>
              </div>

              {/* Media Container - Fixed position at bottom */}
              <div className="relative w-full aspect-video bg-secondary/50 rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors duration-300 mt-auto">
                {testimonial.embedUrl ? (
                  /* Embedded Video (YouTube/Vimeo) - Best for performance */
                  <iframe
                    src={testimonial.embedUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : testimonial.video ? (
                  /* Self-hosted video with lazy loading and optimizations */
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    poster={testimonial.videoPoster}
                    controls
                    preload="none"
                    playsInline
                  >
                    <source src={testimonial.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : testimonial.image ? (
                  /* Static image */
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${testimonial.image})` }} />
                ) : (
                  /* Placeholder */
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs text-muted-foreground/50">Add image or video</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 dark:gradient-purple gradient-blue rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <div className="flex justify-center mt-12 sm:mt-16 animate-slide-up" style={{animationDelay: "0.4s"}}>
            <Link
              href={ctaLink}
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 dark:gradient-purple gradient-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg overflow-hidden"
            >
              <span className="relative z-10">{ctaText}</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
