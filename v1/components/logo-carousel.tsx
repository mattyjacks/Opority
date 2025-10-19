"use client";

import Image from "next/image";

const logos = [
  { name: "Chesapeake Stays", src: "/logos/r-chesap.png" },
  { name: "TokenPilot", src: "/logos/r-tokenpilot.png" },
  { name: "Triangle", src: "/logos/r-triangle.png" },
  { name: "MediGlow Ads", src: "/logos/r-mediglow.png" },
  { name: "LinkedIn Remade", src: "/logos/r-linkedin.png" },
  { name: "Rapid AI", src: "/logos/r-rapidai.png" },
  { name: "JGOO", src: "/logos/jgoo.png" },
  { name: "Hydrogen", src: "/logos/hydrogen.png" },
  { name: "Ople", src: "/logos/ople.png" },
  { name: "RevID AI", src: "/logos/revidai.png" },
];

export function LogoCarousel() {
  // Duplicate twice for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 lg:py-10 relative bg-background">
      <h3 className="text-foreground text-center text-lg md:text-xl font-semibold mb-12 lg:mb-10">
        Trusted By Many
      </h3>

      <div className="relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-36 md:w-48 lg:w-64 z-10 pointer-events-none bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-36 md:w-48 lg:w-64 z-10 pointer-events-none bg-gradient-to-l from-background via-background/90 to-transparent" />

        {/* scrolling container */}
        <div className="scroll-track flex gap-12 md:gap-16 lg:gap-20">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 relative h-28 w-44 sm:h-32 sm:w-48 md:h-36 md:w-56 lg:h-40 lg:w-64">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 176px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                priority={index < 10}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-track {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .scroll-track {
            animation-duration: 15s;
          }
        }

        @media (max-width: 640px) {
          .scroll-track {
            animation-duration: 12s;
          }
        }
      `}</style>
    </div>
  );
}
