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
      <style>{`
        .glow-blue { color: rgb(59,130,246); text-shadow: 0 6px 18px rgba(59,130,246,0.14); }
        .glow-key { color: rgb(59,130,246); }
        @media (prefers-color-scheme: dark) {
          .glow-key { text-shadow: 0 8px 30px rgba(59,130,246,0.12); }
        }
      `}</style>
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

        {/* Main Dashboard-Style Content (modern dual-theme card) */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } },
          }}
        >
          {/* Modern Card */}
          <div className="relative rounded-2xl p-10 overflow-hidden bg-white shadow-md dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 dark:shadow-[0_20px_60px_rgba(59,130,246,0.12)] border border-transparent">
            {/* subtle decorative glow in dark mode */}
            <div className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-0" style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.06), transparent 25%)' }} />

            {/* HUD Dots (kept small and elegant) */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <motion.div className="w-3 h-3 bg-primary rounded-full" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.div className="w-3 h-3 bg-accent rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
            </div>

            {/* Main Text Content */}
            <div className="text-center space-y-6">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={controls} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } } }}>
                <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 leading-tight">
                  We believe <span className="text-5xl md:text-6xl lg:text-7xl inline-block ml-2 font-black text-primary glow-blue">LIFE</span> is the rarest miracle
                </p>
                <p className="text-lg md:text-xl text-muted-foreground/80 font-medium mt-2">
                  Evolution demands courage to protect it.
                </p>
              </motion.div>

              <motion.div className="max-w-4xl mx-auto text-left" initial={{ opacity: 0, x: 50 }} animate={controls} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 1.8 } } }}>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                  At <span className="font-bold text-foreground">ATLAST</span>, we're not just building machines. <span className="glow-key font-semibold">We are building a future where life breathes cleaner</span>, moves smarter, and <span className="glow-key font-semibold">lasts longer</span>.
                </p>
              </motion.div>
            </div>

            {/* Decorative Progress-Style Bar */}
            <motion.div className="mt-8 max-w-xl mx-auto h-4 bg-muted/20 rounded-full overflow-hidden" initial={{ scaleX: 0 }} animate={controls} variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.2, delay: 2 } } }}>
              <motion.div className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary" initial={{ width: 0 }} animate={{ width: "62%" }} transition={{ duration: 1.6, delay: 2.2, ease: 'easeOut' }} />
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