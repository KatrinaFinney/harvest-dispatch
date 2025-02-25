"use client";

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PortalOverviewSection from "../components/PortalOverviewSection";
import BottomCTA from "../components/BottomCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PortalOverviewSection />
      <BottomCTA />
    </>
  );
}
