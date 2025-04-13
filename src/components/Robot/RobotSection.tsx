'use client';

import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

interface Star {
    id: number;
    size: number;
    left: number;
    top: number;
    opacity: number;
}

const RobotSection: React.FC = () => {
    // State for stars to fix hydration issues
    const [stars, setStars] = useState<Star[]>([]);

    // Create a ref to store the Spline scene and objects for interactive manipulation
    const splineScene = useRef<Application | null>(null);

    // Generate stars on client-side only
    useEffect(() => {
        const newStars: Star[] = [];
        for (let i = 0; i < 20; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 1 + 0.5,
                left: Math.random() * 100,
                top: Math.random() * 100,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
        setStars(newStars);
    }, []);

    // This function is called when the Spline scene is loaded
    function onLoad(splineApp: Application) {
        // Save the spline application instance for later use
        splineScene.current = splineApp;
    }

    return (
        <section
            className="relative w-full bg-black overflow-hidden"
            style={{
                height: 'clamp(500px, 80vh, 900px)', // Increased height
                marginBottom: '-50px' // Reduced overlap with footer
            }}
        >
            {/* Minimal background elements - now using pre-generated values */}
            <div className="absolute inset-0 z-0">
                {stars.map((star) => (
                    <div
                        key={`particle-${star.id}`}
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
            </div>

            {/* Robot container positioned at bottom */}
            <div
                className="relative z-10 w-full h-full flex items-end justify-center"
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}
            >
                {/* Spline component wrapper */}
                <div
                    className="w-full h-full relative"
                    style={{
                        position: 'absolute',
                        bottom: '-100px', // Position from bottom instead of using transform
                        left: 0,
                        right: 0
                    }}
                >
                    <Spline
                        scene="https://prod.spline.design/ggzGEh087T2SkD40/scene.splinecode"
                        onLoad={onLoad}
                        style={{
                            width: '100%',
                            height: '100%',
                            background: 'transparent'
                        } as React.CSSProperties}
                        data-style={{
                            '--progress-color': '#4ade80',
                            '--progress-background': 'rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default RobotSection;