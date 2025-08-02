import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Timer } from "lucide-react";
import { FaBolt } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import productImage from "../assets/wynn-xp-red.png";

const specs = [
    {
        icon: MapPin,
        title: "Range",
        value: "250",
        unit: "km",
        description: "Extended journey capability",
        color: "from-green-400 to-emerald-500",
        bgColor: "from-green-400/10 to-emerald-500/10",
    },
    {
        icon: FaBolt,
        title: "Power",
        value: "20",
        unit: "kW",
        description: "High-performance output",
        color: "from-yellow-400 to-orange-500",
        bgColor: "from-yellow-400/10 to-orange-500/10",
    },
    {
        icon: GiGears,
        title: "Wheel Torque",
        value: "275",
        unit: "Nm",
        description: "Instant acceleration power",
        color: "from-rose-500 to-fuchsia-600",
        bgColor: "from-rose-500/10 to-fuchsia-600/10",
    },
    {
        icon: Timer,
        title: "Refuel Time",
        value: "<1.5",
        unit: "min",
        description: "Swift refueling and endless wandering",
        color: "from-cyan-400 to-sky-500",
        bgColor: "from-cyan-400/10 to-sky-500/10",
    },
];

const WhatSection_1 = () => {
    const [hoveredSpec, setHoveredSpec] = useState<string | null>(null);

    return (
        <div
            id="product"
            className="min-h-screen w-full bg-[--section-bg] dark:bg-[--background] flex flex-col justify-center"
        >
            {/* Title */}
            <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 lg:mb-16 text-center px-4 text-gray-800 dark:text-white"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                What We{" "}
                <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                    Build
                </motion.span>
            </motion.h2>

            {/* Layout */}
            <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-7xl mx-auto w-full">
                {/* Left - Specs */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 space-y-3 order-2 lg:order-1 max-w-lg lg:max-w-none">
                    {specs.map((spec) => {
                        const Icon = spec.icon;
                        const isHovered = hoveredSpec === spec.title;

                        return (
                            <motion.div
                                key={spec.title}
                                layout
                                onMouseEnter={() => setHoveredSpec(spec.title)}
                                onMouseLeave={() => setHoveredSpec(null)}
                                className={`overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${spec.bgColor}
                  shadow-md cursor-pointer transition-all duration-300 flex flex-col
                  ${isHovered ? "h-44 p-5" : "h-16 p-3"} justify-center`}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${spec.color} shadow-md flex-shrink-0`}
                                    >
                                        <Icon className="text-white w-5 h-5" />
                                    </div>
                                    <div className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {spec.title}
                                    </div>
                                </div>

                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="mt-4 pl-1"
                                    >
                                        <div
                                            className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${spec.color} mb-1`}
                                        >
                                            {spec.value} {spec.unit}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
                                            {spec.description}
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Right - Product Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center relative order-1 lg:order-2 min-h-[300px] lg:min-h-[450px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.1, y: 0 }}
                        transition={{ duration: 1.1, type: "spring" }}
                        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none font-extrabold"
                        style={{
                            fontSize: "clamp(3rem, 8vw, 8rem)",
                            letterSpacing: "0.02em",
                            color: "#0082a6",
                            zIndex: 0,
                            lineHeight: 1,
                            userSelect: "none",
                        }}
                    >
                        Atlast
                    </motion.div>

                    <motion.img
                        src={productImage}
                        alt="Wynn XP Red Scooter"
                        initial={{ opacity: 0, scale: 0.97, y: 18 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                        className="relative max-h-[400px] w-auto object-contain drop-shadow-2xl z-10"
                        style={{ filter: "drop-shadow(0 8px 44px #28b4ee56)" }}
                    />
                </div>
            </section>
        </div>
    );
};

export default WhatSection_1;
