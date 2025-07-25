import React, { useEffect, useRef, useState } from "react";
import { Battery, Gauge, Power, MapPin, Timer, Heart, Leaf, Zap } from "lucide-react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { ImPower } from "react-icons/im";
import GlobalAnimatedBackground from "./GlobalAnimatedBackground";


const WhatSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [hoveredSpec, setHoveredSpec] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
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

  const specs = [
    {
      icon: MapPin,
      title: "Range",
      value: "250",
      unit: "km",
      description: "Extended journey capability",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-500/10 to-teal-600/10"
    },
    {
      icon: Gauge,
      title: "Power",
      value: "20",
      unit: "kW",
      description: "High-performance output",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-500/10 to-indigo-600/10"
    },
    {
      icon: Battery,
      title: "Wheel Torque",
      value: "275",
      unit: "Nm",
      description: "Instant acceleration power",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/10 to-pink-600/10"
    },
    {
      icon: Timer,
      title: "Refuel Time",
      value: "<1.5",
      unit: "min",
      description: "Swift refueling and endless wandering",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/10 to-red-600/10"
    }
  ];

  return (
    <section id="product" className="py-20 bg-section-gradient relative overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
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
            What We{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Build
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
            Revolutionary hydrogen fuel cell-powered Motorcycles engineered for the future of mobility
          </motion.p>
        </motion.div>

        {/* Product Specifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                className="group bg-white/5 dark:bg-slate-800/20 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/10 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", damping: 20, stiffness: 300 },
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredSpec(index)}
                onMouseLeave={() => setHoveredSpec(null)}
              >
                {/* Card Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${spec.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                      animate={{
                        boxShadow: hoveredSpec === index
                          ? "0 8px 30px rgba(59, 130, 246, 0.4)"
                          : "0 4px 20px rgba(59, 130, 246, 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <motion.div
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
                      animate={{
                        scale: hoveredSpec === index ? 1.1 : 1,
                      }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{
                          scale: hoveredSpec === index ? [1, 1.5, 1] : 1,
                        }}
                        transition={{
                          duration: 1,
                          repeat: hoveredSpec === index ? Infinity : 0,
                        }}
                      />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 transition-all duration-300">
                    {spec.title}
                  </h3>

                  <div className="mb-3">
                    <motion.span
                      className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${spec.color}`}
                      animate={{
                        scale: hoveredSpec === index ? 1.05 : 1,
                      }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                      {spec.value}
                    </motion.span>
                    <span className="text-lg text-muted-foreground ml-1">{spec.unit}</span>
                  </div>

                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {spec.description}
                  </p>

                  {/* Animated Progress Bar */}
                  {/* <div className="mt-4 w-full bg-muted/20 rounded-full h-1 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${spec.color} rounded-full`}
                      initial={{ width: "0%" }}
                      animate={{
                        width: hoveredSpec === index ? "100%" : "60%",
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
export default WhatSection;