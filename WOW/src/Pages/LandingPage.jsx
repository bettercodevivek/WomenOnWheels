import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLock, FaHandsHelping, FaRegSmile } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <div className="relative top-0 bg-gray-900 overflow-hidden">
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-400 via-indigo-500 to-blue-600"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
            />

            {/* Main Content */}
            <div className="relative top-12 z-10 flex flex-col items-center justify-center min-h-screen text-center py-10 px-6 lg:px-12">
                <motion.h1
                    className="text-4xl lg:text-6xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Empowering Rides, Connecting Women
                </motion.h1>

                <motion.p
                    className="text-lg lg:text-2xl text-white mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Join our carpool services and make commuting safer, eco-friendly, and more enjoyable.
                </motion.p>
                 
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <Link to="/search" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 ease-in-out">
                        Search a Ride
                    </Link>
                    <Link to="/publish" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-600 transition-all duration-300 ease-in-out">
                        Publish a Ride
                    </Link>
                </div>

                {/* Features Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <div className="text-4xl text-teal-500 mb-4">
                            <FaHandsHelping />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Convenient Rides</h2>
                        <p className="text-gray-700 text-center">
                            Easily find and book rides that fit your schedule and location.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <div className="text-4xl text-pink-500 mb-4">
                            <FaLock />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Safe for Women</h2>
                        <p className="text-gray-700 text-center">
                            Enjoy secure rides with our focus on women’s safety and comfort.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        <div className="text-4xl text-purple-500 mb-4">
                            <FaRegSmile />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Community</h2>
                        <p className="text-gray-700 text-center">
                            Connect with a community of like-minded individuals.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
