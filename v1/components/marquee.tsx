"use client";

interface MarqueeProps {
  text: string;
  className?: string;
}

export function Marquee({ text, className = "" }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden dark:gradient-purple gradient-blue py-2.5 sm:py-3 border-b border-border ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat the text multiple times for continuous scroll */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex items-center mx-3 sm:mx-4">
            <span className="text-[0.6875rem] sm:text-sm font-medium text-white leading-tight">
              {text}
            </span>
            <span className="mx-3 sm:mx-4 text-white/70 text-xs sm:text-sm">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
