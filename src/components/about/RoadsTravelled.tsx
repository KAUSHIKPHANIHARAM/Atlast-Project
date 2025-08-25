import { useState } from "react";
import { motion } from 'framer-motion';
import {
    Bike,
    MapPin,
    TrendingUp,
    Award
} from 'lucide-react';
import Reveal from "./Reveal";

const milestones = [
    {
        year: "2024",
        title: "Founded in Hyderabad",
        description: "Started our journey to revolutionize sustainable transportation",
        icon: MapPin
    },
    {
        year: "2024",
        title: "First Prototype",
        description: "Completed our breakthrough hydrogen fuel cell bike prototype",
        icon: Bike
    },
    {
        year: "2025",
        title: "Initial Funding",
        description: "Raised $4.8K seed funding with local incubator support",
        icon: TrendingUp
    },
    {
        year: "2025",
        title: "Technology Validation",
        description: "Proven performance and efficiency metrics",
        icon: Award
    }
];

// UI component
export default function RoadsTravelled() {
    const [activeTimelineItem, setActiveTimelineItem] = useState(0);

    return (
        <section id="roads-travelled" className="scroll-mt-24 bg-white dark:bg-background py-20 px-4 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-lovelo text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Roads <span className="text-green-600 dark:text-green-500">Travelled</span>
                        </h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                            From vision to reality - building the future of sustainable mobility
                        </p>
                    </motion.div>
                </Reveal>

                <div className="relative">
                    {/* Timeline line */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-green-500 h-full"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 2 }}
                    />

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            className={`flex items-center justify-between mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            onViewportEnter={() => setActiveTimelineItem(index)}
                        >
                            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                <div
                                    className="
                                    bg-white text-gray-900 
                                    dark:bg-[#020817] dark:text-white 
                                    p-6 rounded-xl shadow-lg 
                                    border border-blue-200 dark:border-slate-700
                                "
                                >

                                    <div className="text-blue-600 dark:text-blue-500 font-bold text-2xl mb-2">{milestone.year}</div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300">{milestone.description}</p>
                                </div>
                            </div>

                            {/* Timeline dot */}
                            <div className="relative z-10">
                                <motion.div
                                    className={`w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center transition-all duration-300 ${activeTimelineItem >= index ? 'bg-blue-500' : 'bg-gray-100 dark:bg-slate-800'
                                        }`}
                                    animate={{ scale: activeTimelineItem >= index ? 1.1 : 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <milestone.icon className={`w-8 h-8 ${activeTimelineItem >= index ? 'text-white' : 'text-blue-500'}`} />
                                </motion.div>
                            </div>

                            <div className="w-5/12" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
