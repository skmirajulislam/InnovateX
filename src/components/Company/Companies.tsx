'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { companies } from '@/public/data';

interface Star {
    id: number;
    size: number;
    posX: number;
    posY: number;
    opacity: number;
    duration: number;
    delay: number;
}

interface Particle {
    id: number;
    color: string;
    size: number;
    posX: number;
    posY: number;
    moveX: number;
    moveY: number;
    duration: number;
    delay: number;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const Companies: React.FC = () => {
    // State for stars and particles
    const [stars, setStars] = useState<Star[]>([]);
    const [particles, setParticles] = useState<Particle[]>([]);

    // Generate stars and particles on component mount (client-side only)
    useEffect(() => {
        // Generate stars
        const newStars: Star[] = [];
        for (let i = 0; i < 80; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                posX: Math.random() * 100,
                posY: Math.random() * 100,
                opacity: Math.random() * 0.8 + 0.2,
                duration: Math.random() * 8 + 3,
                delay: Math.random() * 5
            });
        }
        setStars(newStars);

        // Generate particles
        const colors = ['bg-[#4ade80]', 'bg-cyan-400', 'bg-teal-400'];
        const newParticles: Particle[] = [];
        for (let i = 0; i < 15; i++) {
            newParticles.push({
                id: i,
                color: colors[i % colors.length],
                size: Math.random() * 3 + 1,
                posX: Math.random() * 100,
                posY: Math.random() * 100,
                moveX: (Math.random() - 0.5) * 50,
                moveY: (Math.random() - 0.5) * 100,
                duration: Math.random() * 30 + 15,
                delay: Math.random() * 5
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div className="relative py-20 lg:py-32 bg-black overflow-hidden">
            {/* Space background overlay */}
            <div className="absolute inset-0 z-0">
                {/* Random twinkling stars - now using pre-generated values */}
                {stars.map((star) => (
                    <motion.div
                        key={`star-${star.id}`}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.posX}%`,
                            top: `${star.posY}%`,
                            opacity: star.opacity
                        }}
                        animate={{
                            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay
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

                {/* Glossy overlay effects */}
                <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-br from-purple-500 to-transparent opacity-10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-green-400 to-transparent opacity-10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header with relative positioning */}
                <div className="relative mb-20 text-center">
                    {/* Large background text - InnovateX */}
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
                        Professionals from <span className="text-[#4ade80]">Companies</span>
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
                        Experienced professionals from top tech companies guiding and mentoring our community
                    </motion.p>
                </div>

                {/* Companies grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            className="relative"
                        >

                            {/* Company logo container */}
                            <div className="aspect-[4/3] bg-[#080808] rounded-lg relative flex flex-col items-center justify-center p-6 border border-gray-800">
                                {/* Subtle star effect */}
                                <motion.div
                                    className="absolute w-3 h-3"
                                    animate={{
                                        opacity: [0, 0.1, 0],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: index * 0.3
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" fill="url(#starGradient)" className="w-full h-full">
                                        <defs>
                                            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#4ade80" />
                                                <stop offset="100%" stopColor="#22d3ee" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M12,1L15.5,8.5H23L16.5,13.5L19,21L12,16L5,21L7.5,13.5L1,8.5H8.5L12,1Z" />
                                    </svg>
                                </motion.div>

                                {/* Glossy background effect */}
                                <div className="absolute inset-0 rounded-lg overflow-hidden">
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4ade80] rounded-full opacity-5 blur-xl" />
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400 rounded-full opacity-5 blur-xl" />
                                </div>

                                {/* Company logo - larger size */}
                                <div className="relative z-10 w-full h-3/4 flex items-center justify-center">
                                    <Image
                                        src={`https://utfs.io/f/${company.img}`}
                                        alt={company.name}
                                        height={200}
                                        width={200}
                                    />
                                </div>

                                {/* Company name in pixel font */}
                                <p className="pixel-text text-[#4ade80] text-base mt-2 text-center relative z-10">
                                    {company.name}
                                </p>
                            </div>

                            {/* Tooltip on hover */}
                            <motion.div
                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 px-3 py-1 rounded-full opacity-0 pointer-events-none"
                                whileHover={{ opacity: 1, y: -8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <p className="pixel-text text-white text-xs whitespace-nowrap">{company.name}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom action button */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="/companies"
                        className="pixel-text inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full bg-black bg-opacity-40 text-white hover:text-[#4ade80] border-[#4ade80] relative group overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">View All Partners</span>
                        <motion.div
                            className="absolute inset-0 bg-[#4ade80]/10"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default Companies;