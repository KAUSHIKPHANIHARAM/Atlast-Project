import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const WhySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Hydrogen molecules animation
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
    <section id="why" className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden" ref={sectionRef}>
      {/* Technical Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Circuit Board Pattern */}
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
      </div>

      {/* Floating Hydrogen Molecules */}
      {Array.from({ length: 12 }).map((_, i) => (
        <HydrogenMolecule
          key={i}
          delay={i * 0.8}
          x={`${10 + (i * 8) % 80}%`}
          y={`${70 + (i % 3) * 10}%`}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Bike Silhouette Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >

          {/* Title with Speedometer Style */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
            }}
          >
            <h2 className="text-6xl lg:text-8xl font-bold mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Why
              </span>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                ?
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Main Dashboard-Style Content */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } },
          }}
        >
          {/* Dashboard Panel */}
          <div className="relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-2xl rounded-3xl border-2 border-primary/20 p-12 overflow-hidden">
            {/* Dashboard Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

            {/* HUD Elements */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <motion.div
                className="w-3 h-3 bg-primary rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-3 h-3 bg-accent rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>

            {/* Main Text Content */}
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } },
                }}
              >
                <p className="text-2xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                  We believe{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                    LIFE
                  </span>{" "}
                  is the rarest miracle
                </p>
                <p className="text-xl lg:text-2xl text-accent font-semibold mb-8">
                  Evolution demands courage to protect it.
                </p>
              </motion.div>

              <motion.div
                className="border-l-4 border-primary/60 pl-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 1.8 } },
                }}
              >
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-left">
                  At{" "}
                  <span className="text-primary font-bold">ATLAST</span>, we're not just building machines.{" "}
                  <span className="text-accent font-semibold">
                    We are building a future where life breathes cleaner, moves smarter, and lasts longer!
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Bottom Energy Bar */}
            <motion.div
              className="mt-12 h-3 bg-muted/20 rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={controls}
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 1.5, delay: 2 } },
              }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.5, delay: 2.5, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Speed Lines Effect */}
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
      </div>
    </section>
  );
};

export default WhySection;