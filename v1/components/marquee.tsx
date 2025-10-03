"use client";

interface MarqueeProps {
  text: string;
  className?: string;
}

export function Marquee({ text, className = "" }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden dark:gradient-purple-pink gradient-blue py-3 border-b border-border ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat the text multiple times for continuous scroll */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="text-sm font-medium text-white">
              {text}
            </span>
            <span className="mx-4 text-white/70">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
