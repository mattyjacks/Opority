"use client";

interface MarqueeProps {
  text: string;
  className?: string;
}

export function Marquee({ text, className = "" }: MarqueeProps) {
  return (
    <div
      className={`relative overflow-hidden dark:gradient-purple gradient-blue py-2 sm:py-3 border-b border-border ${className}`}
    >
      <div className="marquee-track flex whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center mx-2 sm:mx-4">
            <span className="text-xs sm:text-sm font-medium text-white">
              {text}
            </span>
            <span className="mx-2 sm:mx-4 text-white/70">★</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .marquee-track {
            animation-duration: 35s; /* slightly faster but still smooth */
          }
        }

        @media (max-width: 480px) {
          .marquee-track {
            animation-duration: 30s; /* comfortable speed on mobile */
          }
        }
      `}</style>
    </div>
  );
}
