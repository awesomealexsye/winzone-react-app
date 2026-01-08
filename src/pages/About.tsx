import { FaCheckCircle, FaRocket, FaShieldAlt, FaUsers, FaGamepad } from 'react-icons/fa';
import { SiteConfig, AboutContent, Stats } from '../config/Config';

const About = () => {
    const timeline = [
        { year: '2024', event: 'WinZones was founded with a vision to revolutionize online gaming in India' },
        { year: '2024', event: 'Launched our first games - Ludo Master and Rummy Royal' },
        { year: '2024', event: 'Crossed 100,000 registered players' },
        { year: '2024', event: 'Introduced Fantasy Sports and Chess Arena' },
        { year: '2025', event: 'Expanding to 50+ games with bigger prize pools' },
    ];

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-mesh">
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6">
                                About <span className="gradient-text">{SiteConfig.name}</span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                {AboutContent.mission}
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <div className="glass-card px-6 py-4 flex items-center gap-3">
                                    <FaGamepad className="text-2xl text-primary-400" />
                                    <div>
                                        <p className="text-xl font-bold text-white">50+</p>
                                        <p className="text-sm text-gray-400">Games</p>
                                    </div>
                                </div>
                                <div className="glass-card px-6 py-4 flex items-center gap-3">
                                    <FaUsers className="text-2xl text-secondary-400" />
                                    <div>
                                        <p className="text-xl font-bold text-white">500K+</p>
                                        <p className="text-sm text-gray-400">Players</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/3745105.jpg"
                                alt="About WinZones"
                                className="w-full rounded-3xl shadow-2xl shadow-primary-500/20"
                            />
                            <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float">
                                <div className="flex items-center gap-2">
                                    <FaRocket className="text-accent-400" />
                                    <span className="text-white font-semibold">Since 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="section-padding bg-gaming-darker">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            Our <span className="gradient-text">Story</span>
                        </h2>
                    </div>
                    <div className="glass-card p-8 sm:p-12">
                        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                            {AboutContent.story}
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section-padding relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 lg:order-1">
                            <img
                                src="/images/3745306.jpg"
                                alt="Our Vision"
                                className="w-full rounded-3xl shadow-2xl shadow-accent-500/20"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                                Our <span className="gradient-text">Vision</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                {AboutContent.vision}
                            </p>
                            <div className="space-y-4">
                                {['Skill-based gaming excellence', 'Fair and transparent platform', 'Instant rewards and withdrawals', 'World-class gaming experience'].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-green-400 flex-shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="section-padding bg-gaming-darker relative">
                <div className="absolute inset-0 bg-mesh opacity-30" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {AboutContent.values.map((value, index) => {
                            const icons = [FaShieldAlt, FaCheckCircle, FaRocket, FaUsers];
                            const Icon = icons[index % icons.length];
                            const colors = ['from-primary-500 to-primary-700', 'from-green-500 to-emerald-700', 'from-accent-500 to-accent-700', 'from-secondary-500 to-secondary-700'];

                            return (
                                <div key={index} className="glass-card p-8 text-center card-hover group">
                                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="text-2xl text-white" />
                                    </div>
                                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding relative">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            Our <span className="gradient-text">Journey</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-secondary-500" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2 shadow-lg shadow-primary-500/50 z-10" />

                                    {/* Content */}
                                    <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                                        <div className="glass-card p-6 inline-block">
                                            <span className="text-primary-400 font-bold">{item.year}</span>
                                            <p className="text-gray-300 mt-2">{item.event}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-gaming-darker">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-card p-12 neon-glow">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {Stats.map((stat, index) => (
                                <div key={index} className="group">
                                    <p className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                                        {stat.value}{stat.suffix}
                                    </p>
                                    <p className="text-gray-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
