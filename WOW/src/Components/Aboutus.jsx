import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-16 pb-12 flex flex-col items-center">
            {/* Header */}
            <header className="text-center mb-16 px-6 md:px-12">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Us
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Discover our mission, values, and meet the incredible team that drives our vision forward.
                </motion.p>
            </header>

            {/* Mission Section */}
            <section className="bg-gradient-to-r from-teal-400 via-indigo-500 to-blue-600 text-white shadow-lg rounded-lg p-8 md:p-12 max-w-5xl w-full mb-12">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Mission
                </motion.h2>
                <motion.p
                    className="text-lg md:text-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    We aim to revolutionize commuting by offering safe, eco-friendly carpool solutions that foster community and reduce our carbon footprint.
                </motion.p>
            </section>

            {/* Values Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-5xl w-full mb-12">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Values
                </motion.h2>
                <motion.ul
                    className="list-disc list-inside text-lg md:text-xl text-gray-700 space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <li><strong>Safety:</strong> Prioritizing user safety with thorough verification and real-time tracking.</li>
                    <li><strong>Community:</strong> Connecting individuals through a supportive network.</li>
                    <li><strong>Sustainability:</strong> Promoting eco-friendly travel to reduce environmental impact.</li>
                    <li><strong>Innovation:</strong> Leveraging technology to continually enhance our services.</li>
                </motion.ul>
            </section>

            {/* Team Section */}
            <section className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-5xl w-full">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Meet Our Team
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                        <p className="text-gray-700">CEO & Founder</p>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
                        <p className="text-gray-700">CTO</p>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Alice Johnson</h3>
                        <p className="text-gray-700">Lead Designer</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
