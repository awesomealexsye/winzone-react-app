import { useState } from 'react';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaDiscord,
    FaCheck,
    FaExclamationCircle
} from 'react-icons/fa';
import { ContactConfig, SocialLinks, SiteConfig } from '../config/Config';

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const WHATSAPP_NUMBER = '918228822825'; // Without + sign for WhatsApp URL

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation (optional but if provided, must be valid)
        if (formData.phone.trim()) {
            const phoneRegex = /^[+]?[\d\s-]{10,}$/;
            if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
                newErrors.phone = 'Please enter a valid phone number';
            }
        }

        // Subject validation
        if (!formData.subject) {
            newErrors.subject = 'Please select a subject';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const getSubjectLabel = (value: string): string => {
        const subjects: { [key: string]: string } = {
            'general': 'General Inquiry',
            'support': 'Technical Support',
            'payment': 'Payment Issue',
            'feedback': 'Feedback',
            'partnership': 'Partnership'
        };
        return subjects[value] || value;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Create WhatsApp message
        const message = `
🎮 *New Contact Form Submission - ${SiteConfig.name}*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}
📋 *Subject:* ${getSubjectLabel(formData.subject)}

💬 *Message:*
${formData.message}

---
Sent from ${SiteConfig.name} Website
        `.trim();

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Show success state
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 5000);
    };

    const socialLinks = [
        { icon: FaFacebookF, link: SocialLinks.facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: FaInstagram, link: SocialLinks.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
        { icon: FaTwitter, link: SocialLinks.twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
        { icon: FaDiscord, link: SocialLinks.discord, label: 'Discord', color: 'hover:bg-indigo-600' },
    ];

    const InputError = ({ message }: { message?: string }) => {
        if (!message) return null;
        return (
            <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <FaExclamationCircle className="flex-shrink-0" />
                {message}
            </p>
        );
    };

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-mesh">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6">
                        Get In <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Have questions or need help? We're here for you 24/7.
                        Reach out and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                                    Contact <span className="gradient-text">Information</span>
                                </h2>
                                <p className="text-gray-400">
                                    We'd love to hear from you. Choose the most convenient way to reach us.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${ContactConfig.email}`}
                                    className="glass-card p-6 flex items-start gap-4 card-hover group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <FaEnvelope className="text-xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Email Us</h3>
                                        <p className="text-primary-400">{ContactConfig.email}</p>
                                        <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                                    </div>
                                </a>

                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card p-6 flex items-start gap-4 card-hover group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <FaWhatsapp className="text-xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">WhatsApp Us</h3>
                                        <p className="text-green-400">{ContactConfig.phoneDisplay}</p>
                                        <p className="text-sm text-gray-500 mt-1">Chat with us instantly</p>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${ContactConfig.phone}`}
                                    className="glass-card p-6 flex items-start gap-4 card-hover group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <FaPhone className="text-xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Call Us</h3>
                                        <p className="text-blue-400">{ContactConfig.phoneDisplay}</p>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Sat, 9AM-9PM IST</p>
                                    </div>
                                </a>

                                <div className="glass-card p-6 flex items-start gap-4 card-hover group">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <FaMapMarkerAlt className="text-xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                                        <p className="text-gray-300">
                                            {ContactConfig.address.line1}<br />
                                            {ContactConfig.address.line2}<br />
                                            {ContactConfig.address.city} - {ContactConfig.address.pincode}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white ${social.color} hover:border-transparent transition-all duration-300`}
                                        >
                                            <social.icon className="text-lg" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative hidden lg:block">
                                <img
                                    src="/images/img1.jpg"
                                    alt="Contact Us"
                                    className="w-full rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-card p-8 sm:p-10">
                            <h2 className="text-2xl font-display font-bold text-white mb-2">
                                Send Us a <span className="gradient-text">Message</span>
                            </h2>
                            <p className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                                <FaWhatsapp className="text-green-400" />
                                Your message will be sent via WhatsApp
                            </p>

                            {isSubmitted ? (
                                <div className="h-full flex flex-col items-center justify-center py-16">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 animate-scale-in">
                                        <FaCheck className="text-3xl text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400 text-center">
                                        Thank you for contacting {SiteConfig.name}.<br />
                                        We'll get back to you soon on WhatsApp.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors ${errors.name
                                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                        : 'border-white/10 focus:border-primary-500 focus:ring-primary-500'
                                                    }`}
                                                placeholder="John Doe"
                                            />
                                            <InputError message={errors.name} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors ${errors.email
                                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                        : 'border-white/10 focus:border-primary-500 focus:ring-primary-500'
                                                    }`}
                                                placeholder="john@example.com"
                                            />
                                            <InputError message={errors.email} />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors ${errors.phone
                                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                        : 'border-white/10 focus:border-primary-500 focus:ring-primary-500'
                                                    }`}
                                                placeholder="+91 98765 43210"
                                            />
                                            <InputError message={errors.phone} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-1 transition-colors ${errors.subject
                                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                        : 'border-white/10 focus:border-primary-500 focus:ring-primary-500'
                                                    }`}
                                            >
                                                <option value="" className="bg-gaming-dark">Select a subject</option>
                                                <option value="general" className="bg-gaming-dark">General Inquiry</option>
                                                <option value="support" className="bg-gaming-dark">Technical Support</option>
                                                <option value="payment" className="bg-gaming-dark">Payment Issue</option>
                                                <option value="feedback" className="bg-gaming-dark">Feedback</option>
                                                <option value="partnership" className="bg-gaming-dark">Partnership</option>
                                            </select>
                                            <InputError message={errors.subject} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors resize-none ${errors.message
                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                    : 'border-white/10 focus:border-primary-500 focus:ring-primary-500'
                                                }`}
                                            placeholder="Tell us how we can help you..."
                                        />
                                        <InputError message={errors.message} />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-green-500/50 hover:scale-[1.02] hover:-translate-y-0.5 flex items-center justify-center gap-3"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        Send via WhatsApp
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="section-padding bg-gaming-darker">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-card p-4 overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-gaming-card to-gaming-darker rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <FaMapMarkerAlt className="text-5xl text-primary-500 mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-white mb-2">Our Office Location</h3>
                                <p className="text-gray-400">{ContactConfig.fullAddress}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
