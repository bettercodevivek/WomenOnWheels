import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, message });
    };

    return (
        <div className="bg-gray-100 min-h-screen pt-16 pb-12 flex flex-col items-center">
            {/* Header */}
            <header className="text-center mb-12 px-6 md:px-12">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    We'd love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out to us.
                </motion.p>
            </header>

            {/* Contact Form */}
            <section className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-5xl w-full mb-12">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Get in Touch
                </motion.h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
                            rows="6"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 text-lg font-semibold text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 ease-in-out"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </section>

            {/* Contact Details */}
            <section className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-5xl w-full mb-12">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Details
                </motion.h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <motion.h3
                            className="text-xl font-semibold text-gray-900 mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Address
                        </motion.h3>
                        <p className="text-gray-700">
                            1234 Elm Street, Suite 567<br />
                            Some City, ST 12345<br />
                            Country
                        </p>
                    </div>
                    <div className="flex-1">
                        <motion.h3
                            className="text-xl font-semibold text-gray-900 mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Phone
                        </motion.h3>
                        <p className="text-gray-700">
                            +1 (234) 567-8901
                        </p>
                    </div>
                    <div className="flex-1">
                        <motion.h3
                            className="text-xl font-semibold text-gray-900 mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Email
                        </motion.h3>
                        <p className="text-gray-700">
                            support@example.com
                        </p>
                    </div>
                </div>
            </section>

            {/* Map Integration */}
            <section className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-5xl w-full">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Find Us
                </motion.h2>
                <div className="w-full h-64">
                    {/* Embed Google Map here */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.119556154235!2d-122.40429768468126!3d37.78399977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e7b9e6391%3A0x98f1b6e8b2edb3!2s1234%20Elm%20St%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1674010687823!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
