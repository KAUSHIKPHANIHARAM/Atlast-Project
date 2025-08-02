import React from 'react'

function Example() {
    return (
        <div>
            <h1 className='text-center'>Example</h1>
        </div>
    )
}

export default Example
// import { MapPin } from "lucide-react";
// import indiaMap from "@/assets/india-map.jpg";
// import srix from "../assets/srix.png";
// import tihan from "../assets/Tihan.png";
// import lions from '../assets/lions.png';
// import vjhub from '../assets/vjHub.jpeg';
// import vnr from '../assets/vnr.jpeg';
// import itic from '../assets/itic.jpeg';
// import GlobalAnimatedBackground from "./GlobalAnimatedBackground";
// import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
// import L from 'leaflet';
// import { useState } from "react";



// const Spotlight = () => {
//     const partnerLogos = [
//         { name: "TiHan", logo: tihan },
//         { name: "ITIC", logo: itic },
//         { name: "Srix", logo: srix },
//         { name: "VNRVJIET", logo: vnr },
//         { name: "Vj Hub", logo: vjhub },
//     ];

//     const locations = [
//         {
//             name: 'Hyderabad',
//             lat: 17.385044,
//             lng: 78.486671,
//             image: vnr,
//         },
//         {
//             name: 'Bangalore',
//             lat: 12.9716,
//             lng: 77.5946,
//             image: vnr,
//         },
//         {
//             name: 'Ahmedabad',
//             lat: 23.0225,
//             lng: 72.5714,
//             image: yourAhmedabadImage,
//         },
//         {
//             name: 'Navi Mumbai',
//             lat: 19.0330,
//             lng: 73.0297,
//             image: yourNaviMumbaiImage,
//         },
//         {
//             name: 'Gandhinagar',
//             lat: 23.2156,
//             lng: 72.6369,
//             image: yourGandhinagarImage,
//         },
//         {
//             name: 'Varanasi',
//             lat: 25.3176,
//             lng: 82.9739,
//             image: yourVaranasiImage,
//         },
//         {
//             name: 'Bhopal',
//             lat: 23.2599,
//             lng: 77.4126,
//             image: yourBhopalImage,
//         },
//         {
//             name: 'New Delhi',
//             lat: 28.6139,
//             lng: 77.2090,
//             image: yourNewDelhiImage,
//         }
//         // Add images as needed
//     ];


//     const customIcon = new L.Icon({
//         iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//         iconSize: [32, 32],
//         iconAnchor: [16, 32],
//     });


//     return (
//         <section id="spotlight" className="py-20 bg-section-gradient relative overflow-hidden">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//                 <div className="text-center mb-12 sm:mb-16">
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
//                         Spotlight
//                     </h2>
//                     <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
//                         Our presence across India, connecting innovation with excellence through strategic partnerships
//                     </p>
//                 </div>

//                 {/* India Map with Markers */}
//                 <div className="relative max-w-4xl mx-auto mb-16 sm:mb-20">
//                     <div className="relative max-w-4xl mx-auto mb-16 sm:mb-20 h-[500px] rounded-xl overflow-hidden">
//                         <MapContainer
//                             center={[22.9734, 78.6569]} // Center of India
//                             zoom={5}
//                             scrollWheelZoom={false}
//                             className="w-full h-full z-10"
//                         >
//                             <TileLayer
//                                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                                 attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//                             />

//                             {locations.map((loc, idx) => (
//                                 <Marker key={idx} position={[loc.lat, loc.lng]} icon={customIcon}>
//                                     <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
//                                         <div className="text-xs text-center font-medium">
//                                             {loc.name}
//                                             <br />
//                                             <img src={loc.image} alt={loc.name} className="w-20 mt-1 rounded" />
//                                         </div>
//                                     </Tooltip>
//                                 </Marker>
//                             ))}
//                         </MapContainer>
//                     </div>
//                 </div>

//                 {/* Partner Logos */}
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8 text-foreground">
//                     Collaborators
//                 </h3>
//                 <div className="relative overflow-hidden">
//                     {/* Gradient fade effects on sides for smooth visual transition */}
//                     <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
//                     <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

//                     {/* Scrolling Container */}
//                     <div className="flex animate-scroll">
//                         {/* First set of logos */}
//                         {partnerLogos.map((partner, index) => (
//                             <div
//                                 key={`first-${index}`}
//                                 className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
//                             >
//                                 <div className="text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 group min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
//                                     <div className="w-28 h-20 mx-auto mb-2 flex items-center justify-center overflow-hidden">
//                                         <img
//                                             src={partner.logo}
//                                             alt={partner.name}
//                                             className="object-contain w-full h-full"
//                                         />
//                                     </div>
//                                     <div className="text-xs font-medium text-muted-foreground leading-tight">
//                                         {partner.name}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}

//                         {/* Duplicate set */}
//                         {partnerLogos.map((partner, index) => (
//                             <div
//                                 key={`second-${index}`}
//                                 className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
//                             >
//                                 <div className="text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 group min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
//                                     <div className="w-28 h-20 mx-auto mb-2 flex items-center justify-center overflow-hidden">
//                                         <img
//                                             src={partner.logo}
//                                             alt={partner.name}
//                                             className="object-contain w-full h-full"
//                                         />
//                                     </div>
//                                     <div className="text-xs font-medium text-muted-foreground leading-tight">
//                                         {partner.name}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </div>

//             {/* Decorative elements */}
//             <div className="absolute top-1/4 left-2 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary/10 rounded-full blur-3xl" />
//             <div className="absolute bottom-1/4 right-2 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-primary-glow/10 rounded-full blur-3xl" />
//         </section>
//     );
// };

// export default Spotlight;