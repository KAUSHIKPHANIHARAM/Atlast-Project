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
          {/* Realistic Animated Bike */}
          <motion.div
            className="relative mx-auto mb-12 w-full max-w-5xl h-40"
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1.5, delay: 0.3 }
              },
            }}
          >
            {/* Bike Container with Subtle Bounce */}
            <motion.div
              animate={{
                y: [0, -3, 0],
                rotate: [0, 0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 1000 250" xmlns="http://www.w3.org/2000/svg">
                {/* Main Frame - More realistic motorcycle shape */}
                <motion.path
                  d="M150 180 L250 180 L280 140 L350 130 L420 130 L480 140 L580 140 L650 150 L750 180 L850 180"
                  stroke="url(#bikeGradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, delay: 0.8 }}
                />

                {/* Motorcycle Tank - More prominent */}
                <motion.rect
                  x="320"
                  y="115"
                  width="180"
                  height="35"
                  rx="17"
                  fill="url(#tankGradient)"
                  stroke="url(#bikeGradient)"
                  strokeWidth="3"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.8 }}
                />

                {/* H2 Label on Tank with glow effect */}
                <motion.text
                  x="410"
                  y="138"
                  textAnchor="middle"
                  className="fill-primary-foreground font-bold text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  H₂
                </motion.text>

                {/* Seat */}
                <motion.ellipse
                  cx="380"
                  cy="110"
                  rx="40"
                  ry="8"
                  fill="url(#seatGradient)"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                />

                {/* Handlebars - More detailed */}
                <motion.path
                  d="M280 140 L300 120 L320 115 L340 115"
                  stroke="url(#bikeGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                />

                {/* Handlebar grips */}
                <motion.circle
                  cx="320"
                  cy="115"
                  r="4"
                  fill="url(#gripGradient)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.8 }}
                />
                <motion.circle
                  cx="340"
                  cy="115"
                  r="4"
                  fill="url(#gripGradient)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.9 }}
                />

                {/* Front Fork */}
                <motion.path
                  d="M280 140 L200 160 L180 180"
                  stroke="url(#bikeGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />

                {/* Rear Swing Arm */}
                <motion.path
                  d="M580 140 L720 160 L750 180"
                  stroke="url(#bikeGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.7 }}
                />

                {/* Front Wheel - Realistic with continuous rotation */}
                <motion.g>
                  <motion.circle
                    cx="180"
                    cy="180"
                    r="45"
                    stroke="url(#wheelGradient)"
                    strokeWidth="8"
                    fill="none"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />

                  {/* Rotating Spokes */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ originX: 180, originY: 180 }}
                  >
                    <line x1="135" y1="180" x2="225" y2="180" stroke="url(#spokeGradient)" strokeWidth="3" />
                    <line x1="180" y1="135" x2="180" y2="225" stroke="url(#spokeGradient)" strokeWidth="3" />
                    <line x1="148" y1="148" x2="212" y2="212" stroke="url(#spokeGradient)" strokeWidth="2" />
                    <line x1="212" y1="148" x2="148" y2="212" stroke="url(#spokeGradient)" strokeWidth="2" />
                  </motion.g>

                  {/* Wheel Hub */}
                  <motion.circle
                    cx="180"
                    cy="180"
                    r="12"
                    fill="url(#hubGradient)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  />
                </motion.g>

                {/* Rear Wheel - Realistic with continuous rotation */}
                <motion.g>
                  <motion.circle
                    cx="750"
                    cy="180"
                    r="45"
                    stroke="url(#wheelGradient)"
                    strokeWidth="8"
                    fill="none"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                  />

                  {/* Rotating Spokes */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                    style={{ originX: 750, originY: 180 }}
                  >
                    <line x1="705" y1="180" x2="795" y2="180" stroke="url(#spokeGradient)" strokeWidth="3" />
                    <line x1="750" y1="135" x2="750" y2="225" stroke="url(#spokeGradient)" strokeWidth="3" />
                    <line x1="718" y1="148" x2="782" y2="212" stroke="url(#spokeGradient)" strokeWidth="2" />
                    <line x1="782" y1="148" x2="718" y2="212" stroke="url(#spokeGradient)" strokeWidth="2" />
                  </motion.g>

                  {/* Wheel Hub */}
                  <motion.circle
                    cx="750"
                    cy="180"
                    r="12"
                    fill="url(#hubGradient)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                  />
                </motion.g>

                {/* Exhaust Pipe (Hydrogen Outlet) */}
                <motion.path
                  d="M720 155 L780 150 L800 145"
                  stroke="url(#exhaustGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 2.6 }}
                />

                {/* Hydrogen Vapor Animation */}
                <motion.g>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={800 + i * 15}
                      cy={145}
                      r={2 + i * 0.5}
                      fill="url(#vaporGradient)"
                      animate={{
                        x: [0, 30],
                        opacity: [0.8, 0],
                        scale: [1, 1.5]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3 + 3,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </motion.g>

                {/* Energy Flow Lines */}
                <motion.path
                  d="M410 132 Q450 125 480 140"
                  stroke="url(#energyGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, -10] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 3 }}
                />

                <defs>
                  <linearGradient id="bikeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>

                  <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>

                  <linearGradient id="spokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                  </linearGradient>

                  <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </radialGradient>

                  <linearGradient id="tankGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>

                  <linearGradient id="seatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--muted))" />
                    <stop offset="100%" stopColor="hsl(var(--muted-foreground))" />
                  </linearGradient>

                  <linearGradient id="gripGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>

                  <linearGradient id="exhaustGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--muted-foreground))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>

                  <radialGradient id="vaporGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                  </radialGradient>

                  <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

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