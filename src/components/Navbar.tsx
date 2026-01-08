import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGamepad } from 'react-icons/fa';
import { NavItems, SiteConfig } from '../config/Config';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'glass-nav py-3 shadow-lg shadow-black/20'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                            <FaGamepad className="text-2xl text-white" />
                        </div>
                        <span className="text-2xl font-display font-bold gradient-text">
                            {SiteConfig.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NavItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative font-medium transition-all duration-300 hover:text-primary-400 ${isActive(item.path)
                                        ? 'text-primary-400'
                                        : 'text-gray-300'
                                    }`}
                            >
                                {item.name}
                                {isActive(item.path) && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
                                )}
                            </Link>
                        ))}
                        <Link
                            to="/games"
                            className="btn-primary text-sm py-3 px-6"
                        >
                            Play Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-gray-300 hover:text-primary-400 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-6' : 'max-h-0'
                        }`}
                >
                    <div className="glass-card p-6 space-y-4">
                        {NavItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block py-2 font-medium transition-colors ${isActive(item.path)
                                        ? 'text-primary-400'
                                        : 'text-gray-300 hover:text-primary-400'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/games"
                            className="btn-primary block text-center mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Play Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
