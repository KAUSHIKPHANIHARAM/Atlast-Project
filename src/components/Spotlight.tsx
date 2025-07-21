import { MapPin } from "lucide-react";
import indiaMap from "@/assets/india-map.jpg";

const Spotlight = () => {
    const partnerLogos = [
        { name: "THAN", logo: "🏢" },
        { name: "ITIC", logo: "🔧" },
        { name: "Government of India", logo: "🏛️" },
        { name: "Brix", logo: "🔲" },
        { name: "Vedus", logo: "🔺" },
        { name: "University", logo: "🎓" },
        { name: "THAN Group", logo: "🏭" }
    ];

    const locations = [
        { name: "Delhi", x: "45%", y: "25%" },
        { name: "Mumbai", x: "25%", y: "55%" },
        { name: "Bangalore", x: "40%", y: "75%" },
        { name: "Chennai", x: "45%", y: "80%" },
        { name: "Kolkata", x: "65%", y: "45%" },
        { name: "Hyderabad", x: "42%", y: "65%" },
        { name: "Pune", x: "32%", y: "58%" },
        { name: "Ahmedabad", x: "28%", y: "45%" }
    ];

    return (
        <section id="spotlight" className="py-20 bg-spotlight-bg relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-spotlight-bg to-background opacity-90" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                        Spotlight
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
                        Our presence across India, connecting innovation with excellence through strategic partnerships
                    </p>
                </div>

                {/* India Map with Markers */}
                <div className="relative max-w-4xl mx-auto mb-16 sm:mb-20">

                    <img
                        src={indiaMap}
                        alt="India Map"
                        className="w-full h-auto rounded-xl sm:rounded-2xl"
                    />

                    {/* Location Markers */}
                    {/* {locations.map((location, index) => (
                            <div
                                key={location.name}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                                style={{ left: location.x, top: location.y }}
                            >
                                <div className="relative">
                                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary drop-shadow-lg animate-pulse" />
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <div className="bg-card/90 backdrop-blur-sm text-card-foreground px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium border border-primary/20 whitespace-nowrap">
                                            {location.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))} */}

                </div>

                {/* Partner Logos */}
                <div className="bg-card/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary/10 p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8 text-foreground">
                        Heading
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-6 items-center">
                        {partnerLogos.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-card/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                            >
                                <div className="text-center">
                                    <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {partner.logo}
                                    </div>
                                    <div className="text-xs font-medium text-muted-foreground leading-tight">
                                        {partner.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-2 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-2 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-primary-glow/10 rounded-full blur-3xl" />
        </section>
    );
};

export default Spotlight;