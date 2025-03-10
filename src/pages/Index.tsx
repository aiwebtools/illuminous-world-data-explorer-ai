
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import LegalSection from "@/components/sections/LegalSection";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isPlaying] = useState(true);
  const isMobile = useIsMobile();
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  // Optimize for mobile - preload critical sections first
  const [loadSecondaryContent, setLoadSecondaryContent] = useState(!isMobile);
  
  useEffect(() => {
    if (!loadSecondaryContent) {
      // Delay loading non-critical sections on mobile
      const timer = setTimeout(() => {
        setLoadSecondaryContent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [loadSecondaryContent]);

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAgreed = localStorage.getItem("illuminousDisclaimerAgreed");
    
    if (!hasAgreed) {
      // If not, show the disclaimer
      setShowDisclaimer(true);
    }
  }, []);

  const handleAgreeDisclaimer = () => {
    // Save agreement in localStorage
    localStorage.setItem("illuminousDisclaimerAgreed", "true");
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {showDisclaimer && <DisclaimerPopup onAgree={handleAgreeDisclaimer} />}
      
      <Header />
      
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      
      {/* Load these sections with a delay on mobile for better initial performance */}
      {loadSecondaryContent && (
        <>
          <ProcessSection />
          <TestimonialsSection />
          <FaqSection />
          <LegalSection />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Index;
