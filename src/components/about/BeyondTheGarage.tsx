import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/pic1.jpeg";
import img2 from "@/assets/pic2.jpg";
import img3 from "@/assets/pic3.jpg";
import img4 from "@/assets/pic4.jpg";
import img5 from "@/assets/pic5.jpg";
import img6 from "@/assets/pic6.jpg";
import img7 from "@/assets/pic7.jpg";
import img8 from "@/assets/pic2.jpg";
import img9 from "@/assets/pic5.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function BeyondTheGarage() {
    const [currentSet, setCurrentSet] = useState(0);
    const totalSets = Math.ceil(images.length / 3);

    // Auto-rotate every 5 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prev) => (prev + 1) % totalSets);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSets]);

    const getCurrentImages = () => {
        const startIndex = currentSet * 3;
        return images.slice(startIndex, startIndex + 3);
    };

    const goToNext = () => {
        setCurrentSet((prev) => (prev + 1) % totalSets);
    };

    const goToPrevious = () => {
        setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets);
    };

    const currentImages = getCurrentImages();

    return (
        <section id="beyond-the-garage" className="font-lovelo scroll-mt-24 bg-background py-16">
            <Reveal>
                <SectionHeader title="Beyond the Garage" />
                <div className="mt-12 max-w-4xl mx-auto px-4">
                    <div className="relative">
                        {/* Image Grid */}
                        <div className="relative h-80 overflow-hidden rounded-2xl">
                            <div className="flex transition-transform duration-700 ease-in-out h-full">
                                <div className="min-w-full flex gap-4 h-full">
                                    {/* Big Left Image */}
                                    <div className="flex-1 h-full">
                                        <div className="relative w-full h-full rounded-xl overflow-hidden group">
                                            <img
                                                src={currentImages[0]}
                                                alt="Main showcase"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>

                                    {/* Two Stacked Images on Right */}
                                    <div className="flex flex-col gap-4 w-64">
                                        {currentImages.slice(1, 3).map((image, index) => (
                                            <div
                                                key={index}
                                                className="flex-1 relative rounded-xl overflow-hidden group"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`Gallery image ${index + 2}`}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white w-10 h-10 rounded-full backdrop-blur-sm"
                            onClick={goToPrevious}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white w-10 h-10 rounded-full backdrop-blur-sm"
                            onClick={goToNext}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-6 gap-2">
                            {Array.from({ length: totalSets }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSet
                                            ? "bg-blue-400 w-8"
                                            : "bg-white/30 hover:bg-white/50"
                                        }`}
                                    onClick={() => setCurrentSet(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
