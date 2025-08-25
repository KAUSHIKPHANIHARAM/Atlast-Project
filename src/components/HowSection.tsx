import React, { useEffect, useRef } from "react";
import { Atom, Lightbulb, Rocket } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

const HowSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const lineControls = useAnimation();
  const centerControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      lineControls.start("visible");
      centerControls.start("visible");
    }
  }, [isInView, controls, lineControls, centerControls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, damping: 20, stiffness: 100, duration: 0.8 },
    },
  };

  const pillars = [
    {
      icon: Atom,
      title: "Clean-Tech",
      highlight: "Powered by Green Hydrogen",
      description: "Net-zero emissions. Infinite possibilities",
      badge: "Zero Carbon Footprint",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Lightbulb,
      title: "Disruptive Engineering",
      highlight: "Radical & Frugal Thinking",
      description: "Fueling tomorrow with hydrogen technology",
      badge: "Bio-inspired design",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Rocket,
      title: "Bold Energy",
      highlight: "Young minds. Fresh perspectives",
      description: "Fearless thinking & Fueled by purpose",
      badge: "Purpose-Driven Innovation",
      color: "from-purple-500 to-pink-600",
    },
  ];
  const HydrogenMolecule = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
    <motion.div
      className="absolute w-3 h-3"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 0.6, 0],
        y: [0, -50, -100]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-primary to-accent rounded-full blur-sm" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
    </motion.div>
  );


  return (
    <section id="how" className="py-20 bg-section-gradient relative overflow-hidden">
      {/* Reusable Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20L80 20L80 80L20 80Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
              <circle cx="20" cy="20" r="2" fill="hsl(var(--accent))" opacity="0.5" />
              <circle cx="80" cy="80" r="2" fill="hsl(var(--primary))" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Section Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={sectionRef}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
        >
          <h2 className="font-lovelo text-4xl md:text-6xl font-bold mb-6 text-foreground">
            How We{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Innovate
            </motion.span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our three core pillars drive revolutionary change in sustainable mobility
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="group bg-white/5 dark:bg-slate-800/20 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-200/10 dark:border-slate-700/20 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />

                <div className="relative z-10">
                  <div className="mb-6 flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.div
                      className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <p className={`font-semibold text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r ${pillar.color}`}>
                      {pillar.highlight}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground">{pillar.description}</p>
                    <motion.div
                      className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm bg-gradient-to-r ${pillar.color} text-white shadow-sm`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {pillar.badge}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-64 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent to-primary"
            style={{ top: `${i * 40 + 20}px` }}
            animate={{
              x: [-100, 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2 + 2.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HowSection;
