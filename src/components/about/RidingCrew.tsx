import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Card = {
    name: string;
    role: string;
    img: string;
    link?: string;
};

export default function RidingCrew() {
    // ⚠️ Use real images here. Empty src => blank slides.
    const people: Card[] = [
        { name: "Name ", role: "Programming contests", img: "/crew/coding.jpg", link: "https://in.linkedin.com/" },
        { name: "Name ", role: "Innovators showcase", img: "/crew/project.jpg", link: "https://in.linkedin.com/" },
        { name: "Name ", role: "Unleash your robotic potential", img: "/crew/roboquest.jpg", link: "https://in.linkedin.com/" },
        { name: "Name ", role: "Multiple challenges", img: "/crew/competition.jpg", link: "https://in.linkedin.com/" },
        { name: "Name ", role: "Cultural activities", img: "/crew/farischeelan.jpg", link: "https://in.linkedin.com/" },
    ];

    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <section
            id="riding-crew"
            className="scroll-mt-24 bg-[#020817ff] py-20 relative overflow-hidden"
        >
            <Reveal>
                <SectionHeader title="Riding Crew" />

                <div className="relative mt-12">
                    {/* Slider */}
                    <Swiper
                        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                        effect="coverflow"
                        centeredSlides
                        loop
                        grabCursor
                        slidesPerView="auto"
                        // exact visual feel (center big, sides smaller in depth)
                        coverflowEffect={{
                            rotate: 0,     // no tilt like your screenshot
                            stretch: 0,
                            depth: 220,    // 3D spacing
                            modifier: 1.4, // strength of effect
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 2600,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        // attach custom nav buttons
                        onSwiper={(swiper) => {
                            // hook up custom buttons after refs exist
                            setTimeout(() => {
                                if (typeof swiper.params.navigation !== "boolean") {
                                    const nav = swiper.params.navigation!;
                                    nav.prevEl = prevRef.current!;
                                    nav.nextEl = nextRef.current!;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }
                            });
                        }}
                        className="mx-auto max-w-[1200px]"
                    >
                        {people.map((p, idx) => (
                            <SwiperSlide
                                key={idx}
                                // exact card size like screenshot (tweak if needed)
                                className="!w-[360px] !h-[420px] md:!w-[420px] md:!h-[520px] rounded-2xl overflow-hidden relative"
                            >
                                <a
                                    href={p.link || "#"}
                                    target={p.link ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="block w-full h-full"
                                >
                                    {/* Poster */}
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Top subtle fade + bottom strong fade like the image */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                                    {/* Bottom caption band */}
                                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 pb-4">
                                        <div className="mx-4 rounded-xl bg-black/55 backdrop-blur-sm px-5 py-4">
                                            <p className="text-sm md:text-base font-semibold text-white">
                                                {p.name}
                                            </p>
                                            <p className="mt-1 text-xs md:text-sm text-gray-300 line-clamp-2">
                                                {p.role}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* custom nav arrows (bottom center, like your screenshot) */}
                    <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 flex items-center gap-4">
                        <button
                            ref={prevRef}
                            aria-label="Previous"
                            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition"
                        >
                            <ChevronLeft className="h-5 w-5 text-white" />
                        </button>
                        <button
                            ref={nextRef}
                            aria-label="Next"
                            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition"
                        >
                            <ChevronRight className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
