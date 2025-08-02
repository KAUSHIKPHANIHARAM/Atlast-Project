import { motion, useAnimation, useInView } from "framer-motion";
import { Atom, Cpu, Droplets, Globe, Leaf, Shield, Wind, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import hydrogenBikeHero from "@/assets/hydrogenBikeHero.jpeg";
import hydrogenEnergy from "@/assets/hydrogenEnergy.jpeg";
import cleanFuture from "@/assets/cleanFuture.jpeg";

const WhySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const whyPoints = [
    {
      icon: Atom,
      title: "Zero Emission Technology",
      description: "Pure hydrogen fuel cells produce only water vapor, creating truly clean transportation with zero harmful emissions.",
      image: hydrogenEnergy,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      icon: Zap,
      title: "Instant Power & Range",
      description: "Experience 250 km range with lightning-fast 1.5-minute refueling. No more range anxiety or hours of charging.",
      image: hydrogenBikeHero,
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: Globe,
      title: "Planetary Impact",
      description: "Join the revolution that transforms urban mobility while preserving our planet for future generations.",
      image: cleanFuture,
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: Shield,
      title: "Future-Proof Investment",
      description: "Hydrogen infrastructure is rapidly expanding globally. Be an early adopter of tomorrow's standard technology.",
      image: hydrogenBikeHero,
      gradient: "from-secondary/20 to-accent/20"
    }
  ];

  const stats = [
    { value: "0g", label: "CO₂ Emissions", icon: Wind },
    { value: "250", label: "KM Range", icon: Zap },
    { value: "1.5min", label: "Refuel Time", icon: Droplets },
    { value: "15kW", label: "Peak Power", icon: Cpu }
  ];

  const HydrogenBubble = ({ delay }: { delay: number }) => (
    <motion.div
      className="absolute w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-60"
      style={{
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [-100, -800],
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  );

  return (
    <section id="why" className="min-h-screen bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating Energy Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <HydrogenBubble key={i} delay={i * 0.5} />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <motion.h2
            className="text-5xl lg:text-7xl font-bold mb-8"
            initial={{ scale: 0.8 }}
            animate={controls}
            variants={{
              hidden: { scale: 0.8 },
              visible: { scale: 1, transition: { duration: 0.8, delay: 0.2 } },
            }}
          >
            Why <span className="text-transparent bg-clip-text bg-gradient-primary"></span>?
          </motion.h2>

          <motion.div
            className="relative max-w-4xl mx-auto bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-xl p-8 rounded-3xl border border-primary/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } },
            }}
          >
            <p className="text-lg lg:text-2xl text-primary font-semibold mb-6 leading-relaxed">
              We believe LIFE is the rarest miracle - Evolution demands courage to protect it.

            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At ATLAST, we’re not just building machines. We are building a future where life breathes cleaner, moves smarter, and lasts longer!
            </p>
          </motion.div>
        </motion.div>
        
        {/* Main Content Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 1,
              },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          {whyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${point.gradient} rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500`}
                  animate={{
                    opacity: activeCard === index ? 1 : 0,
                  }}
                />

                <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/20 h-full overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={point.image}
                      alt={point.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center mb-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {point.title}
                      </h3>
                    </motion.div>

                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {point.description}
                    </p>

                    {/* Energy Flow Animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: activeCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.4 } },
          }}
        >

        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;