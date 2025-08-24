import { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import srix from "../assets/srix.png";
import tihan from "../assets/Tihan.png";
import lions from '../assets/lions.png';
import vjhub from '../assets/vjHub.jpeg';
import vnr from '../assets/vnr.jpeg';
import itic from '../assets/itic.jpeg';
import CityMarker from "./CityMarker";
//places
import hyderabadImg from "../assets/hyderabadImg.jpeg";
import bangaloreImg from "../assets/bangaloreImg.jpeg";
import ahmedabadImg from "../assets/ahmedabadImg.jpeg";
import naviMumbaiImg from "../assets/naviMumbaiImg.jpeg";
import gandhinagarImg from "../assets/gandhinagarImg.jpeg";
import varanasiImg from "../assets/varanasiImg.jpeg";
import bhopalImg from "../assets/bhopalImg.jpeg";
import delhiImg from "../assets/delhiImg.jpeg";

const partnerLogos = [
    { name: "TiHan", logo: tihan },
    { name: "ITIC", logo: itic },
    { name: "Srix", logo: srix },
    { name: "VNRVJIET", logo: vnr },
    { name: "Vj Hub", logo: vjhub },
];

const locations = [
    { name: "Hyderabad", lat: 17.385044, lng: 78.486671, image: hyderabadImg },
    { name: "Bangalore", lat: 12.9716, lng: 77.5946, image: bangaloreImg },
    { name: "Ahmedabad", lat: 23.0225, lng: 72.5714, image: ahmedabadImg },
    { name: "Navi Mumbai", lat: 19.0330, lng: 73.0297, image: naviMumbaiImg },
    { name: "Gandhinagar", lat: 23.2156, lng: 72.6369, image: gandhinagarImg },
    { name: "Varanasi", lat: 25.3176, lng: 82.9739, image: varanasiImg },
    { name: "Bhopal", lat: 23.2599, lng: 77.4126, image: bhopalImg },
    { name: "New Delhi", lat: 28.6139, lng: 77.2090, image: delhiImg },
];

const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

export default function Spotlight() {
    const [hovered, setHovered] = useState(null);

    return (

<>
            <style>
                {`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }

                    @keyframes slideIn {
                        0% { transform: translateX(-100px); opacity: 0; }
                        100% { transform: translateX(0px); opacity: 1; }
                    }

                    /* Carousel 3D spin */
                    :root { --carousel-radius: 320px; }
                    .carousel-viewport { perspective: 1400px; margin: 0 auto; background: transparent; }
                    .carousel-ring { transform-style: preserve-3d; animation: spin 14s linear infinite; }
                    @keyframes spin {
                        from { transform: rotateY(0deg); }
                        to   { transform: rotateY(360deg); }
                    }

                    .carousel-item { will-change: transform; }
                    .carousel-item img { display:block; }

                    /* Ensure logos always render with original colors and no filters */
                    .partner-logo, .carousel-item { background: transparent !important; }
                    .partner-logo img, .carousel-item img {
                        filter: none !important;
                        -webkit-filter: none !important;
                        mix-blend-mode: normal !important;
                        opacity: 1 !important;
                        transition: none !important;
                        image-rendering: auto !important;
                        background: transparent !important;
                        -webkit-mask-image: none !important;
                    }
                    /* Prevent hover, focus, dark-mode, or global utility classes from altering logos */
                    .partner-logo:hover img, .partner-logo:focus img, .carousel-item:hover img, .carousel-item:focus img {
                        filter: none !important;
                        -webkit-filter: none !important;
                        mix-blend-mode: normal !important;
                        opacity: 1 !important;
                    }

                    /* Responsive radius tuning */
                    @media (max-width: 1024px) {
                        :root { --carousel-radius: 220px; }
                        .carousel-viewport { max-width: 640px; height: 220px; }
                    }
                    @media (max-width: 768px) {
                        :root { --carousel-radius: 140px; }
                        .carousel-viewport { max-width: 360px; height: 160px; }
                    }

                    /* subtle floating on hover handled inline */
                `}
            </style>
            <section className="py-20 bg-section-gradient relative overflow-hidden" id="spotlight" role="region" aria-labelledby="spotlight-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16" >
                    <h2 className="text-center mx-auto w-[767px] h-[72px] text-3xl sm:text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent leading-none">
                        Spotlight
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
                        Our presence across India, connecting innovation with excellence through strategic partnerships.
                    </p>
                </div>

                {/* India Map with Markers */}
                <div className="relative max-w-6xl mx-auto mb-16 sm:mb-20">
                    <div className="relative max-w-6xl mx-auto h-[600px] md:h-[540px] rounded-xl overflow-hidden">
                        <MapContainer
                            center={[22.9734, 78.6569]} // Center of India
                            zoom={5}
                            scrollWheelZoom={false}
                            className="w-full h-full z-10"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {/* <TileLayer
                                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
                            /> */}

                            {locations.map((loc, idx) => (
                                <CityMarker key={idx} loc={loc} />
                            ))}

                        </MapContainer>
                    </div>
                </div>

                {/* Collaborators Section - 3D Rotating Carousel */}
                <div className="mt-20 mb-12">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                        Collaborators
                    </h3>

                    <div className="relative w-full flex justify-center">
                        {/* Carousel viewport with perspective */}
                        <div className="carousel-viewport relative" style={{ width: '100%', maxWidth: 960, height: 260 }}>
                            {/* rotating ring */}
                            <div className="carousel-ring w-full h-full absolute left-0 top-0 flex items-center justify-center">
                                {partnerLogos.map((partner, i) => {
                                    const angle = (360 / partnerLogos.length) * i;
                                    const radius = 320;
                                    return (
                                        <div
                                            key={i}
                                            className="carousel-item absolute left-1/2 top-1/2 transform-gpu transition-transform duration-700"
                                            style={{
                                                transform: `rotateY(${angle}deg) translateZ(var(--carousel-radius)) translateX(-50%) translateY(-50%)`,
                                                animationDelay: `${i * 0.2}s`
                                            }}
                                        >
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center partner-logo">
                                                <img src={partner.logo} alt={partner.name} className="object-contain w-full h-full" loading="lazy" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* No reflection - minimal clean carousel */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
