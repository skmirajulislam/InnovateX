'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { socialLinks, policyLinks } from '@/public/data/index';

// Define interfaces for the data structures
interface Particle {
    x: number;
    y: number;
    size: number;
    speed: number;
    alpha: number;
}

const Footer: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // Particle animation effect (contained within footer)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create particles
        const particles: Particle[] = [];
        const particleCount = Math.floor(canvas.width * canvas.height / 1000);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speed: Math.random() * 0.5 + 0.1,
                alpha: Math.random() * 0.5 + 0.1
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw particles
            ctx.fillStyle = '#4ade80';
            particles.forEach(particle => {
                ctx.globalAlpha = particle.alpha;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                // Move particles
                particle.y += particle.speed;
                if (particle.y > canvas.height) {
                    particle.y = 0;
                    particle.x = Math.random() * canvas.width;
                }
            });

            requestAnimationFrame(draw);
        };

        const animationId = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);


    return (
        <footer className="relative bg-black pt-12 md:pt-20 pb-8 md:pb-12 overflow-hidden">
            {/* Main container with curved top only */}
            <div className="relative bg-black rounded-t-[30px] md:rounded-t-[40px] border-t border-x border-gray-800 pt-12 md:pt-16 pb-8 md:pb-12 overflow-hidden">
                {/* Particle animation canvas (contained within footer) */}
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
                />

                {/* Animated gradient elements (contained) */}
                <div className="absolute inset-0 overflow-hidden rounded-t-[30px] md:rounded-t-[40px] pointer-events-none">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-40 md:w-64 h-40 md:h-64 rounded-full bg-gradient-to-br from-[#4ade80] to-transparent opacity-10 blur-xl"
                        animate={{
                            x: [0, 20, 0],
                            y: [0, 15, 0],
                            opacity: [0.05, 0.15, 0.05]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 rounded-full bg-gradient-to-br from-[#4ade80] to-transparent opacity-10 blur-xl"
                        animate={{
                            x: [0, -20, 0],
                            y: [0, -15, 0],
                            opacity: [0.05, 0.12, 0.05]
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 3
                        }}
                    />
                </div>

                {/* Font styles */}
                <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
          
          .pixel-heading {
            font-family: 'Press Start 2P', cursive;
            letter-spacing: 1px;
          }
          
          .pixel-text {
            font-family: 'VT323', monospace;
          }
        `}</style>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Main content - centered */}
                    <div className="flex flex-col items-center text-center">
                        {/* Massive InnovateX logo with white X - responsive text size */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-8 md:mb-12"
                        >
                            <h1 className="pixel-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-[#4ade80]">
                                INNOVATE<span className="text-white">X</span>
                            </h1>
                            <motion.div
                                className="h-1 bg-gradient-to-r from-transparent via-[#4ade80] to-transparent mt-4 md:mt-6 mx-auto"
                                initial={{ width: 0 }}
                                whileInView={{ width: '50%' }}
                                transition={{ delay: 0.3, duration: 1 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>

                        {/* Glossy social icons with enhanced animation */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ staggerChildren: 0.1 }}
                            viewport={{ once: true }}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gray-900 border-2 border-gray-700 hover:border-[#4ade80] transition-all duration-300 group "
                                    target="_blank"
                                    aria-label={social.name}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.1,
                                        boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'
                                    }}
                                >
                                    {/* Glossy effect */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-gray-700 opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    {/* Icon with enhanced glow */}
                                    <span className="text-xl md:text-2xl text-[#4ade80] group-hover:text-white transition-all duration-300">
                                        {social.icon}
                                    </span>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Policy links with animation - stacked on mobile */}
                        <motion.div
                            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {policyLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    className="pixel-text text-gray-400 hover:text-[#4ade80] text-base md:text-xl transition-colors duration-300 relative group"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ade80] transition-all duration-300 group-hover:w-full"></span>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Copyright - smaller text on mobile */}
                        <motion.div
                            className="pixel-text text-gray-500 text-sm md:text-lg mt-6 md:mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            © {new Date().getFullYear()} INNOVATEX | ALL RIGHTS RESERVED
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;