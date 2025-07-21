import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import atlastLogo from "@/assets/atlast logo (png) (1).png";
import heroBackground from "@/assets/background_video1.mp4";
import ThemeToggle from "./ThemeToggle";
//import Example from "./Example";

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

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-screen-xl z-50 px-4 md:px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md">
        <div className="flex items-center justify-between w-full">
          {/* Logo + Name */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={atlastLogo}
                alt="ATLAST"
                className="h-10 w-auto object-contain"
                style={{ maxWidth: "120px" }}
              />
              <span className="text-xl md:text-2xl font-bold text-blue-500 tracking-wider">ATLAST</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 font-medium text-blue-400 text-sm lg:text-base">
            <Link to="why" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Why</Link>
            <Link to="how" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">How</Link>
            <Link to="what" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">What</Link>
            <Link to="spotlight" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Spotlight</Link>
            <Link to="contact" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Let's Connect</Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Revolution starts{" "}
            <br />
            with{" "}
            <span className="text-primary relative">
              One{" "}
              <span
                key={currentWord}
                className="absolute left-full ml-4 text-primary-glow animate-fade-in"
              >
                {words[currentWord]}
              </span>
            </span>
          </h1>

          {/* <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Building the future where life breathes cleaner, moves smarter, and lasts longer.
            Experience the power of hydrogen-powered mobility.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="why" smooth={true} duration={500}>
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                Discover Our Vision
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link to="what" smooth={true} duration={500}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              >
                <Zap className="mr-2 h-5 w-5" />
                See Innovation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;