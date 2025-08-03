// components/ThemeToggle.tsx
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={clsx(
                "w-[60px] h-[30px] flex items-center rounded-full p-1 transition-colors",
                "bg-zinc-800"
            )}
            aria-label="Toggle Theme"
        >
            <div
                className={clsx(
                    "w-[26px] h-[26px] rounded-full flex items-center justify-center transition-transform duration-300",
                    isDark ? "translate-x-[30px] bg-blue-500" : "translate-x-0 bg-blue-500"
                )}
            >
                {isDark ? (
                    <Moon className="text-white w-4 h-4" />
                ) : (
                    <Sun className="text-white w-4 h-4" />
                )}
            </div>
        </button>
    );
};

export default ThemeToggle;
