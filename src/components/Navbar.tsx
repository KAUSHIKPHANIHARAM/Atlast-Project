import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import atlastLogo from "../assets/atlast logo (png) (1).png"
import ThemeSwitch from "./ThemeSwitch";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { to: "product", label: "Product", type: "scroll" },
        { path: "/about", label: "About", type: "route" },
        { to: "spotlight", label: "Spotlight", type: "scroll" },
        { to: "how", label: "How", type: "scroll" },
        { to: "contact", label: "Let's Connect", type: "scroll" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // hide navbar when scrolling down past 100px
            } else {
                setIsVisible(true); // show navbar when scrolling up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const handleNavItemClick = (item: typeof navItems[0]) => {
        if (item.type === "route" && item.path) {
            navigate(item.path);
        }
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={clsx(
                "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-screen-xl px-3 sm:px-4 md:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-md transition-transform duration-500 z-50",
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}
            aria-label="Primary Navigation"
        >
            <div className="flex items-center justify-between w-full">
                {/* Logo + Brand */}
                <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none">
                    <ScrollLink
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform"
                        tabIndex={0}
                        aria-label="Scroll to home"
                    >
                        <img
                            src={atlastLogo}
                            alt="ATLAST Logo"
                            className="h-8 sm:h-10 w-auto"
                            style={{ maxWidth: "80px" }}
                        />
                        <span className="font-lovelo text-lg sm:text-xl font-bold text-blue-500 tracking-wide select-none">
                            ATLAST
                        </span>
                    </ScrollLink>
                </div>

                {/* Desktop navigation */}
                <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 font-medium text-blue-400 text-lg">
                    {navItems.map((item) => {
                        const isConnect = item.label === "Let's Connect";

                        if (item.type === "route" && item.path) {
                            return (
                                <button
                                    key={item.label}
                                    type="button"
                                    onClick={() => handleNavItemClick(item)}
                                    className={clsx(
                                        "px-3 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
                                        isConnect
                                            ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
                                            : "text-blue-400 hover:text-blue-600 focus:ring-blue-400"
                                    )}
                                >
                                    {item.label}
                                </button>
                            );
                        }

                        return (
                            <ScrollLink
                                key={item.label}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsMenuOpen(false)}
                                className={clsx(
                                    "cursor-pointer px-3 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
                                    isConnect
                                        ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
                                        : "text-blue-400 hover:text-blue-600 focus:ring-blue-400"
                                )}
                                tabIndex={0}
                            >
                                {item.label}
                            </ScrollLink>
                        );
                    })}

                    <ThemeSwitch />
                </div>

                {/* Mobile menu toggle + ThemeSwitch */}
                <div className="lg:hidden flex items-center space-x-4">
                    <ThemeSwitch />
                    <button
                        className="p-2 rounded-md text-blue-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 pt-4 border-t border-white/10 animate-fade-in bg-white/10 backdrop-blur-md rounded-b-xl">
                    <ul className="flex flex-col space-y-3 text-blue-400 px-4">
                        {navItems.map((item) => {
                            const isConnect = item.label === "Let's Connect";

                            if (item.type === "route" && item.path) {
                                return (
                                    <li key={item.label}>
                                        <button
                                            type="button"
                                            onClick={() => handleNavItemClick(item)}
                                            className={clsx(
                                                "block w-full text-left px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
                                                isConnect
                                                    ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
                                                    : "text-blue-400 hover:text-blue-600 focus:ring-blue-400"
                                            )}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                );
                            }

                            return (
                                <li key={item.label}>
                                    <ScrollLink
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={clsx(
                                            "block cursor-pointer px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
                                            isConnect
                                                ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
                                                : "text-blue-400 hover:text-blue-600 focus:ring-blue-400"
                                        )}
                                    >
                                        {item.label}
                                    </ScrollLink>
                                </li>
                            );
                        })}

                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
