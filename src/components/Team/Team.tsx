'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { teamMembers, type TeamMember, type SocialLink } from '@/public/data/index';

interface PixelBorderProps {
    className?: string;
}

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
    moveX: number;
    moveY: number;
    duration: number;
    delay: number;
    isPixelated: boolean;
}

const Team: React.FC = () => {
    // State for random elements
    const [stars, setStars] = useState<Star[]>([]);
    const [particles, setParticles] = useState<Particle[]>([]);

    // Generate random values on client-side only
    useEffect(() => {
        // Generate stars
        const newStars: Star[] = [];
        for (let i = 0; i < 50; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                left: Math.random() * 100,
                top: Math.random() * 100,
                opacity: Math.random() * 0.8 + 0.2
            });
        }
        setStars(newStars);

        // Generate particles
        const colors = ['bg-[#4ade80]', 'bg-cyan-400', 'bg-teal-400'];
        const newParticles: Particle[] = [];
        for (let i = 0; i < 20; i++) {
            const isPixelated = i % 3 === 0;
            newParticles.push({
                id: i,
                color: colors[i % 3],
                size: Math.random() * 3 + 1,
                posX: Math.random() * 100,
                posY: Math.random() * 100,
                moveX: (Math.random() - 0.5) * 50,
                moveY: (Math.random() - 0.5) * 100,
                duration: Math.random() * 20 + 10,
                delay: Math.random() * 5,
                isPixelated: isPixelated
            });
        }
        setParticles(newParticles);
    }, []);

    // Animation variants
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    // Pixelated border effect
    const PixelBorder: React.FC<PixelBorderProps> = ({ className }) => (
        <div className={`${className || ''} relative`}>
            {[...Array(8)].map((_, i: number) => (
                <div
                    key={i}
                    className="absolute bg-[#4ade80]"
                    style={{
                        width: '4px',
                        height: '4px',
                        ...(i === 0 && { top: 0, left: 0 }),
                        ...(i === 1 && { top: 0, right: 0 }),
                        ...(i === 2 && { bottom: 0, left: 0 }),
                        ...(i === 3 && { bottom: 0, right: 0 }),
                        ...(i === 4 && { top: 0, left: '33%' }),
                        ...(i === 5 && { top: 0, right: '33%' }),
                        ...(i === 6 && { bottom: 0, left: '33%' }),
                        ...(i === 7 && { bottom: 0, right: '33%' }),
                    }}
                />
            ))}
        </div>
    );

    return (
        <section id="team" className="relative py-20 bg-black overflow-hidden">
            {/* Space background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Stars - now using pre-generated values */}
                {stars.map((star) => (
                    <div
                        key={star.id}
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

                {/* Animated gradient circles */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 opacity-10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Font styles */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
                
                .pixel-heading {
                    font-family: 'Press Start 2P', cursive;
                    text-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
                    letter-spacing: 1px;
                }
                
                .pixel-text {
                    font-family: 'VT323', monospace;
                }
            `}</style>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Heading */}
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
                        Our <span className="text-[#4ade80]">Team</span>
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
                        The brilliant minds behind our success. Each member brings unique skills and passion to create something extraordinary.
                    </motion.p>
                </div>

                {/* Leadership Team */}
                <motion.div
                    className="mb-28"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                >
                    <motion.h3
                        className="pixel-heading text-2xl md:text-3xl font-bold mb-12 text-white text-center"
                        variants={item}
                    >
                        Convenor & Co-Convenor
                        <span className="block w-48 h-1 bg-[#4ade80] mx-auto mt-4"></span>
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
                        {teamMembers.leadership.map((member: TeamMember, index: number) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                variants={item}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/20 to-cyan-500/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 -z-10" />

                                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-[#4ade80]/30 transition-all duration-300 h-full">
                                    <div className="flex flex-col md:flex-row h-full">
                                        {/* Mobile Image (Top) */}
                                        <div className="relative w-full aspect-square md:hidden">
                                            <Image
                                                src={`https://utfs.io/f/${member.image}`}
                                                alt={member.name}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover object-center transition-transform duration-500"
                                            />
                                            <PixelBorder className="absolute inset-0" />
                                            {/* Mobile Social Icons */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-center space-x-4">
                                                {member.social.map((social: SocialLink, i: number) => (
                                                    <motion.a
                                                        key={i}
                                                        href={social.url}
                                                        className="w-10 h-10 flex items-center justify-center bg-[#4ade80]/70 rounded-full hover:bg-[#4ade80] transition-all"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.2 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <span className="text-black text-lg">{social.icon}</span>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Desktop Image (Left) */}
                                        <div className="relative w-full md:w-1/3 h-auto overflow-hidden hidden md:block">
                                            <Image
                                                src={`https://utfs.io/f/${member.image}`}
                                                alt={member.name}
                                                width={300}
                                                height={450}
                                                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <PixelBorder className="absolute inset-0" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <div className="flex space-x-3">
                                                    {member.social.map((social: SocialLink, i: number) => (
                                                        <a
                                                            key={i}
                                                            href={social.url}
                                                            className="w-8 h-8 flex items-center justify-center bg-[#4ade80]/70 rounded-full hover:bg-[#4ade80] transition-all transform hover:scale-110"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <span className="text-black">{social.icon}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="w-full md:w-2/3 p-6 flex flex-col">
                                            <h4 className="pixel-heading text-lg font-bold text-white mb-1">{member.name}</h4>
                                            <p className="pixel-text text-lg text-[#4ade80] mb-3">{member.role}</p>
                                            <div className="w-12 h-0.5 bg-[#4ade80] my-2"></div>
                                            <p className="pixel-text text-gray-300 text-md mb-4">{member.bio}</p>

                                            <div className="mt-auto">
                                                <button className="pixel-text text-sm font-medium text-[#4ade80] hover:text-white transition-colors flex items-center">
                                                    View Profile
                                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Core Team */}
                <motion.div
                    className="mb-28"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                >
                    <motion.h3
                        className="pixel-heading text-2xl md:text-3xl font-bold mb-12 text-white text-center"
                        variants={item}
                    >
                        Organizers
                        <span className="block w-36 h-1 bg-[#4ade80] mx-auto mt-4"></span>
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
                        {teamMembers.coreTeam.map((member: TeamMember, index: number) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                variants={item}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/20 to-cyan-500/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 -z-10" />

                                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-[#4ade80]/30 transition-all duration-300 h-full">
                                    <div className="flex flex-col md:flex-row h-full">
                                        {/* Mobile Image (Top) */}
                                        <div className="relative w-full aspect-square md:hidden">
                                            <Image
                                                src={`https://utfs.io/f/${member.image}`}
                                                alt={member.name}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover object-center transition-transform duration-500"
                                            />
                                            <PixelBorder className="absolute inset-0" />
                                            {/* Mobile Social Icons */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-center space-x-4">
                                                {member.social.map((social: SocialLink, i: number) => (
                                                    <motion.a
                                                        key={i}
                                                        href={social.url}
                                                        className="w-10 h-10 flex items-center justify-center bg-[#4ade80]/70 rounded-full hover:bg-[#4ade80] transition-all"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.2 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <span className="text-black text-lg">{social.icon}</span>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Desktop Image (Left) */}
                                        <div className="relative w-full md:w-1/3 h-auto overflow-hidden hidden md:block">
                                            <Image
                                                src={`https://utfs.io/f/${member.image}`}
                                                alt={member.name}
                                                width={300}
                                                height={450}
                                                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <PixelBorder className="absolute inset-0" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <div className="flex space-x-3">
                                                    {member.social.map((social: SocialLink, i: number) => (
                                                        <a
                                                            key={i}
                                                            href={social.url}
                                                            className="w-8 h-8 flex items-center justify-center bg-[#4ade80]/70 rounded-full hover:bg-[#4ade80] transition-all transform hover:scale-110"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <span className="text-black">{social.icon}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="w-full md:w-2/3 p-6 flex flex-col">
                                            <h4 className="pixel-heading text-lg font-bold text-white mb-1">{member.name}</h4>
                                            <p className="pixel-text text-lg text-[#4ade80] mb-3">{member.role}</p>
                                            <div className="w-12 h-0.5 bg-[#4ade80] my-2"></div>
                                            <p className="pixel-text text-gray-300 text-md mb-4">{member.bio}</p>

                                            <div className="mt-auto">
                                                <button className="pixel-text text-sm font-medium text-[#4ade80] hover:text-white transition-colors flex items-center">
                                                    View Profile
                                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Support Team */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                >
                    <motion.h3
                        className="pixel-heading text-2xl md:text-3xl font-bold mb-12 text-white text-center"
                        variants={item}
                    >
                        Admins
                        <span className="block w-24 h-1 bg-[#4ade80] mx-auto mt-4"></span>
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
                        {teamMembers.supportTeam.map((member: TeamMember, index: number) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                variants={item}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/20 to-cyan-500/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 -z-10" />

                                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-[#4ade80]/30 transition-all duration-300 h-full">
                                    <div className="flex flex-col md:flex-row h-full">
                                        {/* Mobile Image (Top) */}
                                        <div className="relative w-full aspect-square md:hidden">
                                            <Image
                                                src={`https://utfs.io/f/${member.image}`}
                                                alt={member.name}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover object-center transition-transform duration-500"
                                            />
                                            <PixelBorder className="absolute inset-0" />
                                            {/* Mobile Social Icons */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-center space-x-4">
                                                {member.social.map((social: SocialLink, i: number) => (
                                                    <motion.a
                                                        key={i}
                                                        href={social.url}
                                                        className="w-10 h-10 flex items-center justify-center bg-[#4ade80]/70 rounded-full hover:bg-[#4ade80] transition-all"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.2 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <span className="text-black text-lg">{social.icon}</span>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Desktop Image (Left) */}
                                        <div className="relative w-full md:w-1/3 h-auto overflow-hidden hidden md:block">
                                            <Image
                                                src={`https://utfs.io/f/${member.image}`}
                                                alt={member.name}
                                                width={300}
                                                height={450}
                                                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <PixelBorder className="absolute inset-0" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <div className="flex space-x-3">
                                                    {member.social.map((social: SocialLink, i: number) => (
                                                        <a
                                                            key={i}
                                                            href={social.url}
                                                            className="w-8 h-8 flex items-center justify-center bg-[#4ade80]/70 rounded-full hover:bg-[#4ade80] transition-all transform hover:scale-110"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <span className="text-black">{social.icon}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="w-full md:w-2/3 p-6 flex flex-col">
                                            <h4 className="pixel-heading text-lg font-bold text-white mb-1">{member.name}</h4>
                                            <p className="pixel-text text-lg text-[#4ade80] mb-3">{member.role}</p>
                                            <div className="w-12 h-0.5 bg-[#4ade80] my-2"></div>
                                            <p className="pixel-text text-gray-300 text-md mb-4">{member.bio}</p>

                                            <div className="mt-auto">
                                                <button className="pixel-text text-sm font-medium text-[#4ade80] hover:text-white transition-colors flex items-center">
                                                    View Profile
                                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Floating particles with pixelated shapes - now using pre-generated values */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute ${particle.isPixelated ? '' : 'rounded-full'} ${particle.color}`}
                    style={{
                        width: `${particle.size * (particle.isPixelated ? 2 : 1)}px`,
                        height: `${particle.size * (particle.isPixelated ? 2 : 1)}px`,
                        left: `${particle.posX}%`,
                        top: `${particle.posY}%`,
                        boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px ${particle.color.replace('bg-', 'rgba(').replace('-400', ', 0.3)')}`
                    }}
                    animate={{
                        y: [0, particle.moveY],
                        x: [0, particle.moveX],
                        opacity: [0.2, 1, 0.2],
                        rotate: particle.isPixelated ? [0, 90, 180, 270, 360] : 0
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

            {/* Additional pixelated decorative elements */}
            <div className="absolute top-20 left-10 w-12 h-12 z-0 opacity-20">
                <div className="w-4 h-4 bg-[#4ade80] absolute top-0 left-0"></div>
                <div className="w-4 h-4 bg-[#4ade80] absolute top-0 right-0"></div>
                <div className="w-4 h-4 bg-[#4ade80] absolute bottom-0 left-0"></div>
                <div className="w-4 h-4 bg-[#4ade80] absolute bottom-0 right-0"></div>
            </div>

            <div className="absolute bottom-20 right-10 w-12 h-12 z-0 opacity-20">
                <div className="w-4 h-4 bg-cyan-400 absolute top-0 left-0"></div>
                <div className="w-4 h-4 bg-cyan-400 absolute top-0 right-0"></div>
                <div className="w-4 h-4 bg-cyan-400 absolute bottom-0 left-0"></div>
                <div className="w-4 h-4 bg-cyan-400 absolute bottom-0 right-0"></div>
            </div>
        </section>
    );
};

export default Team;