
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import LegalSection from "@/components/sections/LegalSection";

const Index = () => {
  // This state is no longer used directly but kept for potential future functionality
  const [isPlaying] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <LegalSection />

      <Footer />
    </div>
  );
};

export default Index;
