import { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { scroller } from "react-scroll";
import { SECTIONS } from "../constants";

function SideNav() {
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const midPoint = window.innerHeight / 2;
            const scrolledSections = SECTIONS.map(({ id }) => {
                const element = document.getElementById(id);
                if (!element) return false;
                const { offsetTop, offsetHeight } = element;
                return window.scrollY + midPoint >= offsetTop &&
                    window.scrollY + midPoint < offsetTop + offsetHeight;
            });
            setCurrentSection(scrolledSections.indexOf(true));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (direction: "up" | "down") => {
        const nextSectionIndex =
            direction === "up"
                ? Math.max(0, currentSection - 1)
                : Math.min(SECTIONS.length - 1, currentSection + 1);
        
        scroller.scrollTo(SECTIONS[nextSectionIndex].id, {
            duration: 800,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            <button
                onClick={() => scrollToSection("up")}
                disabled={currentSection === 0}
                className={`bg-neutral-700 p-3 rounded-full shadow-md hover:bg-purple-500 transition-all duration-300 ${
                    currentSection === 0 ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
                style={{
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                }}
            >
                <FaChevronUp className="text-white" size={20} />
            </button>
            <button
                onClick={() => scrollToSection("down")}
                disabled={currentSection === SECTIONS.length - 1}
                className={`bg-neutral-700 p-3 rounded-full shadow-md hover:bg-purple-500 transition-all duration-300 ${
                    currentSection === SECTIONS.length - 1 ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
                style={{
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                }}
            >
                <FaChevronDown className="text-white" size={20} />
            </button>
        </div>
    );
}

export default SideNav;
