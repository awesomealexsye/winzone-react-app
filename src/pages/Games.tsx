import { useState } from 'react';
import { FaSearch, FaFilter, FaGamepad, FaTrophy } from 'react-icons/fa';
import { Games, GameCategories, SiteConfig } from '../config/Config';
import GameCard from '../components/GameCard';

const GamesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Games');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredGames = Games.filter(game => {
        const matchesCategory = selectedCategory === 'All Games' || game.category === selectedCategory;
        const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            game.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const availableGames = filteredGames.filter(g => !g.comingSoon);
    const comingSoonGames = filteredGames.filter(g => g.comingSoon);

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden bg-mesh">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                            <FaGamepad className="text-primary-400" />
                            <span className="text-sm text-primary-300">{Games.filter(g => !g.comingSoon).length} Games Available</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6">
                            Our <span className="gradient-text">Games</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Choose from our exciting collection of skill-based games.
                            Compete, win, and withdraw your earnings instantly!
                        </p>
                    </div>

                    {/* Stats Bar */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="glass-card px-6 py-4 flex items-center gap-3">
                            <FaGamepad className="text-xl text-primary-400" />
                            <div>
                                <p className="text-xl font-bold text-white">{Games.length}</p>
                                <p className="text-xs text-gray-400">Total Games</p>
                            </div>
                        </div>
                        <div className="glass-card px-6 py-4 flex items-center gap-3">
                            <FaTrophy className="text-xl text-yellow-400" />
                            <div>
                                <p className="text-xl font-bold text-white">₹1Cr+</p>
                                <p className="text-xs text-gray-400">Daily Prizes</p>
                            </div>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
                        <div className="relative flex-1">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search games..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                            />
                        </div>
                        <div className="relative">
                            <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full sm:w-48 pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors appearance-none cursor-pointer"
                            >
                                {GameCategories.map((category) => (
                                    <option key={category} value={category} className="bg-gaming-dark">
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Pills */}
            <section className="py-8 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {GameCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/25'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Games */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    {availableGames.length > 0 ? (
                        <>
                            <div className="flex items-center gap-3 mb-8">
                                <h2 className="text-2xl font-display font-bold text-white">
                                    Available Games
                                </h2>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                    {availableGames.length} games
                                </span>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {availableGames.map((game) => (
                                    <GameCard key={game.id} game={game} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <FaGamepad className="text-6xl text-gray-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">No games found</h3>
                            <p className="text-gray-400">Try adjusting your search or filter</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Coming Soon Games */}
            {comingSoonGames.length > 0 && (
                <section className="section-padding bg-gaming-darker">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <h2 className="text-2xl font-display font-bold text-white">
                                Coming Soon
                            </h2>
                            <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-sm rounded-full">
                                {comingSoonGames.length} games
                            </span>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {comingSoonGames.map((game) => (
                                <GameCard key={game.id} game={game} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-accent-600/10 to-secondary-600/10" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="glass-card p-12 neon-glow">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            Can't Find Your Favorite Game?
                        </h2>
                        <p className="text-gray-400 mb-6">
                            We're constantly adding new games. Let us know what you'd like to play
                            and we'll add it to {SiteConfig.name}!
                        </p>
                        <a
                            href="/contact"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Suggest a Game
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GamesPage;
