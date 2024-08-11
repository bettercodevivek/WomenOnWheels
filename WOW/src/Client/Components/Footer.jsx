import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    {/* About Section */}
                    <div className="mb-8 lg:mb-0">
                        <h2 className="text-2xl font-bold mb-4">WomenOnWheels</h2>
                        <p className="text-gray-400 mb-4">
                            Empowering women through safe, eco-friendly carpool services. Join us in making commuting safer and more enjoyable.
                        </p>
                        <Link to="/about" className="text-teal-500 hover:underline">Learn More</Link>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8 lg:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-teal-500">Home</Link></li>
                            <li><Link to="/search" className="hover:text-teal-500">Search a Ride</Link></li>
                            <li><Link to="/publish" className="hover:text-teal-500">Publish a Ride</Link></li>
                            <li><Link to="/contact" className="hover:text-teal-500">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
                                <FaFacebookF className="text-2xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
                                <FaLinkedinIn className="text-2xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
                                <FaInstagram className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-800 text-gray-400 py-4 text-center mt-12">
                <p>&copy; {new Date().getFullYear()} WomenOnWheels. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
