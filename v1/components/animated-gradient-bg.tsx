"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Stream {
  y: number;
  amplitude: number;
  frequency: number;
  speed: number;
  color: string;
}

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create flowing streams
    const streams: Stream[] = [
      { y: 0.2, amplitude: 60, frequency: 0.003, speed: 0.5, color: "rgba(139, 92, 246, 0.3)" }, // Purple
      { y: 0.35, amplitude: 80, frequency: 0.004, speed: 0.7, color: "rgba(124, 58, 237, 0.25)" }, // Deep purple
      { y: 0.5, amplitude: 70, frequency: 0.0035, speed: 0.6, color: "rgba(109, 40, 217, 0.2)" }, // Darker purple
      { y: 0.65, amplitude: 90, frequency: 0.0045, speed: 0.8, color: "rgba(147, 51, 234, 0.15)" }, // Violet
      { y: 0.8, amplitude: 75, frequency: 0.0038, speed: 0.65, color: "rgba(168, 85, 247, 0.2)" }, // Light purple
    ];

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 + 0.3,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let animationFrameId: number;
    let offset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw flowing streams
      streams.forEach((stream) => {
        ctx.save();
        
        // Create gradient for each stream
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.2, stream.color);
        gradient.addColorStop(0.5, stream.color);
        gradient.addColorStop(0.8, stream.color);
        gradient.addColorStop(1, "transparent");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 100;
        ctx.filter = "blur(40px)";

        // Draw flowing curve
        ctx.beginPath();
        for (let x = 0; x < canvas.width + 100; x += 5) {
          const y =
            canvas.height * stream.y +
            Math.sin((x + offset * stream.speed) * stream.frequency) * stream.amplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      });

      // Draw particles
      ctx.filter = "none";
      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x > canvas.width + 10) {
          particle.x = -10;
          particle.y = Math.random() * canvas.height;
        }
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 150, 255, ${particle.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(147, 51, 234, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      offset += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}
