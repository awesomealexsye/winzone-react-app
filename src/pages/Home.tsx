import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaChevronRight } from 'react-icons/fa';
import {
    SiteConfig,
    Features,
    Games,
    Stats,
    HowItWorks,
    Testimonials
} from '../config/Config';
import GameCard from '../components/GameCard';

const Home = () => {
    const featuredGames = Games.filter(g => !g.comingSoon).slice(0, 4);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow delay-500" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left animate-slide-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-sm text-primary-300">Live Games Available Now</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold mb-6 leading-tight">
                                <span className="text-white">Play Games.</span>
                                <br />
                                <span className="gradient-text text-shadow-glow">Win Real Prizes.</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                                {SiteConfig.description} Join thousands of players and start winning today!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/games" className="btn-primary flex items-center justify-center gap-2 group">
                                    <FaPlay className="text-sm" />
                                    Start Playing
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="btn-secondary flex items-center justify-center gap-2">
                                    Learn More
                                </Link>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
                                {Stats.slice(0, 3).map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <p className="text-2xl sm:text-3xl font-display font-bold gradient-text">
                                            {stat.value}{stat.suffix}
                                        </p>
                                        <p className="text-sm text-gray-500">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative animate-fade-in lg:animate-float">
                            <div className="relative z-10">
                                <img
                                    src="/images/3726585.jpg"
                                    alt="Gaming Hero"
                                    className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl shadow-primary-500/20"
                                />
                                {/* Floating badges */}
                                <div className="absolute -top-4 -right-4 glass-card px-4 py-2 animate-bounce-slow">
                                    <span className="text-sm font-semibold text-green-400">🎮 50+ Games</span>
                                </div>
                                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 animate-bounce-slow delay-300">
                                    <span className="text-sm font-semibold text-yellow-400">🏆 ₹10Cr+ Won</span>
                                </div>
                            </div>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-accent-500/30 to-secondary-500/30 blur-3xl -z-10" />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding bg-gaming-darker relative">
                <div className="absolute inset-0 bg-mesh opacity-50" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            Why Choose <span className="gradient-text">{SiteConfig.name}</span>?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Experience the future of online gaming with our cutting-edge platform
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Features.map((feature, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 card-hover group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="text-2xl text-white" />
                                </div>
                                <h3 className="text-xl font-display font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Games Section */}
            <section className="section-padding relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                                Featured <span className="gradient-text">Games</span>
                            </h2>
                            <p className="text-gray-400">Our most popular games with the biggest prizes</p>
                        </div>
                        <Link
                            to="/games"
                            className="mt-4 sm:mt-0 flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors group"
                        >
                            View All Games
                            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredGames.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section-padding bg-gaming-darker relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh opacity-30" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            How It <span className="gradient-text">Works</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Get started in just a few simple steps
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {HowItWorks.map((step, index) => (
                            <div key={index} className="relative text-center group">
                                {/* Connector line */}
                                {index < HowItWorks.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent" />
                                )}

                                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-primary-500/20">
                                    <span className="text-3xl font-display font-bold text-white">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-display font-semibold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            What Our <span className="gradient-text">Winners</span> Say
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Real stories from real winners on our platform
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Testimonials.map((testimonial, index) => (
                            <div key={index} className="glass-card p-8 card-hover">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-gray-500">Total Winnings:</span>
                                    <span className="font-semibold text-green-400">{testimonial.winnings}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-accent-600/20 to-secondary-600/20" />
                <div className="absolute inset-0 bg-mesh" />

                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="glass-card p-12 sm:p-16 neon-glow">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                            Ready to Start <span className="gradient-text">Winning</span>?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                            Join thousands of players and start playing your favorite games today.
                            Your first win is just a game away!
                        </p>
                        <Link
                            to="/games"
                            className="btn-primary inline-flex items-center gap-2 text-lg group"
                        >
                            <FaPlay />
                            Play Now
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
