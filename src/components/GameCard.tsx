import { useState } from 'react';
import { FaUsers, FaTrophy, FaFire, FaStar, FaClock, FaTimes, FaTools, FaBell } from 'react-icons/fa';
import { Game, SiteConfig } from '../config/Config';

interface GameCardProps {
    game: Game;
}

interface MaintenanceModalProps {
    isOpen: boolean;
    onClose: () => void;
    gameName: string;
}

const MaintenanceModal = ({ isOpen, onClose, gameName }: MaintenanceModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md glass-card p-8 animate-scale-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
                >
                    <FaTimes />
                </button>

                {/* Content */}
                <div className="text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center animate-pulse-slow">
                        <FaTools className="text-3xl text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                        Under Maintenance
                    </h3>

                    {/* Game name */}
                    <p className="text-primary-400 font-semibold mb-4">
                        {gameName}
                    </p>

                    {/* Message */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        We're currently working on making this game even better for you!
                        Our team is adding exciting new features and improvements.
                    </p>

                    {/* Status badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                        <span className="text-sm text-orange-300">Maintenance Mode</span>
                    </div>

                    {/* Update info */}
                    <div className="glass-card p-4 mb-6">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                            <FaBell className="text-primary-400" />
                            <span>We'll notify you when it's live!</span>
                        </div>
                    </div>

                    {/* Coming soon message */}
                    <p className="text-sm text-gray-500 mb-6">
                        Expected to be back soon. Thank you for your patience! 🎮
                    </p>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors"
                        >
                            Close
                        </button>
                        <a
                            href="/games"
                            className="flex-1 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all text-center"
                        >
                            Other Games
                        </a>
                    </div>

                    {/* Footer */}
                    <p className="mt-6 text-xs text-gray-600">
                        {SiteConfig.name} © {SiteConfig.foundedYear}
                    </p>
                </div>
            </div>
        </div>
    );
};

const GameCard = ({ game }: GameCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Icon = game.icon;

    const handlePlayClick = () => {
        if (!game.comingSoon) {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <div className="group relative glass-card overflow-hidden card-hover">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badges */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    {game.isHot && (
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-semibold text-white flex items-center gap-1 shadow-lg">
                            <FaFire /> HOT
                        </span>
                    )}
                    {game.isNew && (
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-semibold text-white flex items-center gap-1 shadow-lg">
                            <FaStar /> NEW
                        </span>
                    )}
                    {game.comingSoon && (
                        <span className="px-3 py-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full text-xs font-semibold text-white flex items-center gap-1 shadow-lg">
                            <FaClock /> SOON
                        </span>
                    )}
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={game.image}
                        alt={game.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gaming-card via-transparent to-transparent" />

                    {/* Icon overlay */}
                    <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-xl shadow-primary-500/30">
                            <Icon className="text-2xl text-white" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
                            {game.category}
                        </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {game.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {game.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1.5 text-gray-400">
                            <FaUsers className="text-secondary-400" />
                            <span>{game.players}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400">
                            <FaTrophy className="text-yellow-400" />
                            <span>{game.prizePool}</span>
                        </div>
                    </div>

                    {/* Play Button */}
                    <button
                        onClick={handlePlayClick}
                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${game.comingSoon
                            ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5'
                            }`}
                        disabled={game.comingSoon}
                    >
                        {game.comingSoon ? 'Coming Soon' : 'Play Now'}
                    </button>
                </div>
            </div>

            {/* Maintenance Modal */}
            <MaintenanceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                gameName={game.name}
            />
        </>
    );
};

export default GameCard;
