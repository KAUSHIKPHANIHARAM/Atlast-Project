import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { Heart, Leaf, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
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

  const missions = [
    {
      icon: Heart,
      title: "Life First",
      description: "Every innovation starts with respect for life and our planet's precious ecosystems.",
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-500/10 to-pink-600/10"
    },
    {
      icon: Leaf,
      title: "Clean Future",
      description: "Building sustainable mobility solutions that protect our environment for generations.",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-500/10 to-emerald-600/10"
    },
    {
      icon: Zap,
      title: "Smart Innovation",
      description: "Pioneering technology that makes transportation more intelligent and efficient.",
      color: "from-yellow-500 to-orange-600",
      bgColor: "from-yellow-500/10 to-orange-600/10"
    }
  ];

  return (
    <section id="why" className="py-20 bg-section-gradient relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
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
            Why{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-emerald-600"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >

            </motion.span>
            ?
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              className="relative bg-white/5 dark:bg-slate-800/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/10 dark:border-slate-700/20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } },
              }}
            >
              <motion.p
                className="text-2xl md:text-3xl text-blue-900 font-bold leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                "We believe LIFE is the rarest miracle - Evolution demands courage to protect it."
              </motion.p>

            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, delay: 0.6 } },
              }}
            >
              At <span className="text-primary font-semibold">ATLAST</span>, we're not just building machines.
              We are building a future where life breathes cleaner, moves smarter, and lasts longer!
            </motion.p>
          </div>
        </motion.div>

        {/* Mission Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-900 "
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={mission.title}
                className="group bg-white/5 dark:bg-slate-800/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/10 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", damping: 20, stiffness: 300 },
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${mission.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${mission.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 },
                    }}
                    animate={{
                      boxShadow: hoveredCard === index
                        ? "0 8px 30px rgba(59, 130, 246, 0.4)"
                        : "0 4px 20px rgba(59, 130, 246, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                      }}
                      transition={{
                        duration: hoveredCard === index ? 2 : 0,
                        repeat: hoveredCard === index ? Infinity : 0,
                        ease: "linear",
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-emerald-600 transition-all duration-300">
                    {mission.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {mission.description}
                  </p>

                  {/* Animated Bottom Border */}
                  {/* <div className="mt-6 w-full h-0.5 bg-muted/20 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${mission.color} rounded-full`}
                      initial={{ width: "0%" }}
                      animate={{
                        width: hoveredCard === index ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default WhySection;