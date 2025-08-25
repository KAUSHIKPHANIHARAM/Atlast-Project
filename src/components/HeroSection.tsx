import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import heroBackground from "@/assets/background_video1.mp4";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Idea", "Step", "Atom", "Electron"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={heroBackground}
      >
        <source src={heroBackground} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />

      {/* Content */}
      {/* <div className="relative z-10 w-full max-w-4xl ml-4 sm:ml-8 px-4 sm:px-6 pt-20 sm:pt-16"> */}
      <div className="font-impact relative z-10 w-full max-w-1xl ml-2 sm:ml-2 px-16 sm:px-1000 pt-20 sm:pt-40">
        <div className="animate-fade-in">
          <h1 className="text-2xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-7xl xl:text-7xl font-bold mb-4 sm:mb-4 leading-tight">
            Revolution starts{" "}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            with{" "}
            <span className="underline">One</span><span>{" "}</span>
            <span className="text-primary relative inline-block">
              <Typewriter
                words={['Idea', 'Step', 'Atom', 'Electron']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1000}
              />

              {/* <span
                key={currentWord}
                className="absolute left-full ml-2 sm:ml-4 text-primary-glow animate-fade-in whitespace-nowrap"
              >
                {words[currentWord]}
              </span> */}
            </span>
          </h1>

          {/* <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Building the future where life breathes cleaner, moves smarter, and lasts longer.
            <span className="hidden sm:inline"> Experience the power of hydrogen-powered mobility.</span>
          </p> */}

          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link to="why" smooth={true} duration={500}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              >
                Discover Our Vision
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>

            <Link to="what" smooth={true} duration={500}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              >
                <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                See Innovation
              </Button>
            </Link>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <Link to="why" smooth={true} duration={600} offset={-50}>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default HeroSection;