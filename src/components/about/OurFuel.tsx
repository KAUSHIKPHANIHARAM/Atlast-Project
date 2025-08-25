import React from 'react';

export default function OurFuel() {
    const items = [
        { letter: "R", rest: "ESPECT", color: "#0a5463ff" },
        { letter: "A", rest: "CCOUNTABILITY", color: "#0077B6" },
        { letter: "R", rest: "IGHTEOUSNESS", color: "#023E8A" },
        { letter: "E", rest: "MPATHY", color: "#03045E" },
    ];

    return (
        <div className="flex flex-col items-center justify-center px-6 py-12">
            <style>{`
                @font-face {
                    font-family: 'LoveloCustom';
                    src: url('/Atlast Lovelo.ttf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }
                .lovelo-font {
                    font-family: 'LoveloCustom', Arial, sans-serif;
                }
                .color-boost {
                    filter: brightness(1.2) contrast(1.2);
                }
                .dark .color-boost {
                    filter: brightness(2) contrast(1.5);
                }
            `}</style>

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="lovelo-font text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
                    Our Fuel
                </h1>
                <p className="text-gray-600 dark:text-white/70 text-lg">(Culture)</p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-48 shadow-lg
                                   bg-gradient-to-b from-cyan-100 to-blue-200 
                                   dark:from-gray-800 dark:to-gray-900"
                    >
                        <div className="flex items-baseline justify-center">
                            <span
                                className="text-6xl font-bold lovelo-font leading-none color-boost"
                                style={{ color: item.color }}
                            >
                                {item.letter}
                            </span>
                            <span
                                className="text-xl font-bold lovelo-font ml-1 leading-none color-boost"
                                style={{ color: item.color }}
                            >
                                {item.rest}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
