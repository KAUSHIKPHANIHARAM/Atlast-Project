import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Timer } from "lucide-react";
import { FaBolt } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
// import your product image
import productImage from "../assets/wynn-xp-red.png";

// Your specs data
const specs = [
  {
    icon: MapPin,
    title: "Range",
    value: "250",
    unit: "km",
    description: "Extended journey capability",
    color: "from-green-400 to-emerald-500",         // Brighter green
    bgColor: "from-green-400/10 to-emerald-500/10",
  },
  {
    icon: FaBolt,
    title: "Power",
    value: "20",
    unit: "kW",
    description: "High-performance output",
    color: "from-yellow-400 to-orange-500",         // High-energy electric vibe
    bgColor: "from-yellow-400/10 to-orange-500/10",
  },
  {
    icon: GiGears,
    title: "Wheel Torque",
    value: "275",
    unit: "Nm",
    description: "Instant acceleration power",
    color: "from-rose-500 to-fuchsia-600",          // Bold for torque emphasis
    bgColor: "from-rose-500/10 to-fuchsia-600/10",
  },
  {
    icon: Timer,
    title: "Refuel Time",
    value: "<1.5",
    unit: "min",
    description: "Swift refueling and endless wandering",
    color: "from-cyan-400 to-sky-500",              // Clean and futuristic
    bgColor: "from-cyan-400/10 to-sky-500/10",
  },
];


export default function WhatWeBuildHero() {
  const [selected, setSelected] = useState(specs[0].title);
  const selectedSpec = specs.find((s) => s.title === selected);

  return (
    <div id="product" className="min-h-screen bg-section-gradient flex flex-col justify-center">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl text-center md:text-6xl font-bold mb-8 text-foreground"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        What We{" "}
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
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

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20 lg:px-40 pt-8 md:pt-16 relative" style={{ minHeight: "540px" }}>
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-10 z-10">
          {/* Navigation Bar for Specs */}
          <nav className="flex gap-4 md:gap-7 mb-6">
            {specs.map((spec) => {
              const Icon = spec.icon;
              const isActive = selected === spec.title;
              return (
                <button
                  key={spec.title}
                  className={`relative flex flex-col items-center px-3 py-1 rounded-full transition duration-300 ease-in-out group
          ${isActive ? "font-semibold text-gray-900" : "text-gray-400 hover:text-gray-700"}`}
                  onClick={() => setSelected(spec.title)}
                  aria-current={isActive ? "true" : "false"}
                >
                  {/* Glow Border on Active */}
                  {isActive && (
                    <motion.span
                      layoutId="spec-glow"
                      className="absolute -inset-2 rounded-full border-2 border-cyan-400 shadow-[0_0_12px_3px_rgba(14,165,233,0.3)]"
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    />
                  )}

                  {/* Icon and Title */}
                  <span className="relative flex flex-col items-center z-10">
                    <span className={`w-8 h-8 mb-1 rounded-full flex items-center justify-center bg-gradient-to-br ${spec.color} 
            ${isActive ? "shadow-lg" : "shadow-md group-hover:shadow-lg"}`}>
                      <Icon className="text-white w-5 h-5" />
                    </span>
                    <span className="text-sm md:text-base select-none tracking-wide">
                      {spec.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>


          {/* The Quote */}
          <div className="mb-2 md:mb-3">
            <span className="block text-gray-700 text-[1.1rem] font-medium mb-2 leading-snug">
              It’s intelligent. It’s easy-to-ride. It’s for everyone.<br />
              Atlast is here!
            </span>
          </div>

          {/* Know More Button */}
          {/* <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px 0px rgba(6,182,212,0.31)" }}
            className="bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 transition text-white font-semibold px-6 py-2 rounded-lg shadow-lg text-lg w-max"
            onClick={() => {
              document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Know More
          </motion.button> */}

          {/* Selected Spec Detail */}
          <div className="mt-6">
            <div className={`flex items-end gap-1`}>
              <span className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${selectedSpec.color}`}>
                {selectedSpec.value}
              </span>
              <span className="text-lg text-muted-foreground mb-1">{selectedSpec.unit}</span>
            </div>
            <h3 className="text-xl font-bold mt-1 text-gray-800">
              {selectedSpec.title}
            </h3>
            <div className="text-base text-gray-500 mt-2 max-w-md">
              {selectedSpec.description}
            </div>
          </div>
        </div>

        {/* Right Side: Product Image with BG Text */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative h-[260px] md:h-[430px] mt-10 md:mt-0">
          {/* Faded BG Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 1.1, type: "spring" }}
            className="absolute inset-x-0 bottom-6 md:bottom-16 select-none pointer-events-none font-extrabold"
            style={{
              fontSize: "calc(2.7rem + 6vw)",
              letterSpacing: "0.02em",
              color: "#0082a6",
              zIndex: 0,
              lineHeight: 1,
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
          >
            Atlast
          </motion.div>
          {/* Product Image */}
          <motion.img
            src={productImage}
            alt="Wynn XP Red Scooter"
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="relative max-h-[160px] md:max-h-[330px] w-auto object-contain drop-shadow-2xl z-10"
            style={{ filter: "drop-shadow(0 8px 44px #28b4ee56)" }}
          />
        </div>
      </section>
    </div>
  );
}
