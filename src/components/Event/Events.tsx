'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaRegClock, FaTicketAlt } from 'react-icons/fa';

const Events = () => {
    // Event data
    const events = [
        {
            id: 1,
            title: "Hackathon X",
            description: "24-hour coding marathon where developers, designers, and innovators collaborate to build groundbreaking projects.",
            date: "15-16 June 2024",
            time: "10:00 AM - 10:00 AM",
            venue: "Tech Park, Kolkata",
            image: "/hackathon.jpg",
            registrationLink: "#",
            tags: ["Coding", "Innovation", "Prize: ₹50,000"]
        },
        {
            id: 2,
            title: "Tech Expo",
            description: "Showcase of cutting-edge technologies with live demonstrations from industry leaders and startups.",
            date: "22 July 2024",
            time: "9:00 AM - 6:00 PM",
            venue: "Convention Center",
            image: "/tech-expo.jpg",
            registrationLink: "#",
            tags: ["Exhibition", "Networking", "Free Entry"]
        },
        {
            id: 3,
            title: "Startup Pitch",
            description: "Opportunity for early-stage startups to pitch their ideas to investors and win seed funding.",
            date: "5 August 2024",
            time: "2:00 PM - 5:00 PM",
            venue: "Innovation Hub",
            image: "/pitch.jpg",
            registrationLink: "#",
            tags: ["Entrepreneurship", "Funding", "Mentorship"]
        },
        {
            id: 4,
            title: "AI Workshop",
            description: "Hands-on workshop covering machine learning fundamentals and practical applications.",
            date: "12 September 2024",
            time: "11:00 AM - 4:00 PM",
            venue: "Computer Lab 3",
            image: "/ai-workshop.jpg",
            registrationLink: "#",
            tags: ["Workshop", "Certification", "Limited Seats"]
        }
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    // Pixelated border effect
    const PixelBorder = ({ className }: { className?: string }) => (
        <div className={`${className || ''} relative`}>
            {[...Array(8)].map((_, i) => (
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
        <section id="events" className="relative py-20 bg-black overflow-hidden">
            {/* Space background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Stars */}
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2
                        }}
                    />
                ))}

                {/* Animated gradient circles */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-cyan-600 opacity-10 blur-3xl"
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
                        Upcoming <span className="text-[#4ade80]">Events</span>
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
                        Exciting tech events designed to inspire, educate, and connect innovators from all backgrounds.
                    </motion.p>
                </div>

                {/* Events Grid - Modified to use medium-sized cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                >
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            className="group relative"
                            variants={item}
                            whileHover={{ y: -5 }}
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/20 to-cyan-500/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 -z-10" />

                            {/* Event card - Medium size */}
                            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-[#4ade80]/30 transition-all duration-300 h-full flex flex-col">
                                {/* Event image */}
                                <div className="relative h-40 overflow-hidden">
                                    <Image
                                        src={`https://utfs.io/f/${event.image}`}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <PixelBorder className="absolute inset-0" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                        <h3 className="pixel-heading text-lg font-bold text-white">{event.title}</h3>
                                    </div>

                                    {/* Tags */}
                                    <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-1">
                                        {event.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="pixel-text text-xs px-2 py-1 bg-[#4ade80]/90 text-black rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Event details */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <p className="pixel-text text-gray-300 text-sm mb-4 line-clamp-3">
                                        {event.description}
                                    </p>

                                    <div className="mt-auto space-y-2">
                                        {/* Date and time */}
                                        <div className="flex items-center">
                                            <FaCalendarAlt className="text-[#4ade80] mr-2 text-sm" />
                                            <span className="pixel-text text-gray-300 text-sm">{event.date}</span>
                                        </div>

                                        <div className="flex items-center">
                                            <FaRegClock className="text-[#4ade80] mr-2 text-sm" />
                                            <span className="pixel-text text-gray-300 text-sm">{event.time}</span>
                                        </div>

                                        <div className="flex items-center">
                                            <FaMapMarkerAlt className="text-[#4ade80] mr-2 text-sm" />
                                            <span className="pixel-text text-gray-300 text-sm">{event.venue}</span>
                                        </div>

                                        {/* Register button */}
                                        <motion.a
                                            href={event.registrationLink}
                                            className="mt-3 inline-flex items-center justify-center px-4 py-1.5 bg-[#4ade80] text-black pixel-text text-base rounded-full hover:bg-white transition-colors duration-300 group-hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaTicketAlt className="mr-1.5 text-sm" />
                                            Register Now
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Events Button (centered) */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="#"
                        className="inline-flex items-center justify-center px-6 py-2 border border-[#4ade80] text-[#4ade80] pixel-text text-lg rounded-full hover:bg-[#4ade80] hover:text-black transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Events
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>

            {/* Floating particles with pixelated shapes */}
            {[...Array(20)].map((_, i) => {
                const colors = ['bg-[#4ade80]', 'bg-cyan-400', 'bg-purple-400'];
                const color = colors[i % 3];
                const size = Math.random() * 3 + 1;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;

                // Some particles are squares (pixelated) instead of circles
                const isPixelated = i % 3 === 0;

                return (
                    <motion.div
                        key={i}
                        className={`absolute ${isPixelated ? '' : 'rounded-full'} ${color}`}
                        style={{
                            width: `${size * (isPixelated ? 2 : 1)}px`,
                            height: `${size * (isPixelated ? 2 : 1)}px`,
                            left: `${posX}%`,
                            top: `${posY}%`,
                            boxShadow: `0 0 ${size * 2}px ${size / 2}px ${color.replace('bg-', 'rgba(').replace('-400', ', 0.3)')}`
                        }}
                        animate={{
                            y: [0, (Math.random() - 0.5) * 100],
                            x: [0, (Math.random() - 0.5) * 50],
                            opacity: [0.2, 1, 0.2],
                            rotate: isPixelated ? [0, 90, 180, 270, 360] : 0
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: delay,
                            ease: "easeInOut"
                        }}
                    />
                );
            })}

            {/* Additional decorative elements */}
            <div className="absolute bottom-10 left-10 w-16 h-16 z-0 opacity-20">
                <div className="w-4 h-4 bg-purple-400 absolute top-0 left-0"></div>
                <div className="w-4 h-4 bg-purple-400 absolute top-0 right-0"></div>
                <div className="w-4 h-4 bg-purple-400 absolute bottom-0 left-0"></div>
                <div className="w-4 h-4 bg-purple-400 absolute bottom-0 right-0"></div>
                <div className="w-4 h-4 bg-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
        </section>
    );
};

export default Events;