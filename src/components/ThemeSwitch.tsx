import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="w-16 h-8 bg-[#2b2b2b] rounded-full flex items-center relative transition-colors duration-300 overflow-hidden"
                aria-label="Toggle Theme"
            >
                {/* Sliding circle */}
                <div
                    className={`absolute top-0 left-0 w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${isDark ? "translate-x-8 bg-blue-400" : "translate-x-0 bg-blue-500"
                        }`}
                />

                {/* Always visible icons */}
                <Sun className="w-4 h-4 z-10 ml-2 text-white" />
                <Moon className="w-4 h-4 z-10 mr-2 ml-auto text-white" />
            </button>
        </div>
    );
};

export default ThemeSwitch;
