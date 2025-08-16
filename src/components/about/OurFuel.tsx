import React from 'react';

export default function OurFuel() {
    const items = [
        { letter: "R", rest: "ESPECT", color: "#00B4D8" },
        { letter: "A", rest: "CCOUNTABILITY", color: "#0077B6" },
        { letter: "R", rest: "IGHTEOUSNESS", color: "#023E8A" },
        { letter: "E", rest: "MPATHY", color: "#03045E" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
            style={{ backgroundColor: "#020817ff" }} // Color from the image
        >
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
            `}</style>

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-2 lovelo-font">
                    Our Fuel
                </h1>
                <p className="text-white/70 text-lg">(Culture)</p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-b from-cyan-100 to-blue-200 rounded-2xl p-8 flex flex-col items-center justify-center min-h-48 shadow-lg"
                        style={{
                            background: 'linear-gradient(135deg, #E0F7FA 0%, #B3E5FC 100%)'
                        }}
                    >
                        <div className="flex items-baseline justify-center">
                            <span
                                className="text-6xl font-bold lovelo-font leading-none"
                                style={{ color: item.color }}
                            >
                                {item.letter}
                            </span>
                            <span
                                className="text-xl font-bold lovelo-font ml-1 leading-none"
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
