'use client';

import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import About from '../components/About/About';
import Team from '../components/Team/Team';
import Colleges from '../components/College/Colleges';
import Communities from '../components/Community/Communities';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Companies from '../components/Company/Companies';
import RobotSection from '../components/Robot/RobotSection';
import CommunityOffers from '../components/Community/CommunityOffers';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <About />
      <CommunityOffers />
      <Team />
      <Colleges />
      <Companies />
      <Communities />
      <RobotSection />
      <Footer />
    </div>
  );
}
