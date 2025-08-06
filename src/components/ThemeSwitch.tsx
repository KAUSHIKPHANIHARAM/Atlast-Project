// ThemeSwitch.tsx
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
                className="w-16 h-8 bg-[#2b2b2b] rounded-full flex items-center px-1 relative transition-colors duration-300"
                aria-label="Toggle Theme"
            >
                <div
                    className={`absolute w-8 h-8 bg-blue-500 rounded-full shadow-md transform transition-transform duration-300 ${isDark ? "translate-x-8" : "translate-x-0"
                        }`}
                />
                <Sun
                    className={`w-4 h-4 z-10 transition-opacity ${isDark ? "text-gray-400" : "text-white"
                        }`}
                />
                <Moon
                    className={`w-4 h-4 z-10 ml-auto transition-opacity ${isDark ? "text-white" : "text-gray-400"
                        }`}
                />
            </button>
        </div>
    );
};

export default ThemeSwitch;
