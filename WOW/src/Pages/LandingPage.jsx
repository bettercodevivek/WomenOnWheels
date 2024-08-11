import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="relative bg-gray-100 overflow-hidden">
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-30"
                animate={{ opacity: [0.2, 0.5, 0.8, 0.2] }}
                transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
            />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center py-10 px-6 lg:px-12">
                <motion.h1
                    className="text-4xl lg:text-6xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Share the Ride, Share the Joy
                </motion.h1>

                <motion.p
                    className="text-lg lg:text-2xl text-white mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Join our carpool services and make commuting easier, eco-friendly, and more enjoyable.
                </motion.p>

                <Link to="/signup" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
                    Get Started
                </Link>

                {/* Features Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <div className="text-4xl text-blue-500 mb-4">
                            🚗
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Convenient Rides</h2>
                        <p className="text-gray-600 text-center">
                            Easily find and book rides that fit your schedule and location.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <div className="text-4xl text-green-500 mb-4">
                            🌱
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Eco-Friendly</h2>
                        <p className="text-gray-600 text-center">
                            Reduce your carbon footprint by carpooling with others.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        <div className="text-4xl text-purple-500 mb-4">
                            💬
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Community</h2>
                        <p className="text-gray-600 text-center">
                            Connect with a community of like-minded individuals.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
