import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import WhatSection from "@/components/WhatSection";
import ContactSection from "@/components/ContactSection";
import Spotlight from "@/components/Spotlight";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhySection />
      <HowSection />
      <WhatSection />
      <Spotlight></Spotlight>
      <ContactSection />
    </div>
  );
};

export default Index;
