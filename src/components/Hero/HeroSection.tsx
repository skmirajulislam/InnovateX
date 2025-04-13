'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { techStack, type TechStackItem } from '@/public/data/index';

const HeroSection: React.FC = () => {
    // States for storing pre-generated random values
    const [particleProps, setParticleProps] = useState<Array<{
        color: string;
        size: number;
        posX: number;
        posY: number;
        duration: number;
        delay: number;
        moveX: number;
        moveY: number;
    }>>([]);

    const [starProps, setStarProps] = useState<Array<{
        size: number;
        posX: number;
        posY: number;
        opacity: number;
        duration: number;
        delay: number;
    }>>([]);

    const [shootingStarProps, setShootingStarProps] = useState<Array<{
        startX: number;
        startY: number;
        endX: number;
        endY: number;
        duration: number;
        delay: number;
    }>>([]);

    // Generate all random values once on component mount (client-side only)
    useEffect(() => {
        // Generate particle props
        const newParticleProps = [...Array(20)].map((_, i) => {
            const colors = ['bg-[#4ade80]', 'bg-cyan-400', 'bg-teal-400'];
            return {
                color: colors[i % colors.length],
                size: Math.random() * 3 + 1,
                posX: Math.random() * 100,
                posY: Math.random() * 100,
                duration: Math.random() * 20 + 10,
                delay: Math.random() * 5,
                moveX: (Math.random() - 0.5) * 50,
                moveY: (Math.random() - 0.5) * 100,
            };
        });
        setParticleProps(newParticleProps);

        // Generate star props
        const newStarProps = [...Array(50)].map(() => ({
            size: Math.random() * 3 + 1,
            posX: Math.random() * 100,
            posY: Math.random() * 100,
            opacity: Math.random() * 0.8 + 0.2,
            duration: Math.random() * 10 + 5,
            delay: Math.random() * 5,
        }));
        setStarProps(newStarProps);

        // Generate shooting star props
        const newShootingStarProps = [...Array(3)].map(() => ({
            startX: Math.random() * 100,
            startY: Math.random() * 30,
            endX: Math.random() * 100 - 50,
            endY: Math.random() * 100 - 50,
            duration: 3 + Math.random() * 2,
            delay: 10 + Math.random() * 10,
        }));
        setShootingStarProps(newShootingStarProps);
    }, []);

    return (
        <div className="min-h-screen bg-black bg-cover bg-center text-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Space overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Enhanced glossy highlight effects */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-br from-purple-500 to-transparent opacity-10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-green-400 to-transparent opacity-10 blur-[100px] rounded-full"></div>

            {/* Top glossy light */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent opacity-5 pointer-events-none"></div>

            {/* Enhanced orbits with tech stack icons */}
            <motion.div
                className="absolute w-full h-full pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2 }}
            >
                {/* Main central glow */}
                <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-[#4ade80] opacity-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

                {/* First orbit with tech icons */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full"
                    style={{
                        marginTop: '-12rem',
                        marginLeft: '-12rem',
                        border: '1px solid rgba(74, 222, 128, 0.4)',
                        boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                    {techStack.slice(0, 5).map((tech: TechStackItem, i: number) => (
                        <motion.div
                            key={tech.name}
                            className="absolute w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 shadow-lg"
                            style={{
                                left: `${Math.cos((i * Math.PI * 2) / 5) * 11.5}rem`,
                                top: `${Math.sin((i * Math.PI * 2) / 5) * 11.5}rem`,
                                transform: 'translate(-50%, -50%)',
                            }}
                            animate={{
                                rotate: -360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                                scale: { duration: 5, repeat: Infinity, delay: i * 0.5 }
                            }}
                        >
                            <Image
                                src={`https://utfs.io/f/${tech.img}`}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                            />

                        </motion.div>
                    ))}
                </motion.div>

                {/* Second orbit with remaining tech icons */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[32rem] h-[32rem] rounded-full"
                    style={{
                        marginTop: '-16rem',
                        marginLeft: '-16rem',
                        border: '1px solid rgba(74, 222, 128, 0.3)',
                        boxShadow: '0 0 30px rgba(74, 222, 128, 0.1)'
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                >
                    {techStack.slice(5, 10).map((tech: TechStackItem, i: number) => (
                        <motion.div
                            key={tech.name}
                            className="absolute w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 shadow-lg"
                            style={{
                                left: `${Math.cos((i * Math.PI * 2) / 5) * 16}rem`,
                                top: `${Math.sin((i * Math.PI * 2) / 5) * 16}rem`,
                                transform: 'translate(-50%, -50%)',
                            }}
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 80, repeat: Infinity, ease: "linear" },
                                scale: { duration: 5, repeat: Infinity, delay: i * 0.5 }
                            }}
                        >
                            <Image
                                src={`https://utfs.io/f/${tech.img}`}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Third orbit */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] rounded-full"
                    style={{
                        marginTop: '-20rem',
                        marginLeft: '-20rem',
                        border: '1px solid rgba(74, 222, 128, 0.2)',
                        boxShadow: '0 0 40px rgba(74, 222, 128, 0.05)'
                    }}
                    animate={{
                        rotate: 360,
                        borderWidth: ['1px', '2px', '1px']
                    }}
                    transition={{
                        duration: 100,
                        repeat: Infinity,
                        ease: "linear",
                        borderWidth: { duration: 10, repeat: Infinity }
                    }}
                />
            </motion.div>

            {/* Enhanced stars with gradients from first code */}
            {[...Array(8)].map((_, i: number) => {
                const colors = [
                    { id: `starGreen${i}`, from: '#4ade80', to: '#22d3ee' },
                    { id: `starCyan${i}`, from: '#22d3ee', to: '#38bdf8' },
                    { id: `starTeal${i}`, from: '#2dd4bf', to: '#4ade80' }
                ];
                const color = colors[i % 3];
                const size = [4, 5, 6, 8][i % 4];
                const positions = [
                    { top: '15%', right: '20%' },
                    { top: '30%', left: '25%' },
                    { bottom: '25%', right: '30%' },
                    { top: '20%', left: '15%' },
                    { bottom: '15%', left: '20%' },
                    { top: '40%', right: '10%' },
                    { bottom: '30%', left: '30%' },
                    { top: '10%', right: '30%' }
                ];

                return (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={positions[i]}
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 20 + (i * 5),
                            repeat: Infinity,
                            ease: "linear",
                            scale: { duration: 3 + i, repeat: Infinity }
                        }}
                    >
                        <svg
                            width={size}
                            height={size}
                            viewBox="0 0 24 24"
                            fill={`url(#${color.id})`}
                            filter={`drop-shadow(0 0 ${size / 2}px ${color.from})`}
                        >
                            <defs>
                                <linearGradient id={color.id} x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={color.from} />
                                    <stop offset="100%" stopColor={color.to} />
                                </linearGradient>
                            </defs>
                            <path d="M12,1L15.5,8.5H23L16.5,13.5L19,21L12,16L5,21L7.5,13.5L1,8.5H8.5L12,1Z" />
                        </svg>
                    </motion.div>
                );
            })}

            {/* Floating particles - Now using pre-generated values */}
            {particleProps.map((props, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full ${props.color}`}
                    style={{
                        width: `${props.size}px`,
                        height: `${props.size}px`,
                        left: `${props.posX}%`,
                        top: `${props.posY}%`,
                        boxShadow: `0 0 ${props.size * 2}px ${props.size / 2}px ${props.color.replace('bg-', 'rgba(').replace('-400', ', 0.3)')}`
                    }}
                    animate={{
                        y: [0, props.moveY],
                        x: [0, props.moveX],
                        opacity: [0.2, 1, 0.2]
                    }}
                    transition={{
                        duration: props.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: props.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Random twinkling stars - Now using pre-generated values */}
            {starProps.map((props, i) => (
                <motion.div
                    key={`star-${i}`}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: `${props.size}px`,
                        height: `${props.size}px`,
                        left: `${props.posX}%`,
                        top: `${props.posY}%`,
                        opacity: props.opacity
                    }}
                    animate={{
                        opacity: [props.opacity, props.opacity * 0.5, props.opacity],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: props.duration,
                        repeat: Infinity,
                        delay: props.delay
                    }}
                />
            ))}

            {/* Enhanced glossy white light effects */}
            <div className="absolute top-1/4 left-1/3 w-1/3 h-1/6 bg-white opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/5 bg-white opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

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

            {/* Enhanced profile photo with animated halo */}
            <motion.div
                className="relative mb-4 z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#4ade80] opacity-20 blur-xl animate-pulse"></div>
                    <div className="w-24 h-24 bg-gray-800 rounded-full p-1 relative shadow-lg shadow-green-900/30">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-gray-700 overflow-hidden">
                            <Image
                                src={`https://utfs.io/f/or07poavtUuSdTPLkJKa9VoReBDEIAGKQ4xPC3fqjy8LW1dM`}
                                alt="Profile"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Enhanced Hero Text with staggered animation */}
            <div className="relative z-10 overflow-hidden text-center px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h1 className="pixel-heading text-4xl md:text-5xl font-bold mb-2">
                        <span className="text-white">
                            Welcome to
                        </span>
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h1 className="pixel-heading text-4xl md:text-8xl font-bold mb-8">
                        <span className="text-[#4ade80] relative">
                            Innovate
                            <span className="text-white">
                                X
                            </span>
                            <motion.span
                                className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-[#4ade80] rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                        </span>
                    </h1>
                </motion.div>
            </div>

            {/* Animated description text */}
            <motion.div
                className="max-w-md mx-auto text-center mb-8 z-10 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <motion.p
                    className="pixel-text text-gray-300 mb-3 text-2xl"
                    animate={{
                        textShadow: ['0 0 8px rgba(255,255,255,0)', '0 0 8px rgba(255,255,255,0.1)', '0 0 8px rgba(255,255,255,0)']
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    Where Tomorrow&apos;s Innovators Begin Their Journey Today.
                </motion.p>
                <motion.p
                    className="pixel-text text-gray-400 text-lg"
                    animate={{
                        textShadow: ['0 0 8px rgba(255,255,255,0)', '0 0 8px rgba(255,255,255,0.1)', '0 0 8px rgba(255,255,255,0)']
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                    Developers | Industry Professionals | Speakers & Mentors
                </motion.p>
            </motion.div>

            {/* Enhanced buttons with hover effects */}
            <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <a href="https://chat.whatsapp.com/GOrv9gInAU7D4jIq25c2dC" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <motion.button
                        className="pixel-text relative overflow-hidden bg-gradient-to-r from-cyan-400 to-[#4ade80] text-black rounded-full px-8 py-4 flex items-center shadow-lg hover:shadow-xl transition-all group font-medium text-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center">
                            <motion.span
                                className="mr-3"
                                animate={{ rotate: [0, 20, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                            </motion.span>
                            Join The Community
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </motion.button>
                </a>

                <motion.a
                    href="#footer"
                    className="pixel-text relative overflow-hidden border border-gray-600 bg-black bg-opacity-50 text-white rounded-full px-8 py-4 flex items-center shadow-lg shadow-[#4ade80]/10 hover:shadow-xl hover:border-[#4ade80]/50 transition-all backdrop-blur-sm group font-medium text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10 flex items-center">
                        Explore Our Socials
                        <motion.span
                            className="ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-[#4ade80]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
            </motion.div>

            {/* Shooting stars - Now using pre-generated values */}
            {shootingStarProps.map((props, i) => (
                <motion.div
                    key={`shooting-${i}`}
                    className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none"
                    style={{
                        left: `${props.startX}%`,
                        top: `${props.startY}%`,
                        opacity: 0
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: [`${props.endX}vw`, `${props.endX + 100}vw`],
                        y: [`${props.endY}vh`, `${props.endY + 100}vh`]
                    }}
                    transition={{
                        duration: props.duration,
                        repeat: Infinity,
                        repeatDelay: props.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default HeroSection;