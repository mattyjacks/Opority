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
  // Duplicate logos array for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 md:py-20 relative" style={{
      background: "linear-gradient(135deg, #140028 0%, #1a0035 100%)"
    }}>
      {/* Trusted By Many Title */}
      <h3 className="text-white text-center text-lg md:text-xl font-semibold mb-12">
        Trusted By Many
      </h3>

      <div className="relative">
        {/* Left fade gradient - blends with background */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #140028 0%, #1a0035 30%, transparent 100%)"
          }}
        />
        
        {/* Right fade gradient - blends with background */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #1a0035 0%, #140028 30%, transparent 100%)"
          }}
        />
        
        {/* Scrolling logos container */}
        <motion.div
          className="flex gap-8 md:gap-10 lg:gap-12"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="relative h-20 w-40 md:h-24 md:w-48 lg:h-28 lg:w-56 transition-all duration-300 group-hover:brightness-125">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain brightness-100"
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
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
