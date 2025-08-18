import { Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import hyderabadImg from "../assets/hyderabadImg.jpeg";
import bangaloreImg from "../assets/bangaloreImg.jpeg";
import ahmedabadImg from "../assets/ahmedabadImg.jpeg";
import naviMumbaiImg from "../assets/naviMumbaiImg.jpeg";
import gandhinagarImg from "../assets/gandhinagarImg.jpeg";
import varanasiImg from "../assets/varanasiImg.jpeg";
import bhopalImg from "../assets/bhopalImg.jpeg";
import delhiImg from "../assets/delhiImg.jpeg";

const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});
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

export default function CityMarker({ loc }: { loc: any }) {
    const map = useMap();

    const handleClick = () => {
        map.setView([loc.lat, loc.lng], 10); // Zoom into city
    };

    //smart tooltip direction (no deletion of old code)
    const direction = loc.lat > 23 ? "bottom" : "top";
    const offset: [number, number] = direction === "top" ? [0, -55] : [0, 40];

    return (
        <Marker position={[loc.lat, loc.lng]} icon={customIcon} eventHandlers={{ click: handleClick }}>
            <Tooltip
                direction={direction}   // 🔹 changed here
                offset={offset}         // 🔹 changed here
                opacity={1}
                interactive={false}
                sticky={true}
                className="!p-0 !bg-transparent !border-none !shadow-none"
            >
                <div className="flex flex-col items-center">
                    <img
                        src={loc.image}
                        alt={loc.name}
                        loading="lazy"
                        className="w-[35vw] max-w-xs sm:max-w-sm md:max-w-md h-[200px] md:h-[200px] object-cover rounded-2xl border-2 border-white shadow-2xl"
                        style={{ pointerEvents: "none", display: "block", zIndex: 9999 }}
                    />
                    <div className="bg-black/80 dark:bg-white/80 text-white dark:text-black text-base font-bold px-4 py-1 rounded mt-2">
                        {loc.name}
                    </div>
                </div>
            </Tooltip>
        </Marker>
    );
}
