import {
    FaGamepad,
    FaTrophy,
    FaUsers,
    FaShieldAlt,
    FaWallet,
    FaBolt,
    FaChess,
    FaDice,
    FaPuzzlePiece,
    FaFootballBall
} from 'react-icons/fa';
import {
    GiPokerHand,
    GiCardRandom,
    GiTargetArrows
} from 'react-icons/gi';
import { IconType } from 'react-icons';

// Site Configuration
export const SiteConfig = {
    name: 'WinZones',
    tagline: 'Play Games, Win Prizes',
    description: 'India\'s Premier Online Gaming Platform. Compete with players worldwide and win real money!',
    foundedYear: 2024,
    logo: '🎮',
};

// Contact Information
export const ContactConfig = {
    email: 'info@winzones.in',
    phone: '+91 8228822825',
    phoneDisplay: '+91 82288 22825',
    address: {
        line1: '663 Kakrola Housing Complex',
        line2: 'Main Najafgarh Road, Dwarka',
        city: 'New Delhi',
        pincode: '110078',
        country: 'India',
    },
    fullAddress: '663 Kakrola Housing Complex, Main Najafgarh Road, Dwarka, New Delhi - 110078',
};

// Social Links
export const SocialLinks = {
    facebook: 'https://facebook.com/winzones',
    instagram: 'https://instagram.com/winzones',
    twitter: 'https://twitter.com/winzones',
    youtube: 'https://youtube.com/winzones',
    discord: 'https://discord.gg/winzones',
};

// Navigation Items
export interface NavItem {
    name: string;
    path: string;
}

export const NavItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
];

// Features
export interface Feature {
    icon: IconType;
    title: string;
    description: string;
    color: string;
}

export const Features: Feature[] = [
    {
        icon: FaGamepad,
        title: 'Real-Time Gaming',
        description: 'Experience thrilling multiplayer games with players from around the world in real-time.',
        color: 'from-primary-500 to-primary-700',
    },
    {
        icon: FaTrophy,
        title: 'Win Real Prizes',
        description: 'Compete in tournaments and win real money prizes. Your skills pay off!',
        color: 'from-yellow-500 to-orange-600',
    },
    {
        icon: FaUsers,
        title: 'Growing Community',
        description: 'Join thousands of gamers and become part of our vibrant gaming community.',
        color: 'from-secondary-500 to-secondary-700',
    },
    {
        icon: FaShieldAlt,
        title: 'Secure Platform',
        description: 'Your data and transactions are protected with enterprise-grade security.',
        color: 'from-green-500 to-emerald-600',
    },
    {
        icon: FaWallet,
        title: 'Instant Withdrawals',
        description: 'Withdraw your winnings instantly to your bank account or UPI.',
        color: 'from-accent-500 to-accent-700',
    },
    {
        icon: FaBolt,
        title: 'Lightning Fast',
        description: 'Optimized servers ensure lag-free gaming experience every time.',
        color: 'from-blue-500 to-indigo-600',
    },
];

// Games
export interface Game {
    id: number;
    name: string;
    description: string;
    icon: IconType;
    players: string;
    prizePool: string;
    category: string;
    image: string;
    isNew?: boolean;
    isHot?: boolean;
    comingSoon?: boolean;
}

export const Games: Game[] = [
    {
        id: 1,
        name: 'Ludo Master',
        description: 'Classic Ludo with a modern twist. Play with friends or random opponents.',
        icon: FaDice,
        players: '45K+',
        prizePool: '₹10 Lakhs',
        category: 'Board Games',
        image: '/images/3726585.jpg',
        isHot: true,
    },
    {
        id: 2,
        name: 'Rummy Royal',
        description: 'India\'s favorite card game. Show your skills and win big!',
        icon: GiPokerHand,
        players: '32K+',
        prizePool: '₹25 Lakhs',
        category: 'Card Games',
        image: '/images/3745105.jpg',
        isHot: true,
    },
    {
        id: 3,
        name: 'Chess Arena',
        description: 'Battle of minds. Compete in rapid and blitz chess tournaments.',
        icon: FaChess,
        players: '18K+',
        prizePool: '₹5 Lakhs',
        category: 'Strategy',
        image: '/images/3745306.jpg',
    },
    {
        id: 4,
        name: 'Fantasy Sports',
        description: 'Create your dream team and win based on real match performances.',
        icon: FaFootballBall,
        players: '78K+',
        prizePool: '₹50 Lakhs',
        category: 'Sports',
        image: '/images/img1.jpg',
        isHot: true,
    },
    {
        id: 5,
        name: 'Quiz Master',
        description: 'Test your knowledge across various categories and win rewards.',
        icon: FaPuzzlePiece,
        players: '25K+',
        prizePool: '₹3 Lakhs',
        category: 'Trivia',
        image: '/images/3726585.jpg',
        isNew: true,
    },
    {
        id: 6,
        name: 'Call Break',
        description: 'Strategic card game popular in South Asia. Master the tricks!',
        icon: GiCardRandom,
        players: '15K+',
        prizePool: '₹8 Lakhs',
        category: 'Card Games',
        image: '/images/3745105.jpg',
    },
    {
        id: 7,
        name: 'Carrom King',
        description: 'Digital carrom with realistic physics. Pocket and win!',
        icon: GiTargetArrows,
        players: '12K+',
        prizePool: '₹4 Lakhs',
        category: 'Board Games',
        image: '/images/3745306.jpg',
        comingSoon: true,
    },
    {
        id: 8,
        name: 'Poker Pro',
        description: 'Texas Hold\'em poker with tournaments and cash games.',
        icon: GiPokerHand,
        players: '28K+',
        prizePool: '₹15 Lakhs',
        category: 'Card Games',
        image: '/images/img1.jpg',
        comingSoon: true,
    },
];

// Game Categories
export const GameCategories = [
    'All Games',
    'Card Games',
    'Board Games',
    'Strategy',
    'Sports',
    'Trivia',
];

// Stats
export interface Stat {
    value: string;
    label: string;
    suffix?: string;
}

export const Stats: Stat[] = [
    { value: '500K', label: 'Active Players', suffix: '+' },
    { value: '50', label: 'Games Available', suffix: '+' },
    { value: '₹10Cr', label: 'Prizes Won', suffix: '+' },
    { value: '99.9', label: 'Uptime', suffix: '%' },
];

// How It Works Steps
export interface Step {
    number: string;
    title: string;
    description: string;
}

export const HowItWorks: Step[] = [
    {
        number: '01',
        title: 'Create Account',
        description: 'Sign up for free in just 30 seconds using your mobile number.',
    },
    {
        number: '02',
        title: 'Add Funds',
        description: 'Deposit using UPI, cards, or net banking with instant credit.',
    },
    {
        number: '03',
        title: 'Choose Your Game',
        description: 'Pick from our collection of exciting skill-based games.',
    },
    {
        number: '04',
        title: 'Win & Withdraw',
        description: 'Win matches and withdraw your earnings instantly to your bank.',
    },
];

// Testimonials
export interface Testimonial {
    name: string;
    location: string;
    content: string;
    avatar: string;
    winnings: string;
}

export const Testimonials: Testimonial[] = [
    {
        name: 'Rahul Kumar',
        location: 'Mumbai, Maharashtra',
        content: 'WinZones has changed my gaming experience. I\'ve won over ₹50,000 playing Ludo Master!',
        avatar: '👨',
        winnings: '₹50,000+',
    },
    {
        name: 'Priya Sharma',
        location: 'Delhi, NCR',
        content: 'The best gaming platform I\'ve used. Quick withdrawals and amazing games!',
        avatar: '👩',
        winnings: '₹35,000+',
    },
    {
        name: 'Amit Singh',
        location: 'Bangalore, Karnataka',
        content: 'Fantasy Sports on WinZones is addictive! Great prizes and fair gameplay.',
        avatar: '👨‍💼',
        winnings: '₹1,20,000+',
    },
];

// About Page Content
export const AboutContent = {
    mission: 'To create India\'s most trusted and entertaining online gaming platform where skill meets reward.',
    vision: 'To become the go-to destination for millions of gamers who want to showcase their skills and win real rewards.',
    story: `Founded in 2024, WinZones was born from a simple idea: gaming should be rewarding. Our team of passionate gamers and tech enthusiasts came together to create a platform that combines the thrill of gaming with the excitement of real rewards.

Today, WinZones hosts thousands of players who compete in skill-based games daily. We believe in fair play, transparency, and creating a safe environment for our gaming community.

Our journey has just begun, and we're committed to adding more games, features, and ways for you to win. Join us and be part of India's fastest-growing gaming revolution!`,
    values: [
        {
            title: 'Fair Play',
            description: 'We ensure all games are fair and skill-based with no room for cheating.',
        },
        {
            title: 'Transparency',
            description: 'Clear rules, instant payouts, and no hidden charges ever.',
        },
        {
            title: 'Security',
            description: 'Bank-grade security to protect your data and transactions.',
        },
        {
            title: 'Community',
            description: 'Building a positive and supportive gaming community.',
        },
    ],
};
