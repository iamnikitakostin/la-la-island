import { useState, useEffect } from "react";
import { X } from "lucide-react";

const Nav = ({ setLoaded }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const navLinks = [
        { href: "#about", text: "About us" },
        { href: "#menu", text: "Our menu" },
        { href: "#gallery", text: "Gallery" },
        { href: "#contact", text: "Contact us" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            setVisible(!isScrollingDown || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`fixed top-0 left-0 right-0 p-6 z-50 transition-transform duration-300 bg-black/50 backdrop-blur-sm ${
            visible ? 'translate-y-0' : '-translate-y-full'
        }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#fff]">La La Island</h1>
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[#fff] hover:text-[#fed053] transition-colors"
                            onClick={() => setLoaded(true)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
                <button
                    className="md:hidden text-[#fff]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu with Animation */}
            <div className={`fixed ${isMenuOpen && 'h-screen'} inset-0 bg-[#1e2328] z-50 transition-all duration-500 ${
                isMenuOpen 
                    ? 'opacity-100 pointer-events-auto' 
                    : 'opacity-0 pointer-events-none'
            }`}>
                {/* Close Button */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 text-white hover:text-[#fed053] transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Mobile Menu Links */}
                <div className="h-screen flex items-center justify-center">
                    <div className="flex flex-col gap-8 text-center">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-[#fff] text-2xl hover:text-[#fed053] transition-all duration-300
                                    ${isMenuOpen 
                                        ? 'translate-y-0 opacity-100' 
                                        : 'translate-y-4 opacity-0'}
                                `}
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setLoaded(true);
                                }}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;