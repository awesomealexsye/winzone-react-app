import { Link } from 'react-router-dom';
import {
    FaGamepad,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaDiscord,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaHeart
} from 'react-icons/fa';
import { SiteConfig, ContactConfig, SocialLinks, NavItems } from '../config/Config';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialIcons = [
        { icon: FaFacebookF, link: SocialLinks.facebook, label: 'Facebook' },
        { icon: FaInstagram, link: SocialLinks.instagram, label: 'Instagram' },
        { icon: FaTwitter, link: SocialLinks.twitter, label: 'Twitter' },
        { icon: FaYoutube, link: SocialLinks.youtube, label: 'YouTube' },
        { icon: FaDiscord, link: SocialLinks.discord, label: 'Discord' },
    ];

    return (
        <footer className="relative bg-gaming-darker border-t border-white/10">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker via-transparent to-transparent opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
                                <FaGamepad className="text-2xl text-white" />
                            </div>
                            <span className="text-2xl font-display font-bold gradient-text">
                                {SiteConfig.name}
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {SiteConfig.description}
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
                                >
                                    <social.icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-display font-semibold text-white mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {NavItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/games"
                                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    All Games
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Games */}
                    <div>
                        <h3 className="text-lg font-display font-semibold text-white mb-6">
                            Popular Games
                        </h3>
                        <ul className="space-y-4">
                            {['Ludo Master', 'Rummy Royal', 'Chess Arena', 'Fantasy Sports', 'Quiz Master'].map((game) => (
                                <li key={game}>
                                    <Link
                                        to="/games"
                                        className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {game}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-display font-semibold text-white mb-6">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`mailto:${ContactConfig.email}`}
                                    className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
                                >
                                    <FaEnvelope className="text-primary-500 mt-1 flex-shrink-0" />
                                    <span>{ContactConfig.email}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${ContactConfig.phone}`}
                                    className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
                                >
                                    <FaPhone className="text-primary-500 mt-1 flex-shrink-0" />
                                    <span>{ContactConfig.phoneDisplay}</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-gray-400">
                                    <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                                    <span>
                                        {ContactConfig.address.line1}<br />
                                        {ContactConfig.address.line2}<br />
                                        {ContactConfig.address.city} - {ContactConfig.address.pincode}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {SiteConfig.foundedYear} - {currentYear} {SiteConfig.name}. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                            Made with <FaHeart className="text-red-500" /> in India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
