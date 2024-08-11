import React from 'react';
import { FaRegHandshake, FaCar, FaLeaf, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-24 px-4">
            <div className="max-w-screen-lg mx-auto">
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        How It Works
                    </motion.h1>
                    <p className="text-lg text-gray-600">
                        Discover how our carpool services make your commute easier and more enjoyable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="text-4xl text-teal-500 mb-4">
                            <FaRegHandshake />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                        <p className="text-gray-700">
                            Create an account to start using our carpool services and join our community.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <div className="text-4xl text-teal-500 mb-4">
                            <FaCar />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Find a Ride</h3>
                        <p className="text-gray-700">
                            Search for available rides based on your departure and arrival locations.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <div className="text-4xl text-teal-500 mb-4">
                            <FaLeaf />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                        <p className="text-gray-700">
                            Enjoy a greener commute by carpooling and reducing your carbon footprint.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <div className="text-4xl text-teal-500 mb-4">
                            <FaUsers />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
                        <p className="text-gray-700">
                            Connect with other riders and share your journey to make commuting more enjoyable.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
