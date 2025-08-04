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
        <section className="py-20 bg-section-gradient relative overflow-hidden" id="spotlight" role="region" aria-labelledby="spotlight-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16" >
                    <h2 className="mx-auto w-[767px] h-[72px] text-3xl sm:text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent leading-none">
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

                {/* Partner Logos */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8 text-foreground">
                    Collaborators
                </h3>
                <div className="relative overflow-hidden">
                    {/* Gradient fade effects on sides for smooth visual transition */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                    {/* Scrolling Container */}
                    <div className="flex animate-scroll">
                        {partnerLogos.map((partner, index) => (
                            <div key={`first-${index}`} className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4">
                                <div className="text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 group min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
                                    <div className="w-28 h-20 mx-auto mb-2 flex items-center justify-center overflow-hidden">
                                        <img
                                            loading="lazy"
                                            src={partner.logo}
                                            alt={`Partner logo: ${partner.name}`}
                                            role="img"
                                            aria-label={`Partner: ${partner.name}`}
                                            className="object-contain w-full h-full"
                                        />

                                    </div>
                                    <div className="text-xs font-medium text-muted-foreground leading-tight">{partner.name}</div>
                                </div>
                            </div>
                        ))}
                        {partnerLogos.map((partner, index) => (
                            <div key={`second-${index}`} className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4">
                                <div className="text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 group min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
                                    <div className="w-28 h-20 mx-auto mb-2 flex items-center justify-center overflow-hidden">
                                        <img
                                            loading="lazy"
                                            src={partner.logo}
                                            alt={`Partner logo: ${partner.name}`}
                                            role="img"
                                            aria-label={`Partner: ${partner.name}`}
                                            className="object-contain w-full h-full"
                                        />

                                    </div>
                                    <div className="text-xs font-medium text-muted-foreground leading-tight">{partner.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
