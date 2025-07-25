import { motion } from "framer-motion";

export default function GlobalAnimatedBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Blob 1 */}
            <motion.div
                className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Blob 2 */}
            <motion.div
                className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -60, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
            />
            {/* Blob 3 */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
}
