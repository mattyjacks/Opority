"use client";

import Image from "next/image";

interface Logo {
  name: string;
  src: string;
}

// Add your logo filenames here
const logos: Logo[] = [
  { name: "Chesapeake Stays", src: "/logos/r-chesap.png" },
  { name: "TokenPilot", src: "/logos/r-tokenpilot.png" },
  { name: "Triangle", src: "/logos/r-triangle.png" },
  { name: "MediGlow Ads", src: "/logos/r-mediglow.png" },
  { name: "LinkedIn Remade", src: "/logos/r-linkedin.png" },
  { name: "Rapid AI", src: "/logos/r-rapidai.png" },
  { name: "JGOO", src: "/logos/jgoo.png" },
];

export function LogoCarousel() {
  // Duplicate logos 5x to ensure smooth infinite scroll without visible reset
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 md:py-20 relative bg-background">
      {/* Trusted By Many Title */}
      <h3 className="text-foreground text-center text-lg md:text-xl font-semibold mb-12">
        Trusted By Many
      </h3>

      <div className="relative">
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-48 lg:w-64 z-10 pointer-events-none bg-gradient-to-r from-background via-background/90 to-transparent"
        />

        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-48 lg:w-64 z-10 pointer-events-none bg-gradient-to-l from-background via-background/90 to-transparent"
        />

        {/* Scrolling logos container */}
        <div className="flex gap-8 md:gap-12 lg:gap-16 animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex-shrink-0"
            >
              <div className="relative h-20 w-36 sm:h-24 sm:w-44 md:h-32 md:w-56 lg:h-36 lg:w-64">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain brightness-100"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 224px, 256px"
                  priority={index < 7}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
