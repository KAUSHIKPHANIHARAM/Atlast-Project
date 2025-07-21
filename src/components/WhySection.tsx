import React, { useRef } from "react";
import { Heart, Leaf, Zap } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

const WhySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const iconFloatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const missionCards = [
    {
      icon: Heart,
      title: "Life First",
      description: "Every innovation starts with respect for life and our planet's precious ecosystems.",
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-500/10 to-pink-500/10",
    },
    {
      icon: Leaf,
      title: "Clean Future",
      description: "Building sustainable mobility solutions that protect our environment for generations.",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-500/10 to-green-500/10",
    },
    {
      icon: Zap,
      title: "Smart Innovation",
      description: "Pioneering technology that makes transportation more intelligent and efficient.",
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-500/10 to-purple-500/10",
    },
  ];

  return (
    <section
      id="why"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-foreground"
            variants={itemVariants}
          >
            Why{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ATLAST
            </motion.span>
            ?
          </motion.h2>

          <motion.div
            className="max-w-5xl mx-auto space-y-8 sm:space-y-12"
            variants={itemVariants}
          >


            {/* Main Message */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 font-bold leading-relaxed px-4"
              variants={itemVariants}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }
              }}
            >
              We believe LIFE is the rarest miracle - Evolution demands courage to protect it.
            </motion.p>

            {/* Animated Divider */}
            <motion.div
              className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full"
              variants={itemVariants}
              animate={{
                scaleX: [1, 1.2, 1],
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                scaleX: { duration: 2, repeat: Infinity },
                backgroundPosition: { duration: 3, repeat: Infinity },
              }}
            />

            {/* Secondary Message */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed px-4 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              At ATLAST, we're not just building machines. We are building a future where life breathes cleaner, moves smarter, and lasts longer!
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Enhanced Mission Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {missionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", damping: 20, stiffness: 300 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                      animate={{
                        x: [0, Math.random() * 200 - 100],
                        y: [0, Math.random() * 200 - 100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 8 + 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Enhanced Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                    animate={{
                      boxShadow: [
                        "0 4px 20px rgba(59, 130, 246, 0.2)",
                        "0 8px 30px rgba(139, 92, 246, 0.3)",
                        "0 4px 20px rgba(59, 130, 246, 0.2)",
                      ],
                    }}
                    transition={{
                      boxShadow: { duration: 4, repeat: Infinity, delay: index * 0.5 },
                    }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {card.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    {card.description}
                  </motion.p>

                  {/* Animated Progress Bar */}
                  <motion.div
                    className="mt-4 sm:mt-6 w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-full h-1"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${card.color} h-1 rounded-full`}
                      initial={{ width: 0 }}
                      whileHover={{
                        width: "100%",
                        transition: { duration: 1, ease: "easeInOut" },
                      }}
                    />
                  </motion.div>
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
// import { Heart, Leaf, Zap } from "lucide-react";

// const WhySection = () => {
//   return (
//     <section id="why" className="py-12 sm:py-16 md:py-20 bg-gradient-dark">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 sm:mb-16 animate-fade-in">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-foreground">
//             Why <span className="text-primary">ATLAST</span>?
//           </h2>

//           <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
//             <div className="flex items-center justify-center mb-4 sm:mb-6 space-x-2 sm:space-x-4">
//               <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
//               <Leaf className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
//               <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
//             </div>

//             <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold leading-relaxed px-2">
//               We believe LIFE is the rarest miracle - Evolution demands courage to protect it.
//             </p>

//             <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-primary mx-auto"></div>

//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed px-2">
//               At ATLAST, we're not just building machines. We are building a future where life breathes cleaner, moves smarter, and lasts longer!
//             </p>
//           </div>
//         </div>

//         {/* Video Animation Section */}
//         {/* <div className="flex justify-center mb-12 sm:mb-16">
//           <div className="relative w-full max-w-4xl px-2 sm:px-0">
//             <video
//               className="w-full h-auto rounded-xl sm:rounded-2xl shadow-glow border border-border"
//               autoPlay
//               muted
//               loop
//               playsInline
//             >
//               <source src="/your-video.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl sm:rounded-2xl pointer-events-none"></div>
//           </div>
//         </div> */}

//         {/* Mission Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
//           <div className="bg-gradient-card p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
//             <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
//             <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Life First</h3>
//             <p className="text-sm sm:text-base text-muted-foreground">
//               Every innovation starts with respect for life and our planet's precious ecosystems.
//             </p>
//           </div>

//           <div className="bg-gradient-card p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
//             <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
//             <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Clean Future</h3>
//             <p className="text-sm sm:text-base text-muted-foreground">
//               Building sustainable mobility solutions that protect our environment for generations.
//             </p>
//           </div>

//           <div className="bg-gradient-card p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
//             <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
//             <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Smart Innovation</h3>
//             <p className="text-sm sm:text-base text-muted-foreground">
//               Pioneering technology that makes transportation more intelligent and efficient.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default WhySection;