'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { tiers } from '@/public/data';

interface Star {
    id: number;
    size: number;
    left: number;
    top: number;
    opacity: number;
}

interface Particle {
    id: number;
    color: string;
    size: number;
    posX: number;
    posY: number;
    moveY: number;
    moveX: number;
    duration: number;
    delay: number;
}

const CommunityOffers: React.FC = () => {
    // State for stars and particles
    const [stars, setStars] = useState<Star[]>([]);
    const [particles, setParticles] = useState<Particle[]>([]);

    // Generate stars and particles on component mount (client-side only)
    useEffect(() => {
        // Generate stars
        const newStars: Star[] = [];
        for (let i = 0; i < 60; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                left: Math.random() * 100,
                top: Math.random() * 100,
                opacity: Math.random() * 0.8 + 0.2
            });
        }
        setStars(newStars);

        // Generate particles
        const colors = ['bg-[#4ade80]', 'bg-cyan-400', 'bg-teal-400'];
        const newParticles: Particle[] = [];
        for (let i = 0; i < 12; i++) {
            newParticles.push({
                id: i,
                color: colors[i % colors.length],
                size: Math.random() * 3 + 1,
                posX: Math.random() * 100,
                posY: Math.random() * 100,
                moveY: (Math.random() - 0.5) * 50,
                moveX: (Math.random() - 0.5) * 30,
                duration: Math.random() * 15 + 10,
                delay: Math.random() * 5
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <section id="community-offers" className="relative py-20 lg:py-32 bg-black overflow-hidden">
            {/* Space background elements */}
            <div className="absolute inset-0 z-0">
                {/* Stars - now using pre-generated values */}
                {stars.map((star) => (
                    <div
                        key={`star-${star.id}`}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            opacity: star.opacity
                        }}
                    />
                ))}

                {/* Floating particles - now using pre-generated values */}
                {particles.map((particle) => (
                    <motion.div
                        key={`particle-${particle.id}`}
                        className={`absolute rounded-full ${particle.color}`}
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.posX}%`,
                            top: `${particle.posY}%`,
                            boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px ${particle.color.replace('bg-', 'rgba(').replace('-400', ', 0.3)')}`
                        }}
                        animate={{
                            y: [0, particle.moveY],
                            x: [0, particle.moveX],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: particle.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Glossy overlays */}
                <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-br from-purple-500 to-transparent opacity-10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-green-400 to-transparent opacity-10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="relative mb-16 text-center">
                    {/* Large background text */}
                    <motion.div
                        className="pixel-heading absolute -top-16 left-1/2 transform -translate-x-1/2 text-[3rem] sm:text-[5rem] md:text-[7rem] font-bold opacity-10 text-[#4ade80] whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ textShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}
                    >
                        INNOVATEX
                    </motion.div>

                    {/* Section title */}
                    <motion.h2
                        className="pixel-heading text-3xl lg:text-4xl font-bold text-white relative z-10"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Community <span className="text-[#4ade80]">Benefits</span>
                    </motion.h2>

                    {/* Animated underline */}
                    <motion.div
                        className="h-1 w-24 bg-[#4ade80] mx-auto mt-6 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                    {/* Description */}
                    <motion.p
                        className="pixel-text mt-6 text-gray-300 max-w-2xl mx-auto text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Exclusive resources and opportunities designed to accelerate your success
                    </motion.p>
                </div>

                {/* Membership Tiers */}
                <div className="space-y-12">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-xl bg-black bg-opacity-50 backdrop-blur-sm border border-gray-800 overflow-hidden"
                        >
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-start gap-8">
                                    {/* Left side - Image with border */}
                                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                        <div className="aspect-square rounded-lg overflow-hidden border border-gray-700 flex items-center justify-center bg-gray-900">
                                            <Image
                                                src={`https://utfs.io/f/${tier.image}`}
                                                alt={tier.name}
                                                className="w-full h-full object-cover"
                                                width={300}
                                                height={300}
                                            />
                                        </div>
                                    </div>

                                    {/* Right side - Content */}
                                    <div className="w-full md:w-2/3">
                                        <h3 className="pixel-heading text-2xl md:text-3xl font-bold mb-3 text-[#4ade80]">{tier.name}</h3>
                                        <ul className="pixel-text text-gray-300 text-xl md:text-xl space-y-2">
                                            {tier.description.map((item: string, i: number) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * i }}
                                                    viewport={{ once: true }}
                                                    className="flex items-start"
                                                >
                                                    <span className="text-[#4ade80] mr-2">•</span>
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityOffers;