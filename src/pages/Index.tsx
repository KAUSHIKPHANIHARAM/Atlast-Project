import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import WhatSection from "@/components/WhatSection";
import ContactSection from "@/components/ContactSection";
import Spotlight from "@/components/Spotlight";
import Navbar from "@/components/Navbar";
import WhatSection_1 from "@/components/WhatSection_1";


const Index = () => {
  return (
    <div className="min-h-screen">

      <Navbar></Navbar>

      <HeroSection />

      <WhySection />

      <HowSection />

      {/* <WhatSection /> */}

      <WhatSection_1 />

      <Spotlight></Spotlight>

      <ContactSection />
    </div>
  );
};

export default Index;
