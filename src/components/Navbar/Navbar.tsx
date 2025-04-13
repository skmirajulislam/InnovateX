'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
    name: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    // Add new state for star properties
    const [starProps, setStarProps] = useState<Array<{
        width: number;
        height: number;
        top: number;
        left: number;
        opacity: number;
    }>>([]);

    // Track scroll position for navbar transparency effect
    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Generate random star properties once on mount
    useEffect(() => {
        const newStarProps = [...Array(8)].map(() => ({
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            top: Math.random() * 100,
            left: Math.random() * 100,
            opacity: Math.random() * 0.5
        }));
        setStarProps(newStarProps);
    }, []);

    // Navigation links
    const navLinks: NavLink[] = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Team', href: '#team' },
        { name: 'Community Offers', href: '#community-offers' }
    ];

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-green-900/20' : 'bg-transparent'
                }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/" className="relative">
                            {/* Logo with glow effect */}
                            <div className="relative">
                                <Image
                                    src="https://utfs.io/f/or07poavtUuSWnnfoO2xpEydtHq2Bs7mwTMRNv64LXrP1aI3"
                                    alt="InnovateX Logo"
                                    width={80} // Adjust width as needed
                                    height={80} // Adjust height as needed
                                    className="h-12 w-auto sm:h-20 relative z-10"
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link: NavLink) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="pixel-text relative text-white hover:text-[#4ade80] text-lg font-medium group"
                                whileHover={{ scale: 1.1 }}
                            >
                                {link.name}
                                {/* Animated underline on hover */}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full"
                                    transition={{ duration: 0.3 }}
                                    layoutId={`underline-${link.name}`}
                                />
                                {/* Subtle star particle effect on hover */}
                                <motion.span
                                    className="absolute -top-1 left-1/2 w-1 h-1 rounded-full bg-[#4ade80]"
                                    initial={{ opacity: 0 }}
                                    whileHover={{
                                        opacity: [0, 1, 0],
                                        top: ['-4px', '-12px'],
                                        left: ['50%', `${Math.random() * 100}%`]
                                    }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />
                            </motion.a>
                        ))}

                        {/* Contact Button with special effect */}
                        <motion.a
                            href="https://chat.whatsapp.com/GOrv9gInAU7D4jIq25c2dC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pixel-text relative overflow-hidden bg-black bg-opacity-40 border border-[#4ade80] text-[#4ade80] rounded-full px-5 py-2 flex items-center group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Connect With Us</span>
                            {/* Animated hover effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#4ade80]/20 to-cyan-400/20"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                            {/* Animated dot */}
                            <motion.div
                                className="absolute right-3 w-1.5 h-1.5 bg-[#4ade80] rounded-full z-10"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white p-2 rounded-md"
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="relative w-6 h-5 flex flex-col justify-between">
                                <motion.span
                                    className="w-full h-0.5 bg-[#4ade80] rounded-full"
                                    animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-[#4ade80] rounded-full"
                                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-[#4ade80] rounded-full"
                                    animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <motion.div
                className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, height: 0 }}
                animate={mobileMenuOpen ?
                    { opacity: 1, height: 'auto', transition: { duration: 0.3 } } :
                    { opacity: 0, height: 0, transition: { duration: 0.3 } }
                }
            >
                <div className="px-2 pt-2 pb-4 space-y-1 bg-black/90 backdrop-blur-md border-t border-gray-800">
                    {navLinks.map((link: NavLink, index: number) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="pixel-text block px-3 py-3 text-white hover:text-[#4ade80] font-medium relative overflow-hidden"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex items-center">
                                <motion.div
                                    className="mr-2 w-1 h-1 bg-[#4ade80] rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                                />
                                {link.name}
                            </div>
                            {/* Animated underline */}
                            <motion.div
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ade80]"
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}

                    {/* Mobile contact button */}
                    <motion.a
                        href="https://chat.whatsapp.com/GOrv9gInAU7D4jIq25c2dC"
                        className="pixel-text block w-full text-center mt-3 bg-[#4ade80]/10 border border-[#4ade80] text-[#4ade80] rounded-md px-3 py-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Connect With Us
                    </motion.a>
                </div>
            </motion.div>

            {/* Decorative space elements */}
            <div className="hidden md:block">
                {/* Random stars in navbar */}
                {starProps.map((props, i: number) => (
                    <motion.div
                        key={`nav-star-${i}`}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${props.width}px`,
                            height: `${props.height}px`,
                            top: `${props.top}%`,
                            left: `${props.left}%`,
                            opacity: props.opacity
                        }}
                        animate={{
                            opacity: [0.1, 0.5, 0.1],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 2 + i,
                            repeat: Infinity,
                            delay: i * 0.3
                        }}
                    />
                ))}

                {/* Top green glow */}
                <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-[#4ade80]/10 blur-lg"></div>
            </div>
        </motion.nav>
    );
};

export default Navbar;