'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Star {
    id: number;
    size: number;
    left: number;
    top: number;
    opacity: number;
}

interface Stat {
    number: number;
    suffix: string;
    label: string;
}

interface Particle {
    id: number;
    color: string;
    size: number;
    posX: number;
    posY: number;
    duration: number;
    delay: number;
    moveX: number;
    moveY: number;
}

const About: React.FC = () => {
    // State for stars and particles
    const [stars, setStars] = useState<Star[]>([]);
    const [particles, setParticles] = useState<Particle[]>([]);

    const [countedStats, setCountedStats] = useState<Stat[]>([
        { number: 0, suffix: '+', label: 'Professionals & GDE Speakers' },
        { number: 0, suffix: '+', label: 'Community Members' },
        { number: 0, suffix: '/7', label: 'Community Support Available' },
        { number: 0, suffix: '+', label: 'Events Completed' }
    ]);

    const statsRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(statsRef, { once: true });

    // Generate stars and particles only on client-side
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
        const newParticles: Particle[] = [];
        const colors = ['bg-[#4ade80]', 'bg-green-400', 'bg-green-300'];

        for (let i = 0; i < 20; i++) {
            newParticles.push({
                id: i,
                color: colors[i % colors.length],
                size: Math.random() * 3 + 1,
                posX: Math.random() * 100,
                posY: Math.random() * 100,
                duration: Math.random() * 20 + 10,
                delay: Math.random() * 5,
                moveX: (Math.random() - 0.5) * 50,
                moveY: (Math.random() - 0.5) * 100
            });
        }
        setParticles(newParticles);
    }, []);

    // Stats counter effect
    useEffect(() => {
        if (isInView) {
            const targetStats: Stat[] = [
                { number: 10, suffix: '+', label: 'Professionals & GDE Speakers' },
                { number: 370, suffix: '+', label: 'Community Members' },
                { number: 24, suffix: '/7', label: 'Community Support Available' },
                { number: 5, suffix: '+', label: 'Events Completed' }
            ];

            const duration = 2000; // 2 seconds for counting animation
            const interval = 50; // update every 50ms
            const steps = duration / interval;

            targetStats.forEach((stat, index) => {
                const stepValue = stat.number / steps;
                let currentStep = 0;

                const counter = setInterval(() => {
                    currentStep++;
                    setCountedStats(prev => {
                        const newStats = [...prev];
                        newStats[index] = {
                            ...newStats[index],
                            number: Math.min(
                                Math.floor(currentStep * stepValue),
                                stat.number
                            )
                        };
                        return newStats;
                    });

                    if (currentStep >= steps) {
                        clearInterval(counter);
                    }
                }, interval);
            });
        }
    }, [isInView]);

    return (
        <section id="about" className="relative py-20 bg-black overflow-hidden">
            {/* Dark background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-95"></div>

            {/* Space background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Stars - now using state-based values */}
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
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-green-500 to-green-600 opacity-10 blur-3xl"
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

            <div className="container mx-auto px-4 relative z-10">
                {/* Pixel font import */}
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

                {/* Section Heading */}
                <div className="relative mb-16 text-center">
                    {/* Large background text - InnovateX - Adjusted for mobile */}
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
                        About <span className="text-[#4ade80]">Community</span>
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
                        className="pixel-text mt-6 text-gray-300 max-w-4xl mx-auto text-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        InnovateX is a tech community made for students, developers, designers, and all future innovators. We believe in learning, building, and growing together.
                    </motion.p>
                </div>

                {/* Main Content - Modified to match the image layout */}
                <div className="max-w-7xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <motion.p
                            className="pixel-text text-gray-300 text-2xl mb-6 max-w-4xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Right now, we have over 360+ developers, 10+ experienced professionals, and even GDE, Google Developer Expert speakers who are part of our amazing community. Whether you&apos;re just getting started or already skilled, there&apos;s a place for you here. Our goal is to bring passionate people together — whether you love coding, designing, exploring new technologies, or sharing knowledge.
                        </motion.p>

                        <motion.p
                            className="pixel-text text-gray-300 text-2xl max-w-4xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            InnovateX is a tech community founded in 2025, where you&apos;ll find opportunities to learn new skills, work on real projects, and meet amazing people from the tech world.
                        </motion.p>
                    </div>

                    {/* Stats Row - Styled like in the image */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6" ref={statsRef}>
                        {countedStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-900 bg-opacity-40 p-6 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col items-center text-center shadow-lg"
                                style={{ boxShadow: '0 8px 32px rgba(74, 222, 128, 0.1)' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-end justify-center">
                                    <span className="pixel-heading text-4xl font-bold text-[#4ade80]">
                                        {stat.number}
                                    </span>
                                    <span className="pixel-text text-2xl text-white mb-1 ml-1">{stat.suffix}</span>
                                </div>
                                <p className="pixel-text text-xl text-gray-300 mt-3">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Video Section */}
                <motion.div
                    className="w-full max-w-4xl mx-auto relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="relative rounded-2xl overflow-hidden border-2 border-green-700 shadow-xl shadow-[#4ade80]/20">
                        <div className="aspect-w-16 aspect-h-9 w-full">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="https://rbo6om9l82.ufs.sh/f/or07poavtUuSl81nigNmxAgOI9X3pfSR5zsqMhoWk0NQJbnu" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating particles - now using pre-generated values from state */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
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
                        opacity: [0.2, 1, 0.2]
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
        </section>
    );
};

export default About;