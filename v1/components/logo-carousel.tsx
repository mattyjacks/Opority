"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
];

export function LogoCarousel() {
  // Triple the logos for truly seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 md:py-20 relative bg-background">
      {/* Trusted By Many Title */}
      <h3 className="text-foreground text-center text-lg md:text-xl font-semibold mb-12">
        Trusted By Many
      </h3>

      <div className="relative">
        {/* Left fade gradient - reduced width on mobile */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-20 md:w-48 lg:w-64 z-10 pointer-events-none bg-gradient-to-r from-background via-background/90 to-transparent"
        />
        
        {/* Right fade gradient - reduced width on mobile */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-20 md:w-48 lg:w-64 z-10 pointer-events-none bg-gradient-to-l from-background via-background/90 to-transparent"
        />
        
        {/* Scrolling logos container */}
        <motion.div
          className="flex gap-12 md:gap-16 lg:gap-20"
          initial={{ x: 0 }}
          animate={{ x: "-33.333%" }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="relative h-32 w-56 md:h-36 md:w-64 lg:h-40 lg:w-72 transition-all duration-300 group-hover:brightness-125">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain brightness-100"
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                  priority={index < 6}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
