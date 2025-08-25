import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import WhatSection from "@/components/WhatSection";
import ContactSection from "@/components/ContactSection";
import WhatSection2 from "@/components/WhatSection2";
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

      {/* <WhatSection_1 />  */}
      < WhatSection2 />

      <Spotlight></Spotlight>

      <ContactSection />
    </div>
  );
};

export default Index;
