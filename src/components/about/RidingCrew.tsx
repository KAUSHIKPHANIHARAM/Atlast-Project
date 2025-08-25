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
import img1 from "../../assets/img1.jpeg";

type TeamMember = {
    name: string;
    role: string;
    expertise: string;
    description: string;
    img?: string;
    link?: string;
};

export default function RidingCrew() {
    // Team members data
    const teamMembers: TeamMember[] = [
        {
            name: "Gopichand",
            role: "Co-Founder & CEO",
            expertise: "Sustainable Mobility Vision",
            description: "Visionary leader with expertise in sustainable transportation and hydrogen technology. Passionate about creating a cleaner future through innovative mobility solutions.",
            link: "https://linkedin.com"
        },
        {
            name: "Kotha",
            role: "Co-Founder & CTO",
            expertise: "Hydrogen Technology",
            description: "Technical mastermind behind our hydrogen fuel cell systems. Expert in energy storage, power management, and advanced propulsion technologies.",
            link: "https://linkedin.com"
        },
        {
            name: "Nikhil",
            role: "Co-Founder & COO",
            expertise: "Operations & Strategy",
            description: "Strategic operations leader focused on scaling our hydrogen bike technology. Expertise in business development and market expansion.",
            link: "https://linkedin.com"
        },
        {
            name: "Priya",
            role: "Lead Engineer",
            expertise: "Power Systems",
            description: "Specialist in fuel cell optimization and battery integration. Leading the development of our hybrid power management systems.",
            link: "https://linkedin.com"
        },
        {
            name: "Arjun",
            role: "Design Director",
            expertise: "Product Design",
            description: "Creative force behind our bike aesthetics and user experience. Combining functionality with stunning visual design for the future of mobility.",
            link: "https://linkedin.com"
        },
        {
            name: "Kavya",
            role: "Marketing Lead",
            expertise: "Brand Strategy",
            description: "Building our brand presence and market positioning. Expert in digital marketing and customer engagement strategies.",
            link: "https://linkedin.com"
        }
    ];

    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <section
            id="riding-crew"
            className="scroll-mt-24 bg-background py-20 relative overflow-hidden"
        >
            <Reveal>

                <div className="font-lovelo">
                    <SectionHeader title="Riding Crew" />
                </div>

                <div className="relative mt-12">
                    {/* Slider */}
                    <Swiper
                        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                        effect="coverflow"
                        centeredSlides
                        loop
                        grabCursor
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 150,
                            modifier: 1.0,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => {
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
                        className="mx-auto max-w-[1000px]"
                    >
                        {teamMembers.map((member, idx) => (
                            <SwiperSlide
                                key={idx}
                                className="!w-[280px] !h-[380px] md:!w-[320px] md:!h-[420px] rounded-2xl overflow-hidden relative"
                            >
                                <a
                                    href={member.link || "#"}
                                    target={member.link ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="block w-full h-full group"
                                >
                                    {/* Team member photo placeholder */}
                                    <div className="w-full h-3/4 bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                                        {member.img ? (
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="text-4xl font-bold text-white/50">
                                                    {member.name.charAt(0)}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Gradient overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    {/* Team member info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                        <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                                        <p className="text-sm text-gray-300 mb-2">{member.expertise}</p>
                                        <p className="text-xs text-gray-400 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {member.description}
                                        </p>
                                    </div>

                                    {/* Hover effect border */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-colors duration-300" />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation arrows */}
                    <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 flex items-center gap-4">
                        <button
                            ref={prevRef}
                            aria-label="Previous team member"
                            className="grid h-10 w-10 place-items-center rounded-full bg-blue-600/20 hover:bg-blue-600/40 backdrop-blur-md border border-blue-400/30 transition"
                        >
                            <ChevronLeft className="h-5 w-5 text-white" />
                        </button>
                        <button
                            ref={nextRef}
                            aria-label="Next team member"
                            className="grid h-10 w-10 place-items-center rounded-full bg-blue-600/20 hover:bg-blue-600/40 backdrop-blur-md border border-blue-400/30 transition"
                        >
                            <ChevronRight className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
