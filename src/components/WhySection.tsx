import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-primary dark:to-accent rounded-full blur-sm" />
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-primary dark:to-accent rounded-full animate-pulse" />
  </motion.div>
);

const WhySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-background dark:via-background dark:to-muted/20 relative overflow-hidden"
    >
      {/* Background + molecules */}
      {Array.from({ length: 12 }).map((_, i) => (
        <HydrogenMolecule
          key={i}
          delay={i * 0.8}
          x={`${10 + (i * 8) % 80}%`}
          y={`${70 + (i % 3) * 10}%`}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}
        >
          <h2 className="font-lovelo font-bold text-6xl lg:text-8xl mb-8 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-primary dark:via-accent dark:to-primary">
              Why{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-accent dark:to-primary">
              WE EXIST?
            </span>
          </h2>
        </motion.div>

        {/* Example text block (cleaned) */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.2 } }
          }}
          className="text-center space-y-6"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            We believe{" "}
            <span className="text-primary glow-blue">LIFE</span> is the rarest miracle
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 font-medium mt-2">
            Evolution demands courage to protect it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
