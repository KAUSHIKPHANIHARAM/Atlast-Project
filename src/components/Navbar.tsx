import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import atlastLogo from "@/assets/atlast logo (png) (1).png";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";
import GlobalAnimatedBackground from "./GlobalAnimatedBackground";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { path: "/about", label: "About", type: "route" },
        { to: "product", label: "Product", type: "scroll" },
        { to: "how", label: "How", type: "scroll" },
        { to: "spotlight", label: "Spotlight", type: "scroll" },
        { to: "contact", label: "Let's Connect", type: "scroll" },
    ];


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-screen-xl z-50 px-3 sm:px-4 md:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 shadow-md">
            <div className="flex items-center justify-between w-full">
                
                {/* Logo + Name */}
                <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={atlastLogo}
                            alt="ATLAST"
                            className="h-8 sm:h-10 w-auto object-contain"
                            style={{ maxWidth: "80px sm:120px" }}
                        />
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-500 tracking-wider">
                            ATLAST
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 font-medium text-blue-400 text-sm xl:text-base">
                    {navItems.map((item) =>
                        item.type === "route" ? (
                            <span
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                            >
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
                    <ThemeToggle />
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-blue-400 hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 pt-4 border-t border-white/10 animate-fade-in">
                    <div className="flex flex-col space-y-3 text-blue-400 font-medium text-sm sm:text-base">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsMenuOpen(false)}
                                className="hover:text-primary transition-colors cursor-pointer py-2 px-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;