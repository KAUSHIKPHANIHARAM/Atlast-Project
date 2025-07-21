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
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const lineVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  const centerPointVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 1,
      },
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
      delay: 0,
    },
    {
      icon: Lightbulb,
      title: "Relentless Innovation",
      highlight: "Engineered to defy limits",
      description: "Designed from Nature. Effortless & thrilling experience",
      badge: "Bio-Inspired Engineering",
      color: "from-blue-500 to-indigo-600",
      delay: 0.2,
    },
    {
      icon: Rocket,
      title: "Bold Energy",
      highlight: "Young minds. Fresh perspectives",
      description: "Fearless thinking & Fueled by purpose",
      badge: "Purpose-Driven Innovation",
      color: "from-purple-500 to-pink-600",
      delay: 0.4,
    },
  ];

  return (
    <section id="how" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={sectionRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 text-foreground"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How We{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Innovate
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
            }}
          >
            Our three core pillars drive revolutionary change in sustainable mobility
          </motion.p>
        </motion.div>

        {/* Connected Pillars with Enhanced Animation */}
        <div className="relative">
          {/* SVG Connection Lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              <motion.path
                d="M200 150 L400 150"
                stroke="url(#gradient1)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                initial="hidden"
                animate={lineControls}
                variants={lineVariants}
              />
              <motion.path
                d="M600 150 L400 150"
                stroke="url(#gradient1)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                initial="hidden"
                animate={lineControls}
                variants={lineVariants}
                style={{ transition: { delay: 0.3 } }}
              />
              <motion.path
                d="M300 250 L400 150"
                stroke="url(#gradient2)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                initial="hidden"
                animate={lineControls}
                variants={lineVariants}
                style={{ transition: { delay: 0.6 } }}
              />
              <motion.path
                d="M500 250 L400 150"
                stroke="url(#gradient2)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                initial="hidden"
                animate={lineControls}
                variants={lineVariants}
                style={{ transition: { delay: 0.9 } }}
              />

              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Enhanced Central Connection Point */}
            <motion.div
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial="hidden"
              animate={centerControls}
              variants={centerPointVariants}
            >
              <motion.div
                className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", damping: 20, stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Card Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 },
                        }}
                        animate={{
                          boxShadow: [
                            "0 4px 20px rgba(59, 130, 246, 0.3)",
                            "0 8px 30px rgba(139, 92, 246, 0.4)",
                            "0 4px 20px rgba(59, 130, 246, 0.3)",
                          ],
                        }}
                        transition={{
                          boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {pillar.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <motion.p
                        className={`font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r ${pillar.color}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                      >
                        {pillar.highlight}
                      </motion.p>
                      <p className="text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                      <motion.div
                        className={`inline-block px-3 py-1 rounded-full text-sm bg-gradient-to-r ${pillar.color} text-white shadow-sm`}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
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
      </div>
    </section>
  );
};
export default HowSection;