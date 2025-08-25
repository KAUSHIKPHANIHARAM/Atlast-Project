import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Timer } from "lucide-react";
import { FaBolt } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import productImage from "../assets/wynn-xp-red.png";
import { Icon } from "leaflet";

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

const WhatSection2 = () => {
    const [hoveredSpec, setHoveredSpec] = useState<string | null>(null);

    return (
        <div
            id="product"
            className="relative min-h-screen w-full bg-[--section-bg] dark:bg-[--background] flex flex-col justify-center overflow-hidden"
        >
            {/* Title */}
            <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 lg:mb-16 text-center px-4 text-gray-800 dark:text-white"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                What We{" "}
                <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% auto" }}
                >
                    Build
                </motion.span>
            </motion.h2>

            <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 max-w-7xl mx-auto w-full">
                {/* Left - Grid Specs */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-6 z-10 order-2 lg:order-1">
                    {specs.map((spec) => {
                        const Icon = spec.icon; // ✅ this makes it a React component
                        return (
                            <motion.div
                                key={spec.title}
                                initial={{ height: "100px" }}
                                whileHover={{ height: "200px", scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                                className={`
        relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${spec.bgColor}
        cursor-pointer transition-all duration-300 flex flex-col p-5 shadow-md
      `}
                            >
                                {/* Top Row (Icon + Title) */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${spec.color} shadow-md flex-shrink-0`}
                                    >
                                        <Icon className="text-white w-6 h-6" /> {/* ✅ works now */}
                                    </div>
                                    <div className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {spec.title}
                                    </div>
                                </div>

                                {/* Hover Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 pl-1"
                                >
                                    <div
                                        className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${spec.color} mb-1`}
                                    >
                                        {spec.value} {spec.unit}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300 max-w-xs leading-snug">
                                        {spec.description}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}


                </div>

                {/* Right - Product Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center relative order-1 lg:order-2 min-h-[320px] lg:min-h-[480px]">
                    <motion.img
                        src={productImage}
                        alt="Wynn XP Red Scooter"
                        initial={{ opacity: 0, scale: 0.97, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.9, type: "spring", stiffness: 120 }}
                        viewport={{ once: true }}
                        className="relative max-h-[420px] w-auto object-contain z-10"
                        style={{ filter: "drop-shadow(0 8px 44px #28b4ee56)" }}
                    />
                </div>
            </section>
        </div>
    );
};

export default WhatSection2;
