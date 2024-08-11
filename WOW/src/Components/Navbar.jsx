import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiEye, FiBox, FiMail } from 'react-icons/fi';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="relative">
            <nav className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
                <div className="flex items-center justify-between mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center space-x-4">
                        <img
                            src="https://i.postimg.cc/1tt2wSYZ/LHD-Human-Care-Logo-1.webp"
                            className="h-12 lg:h-16"
                            alt="Logo"
                        />
                        <div className="hidden md:flex flex-col text-white">
                            <div className="text-xl font-bold">WomenOnWheels</div>
                            <div className="text-sm">Crafting Health, Shaping Future</div>
                        </div>
                    </Link>

                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="lg:hidden text-white focus:outline-none"
                        aria-label="toggle menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <ul className="flex space-x-6 items-center text-white">
                            <li>
                                <NavLink to='/'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full transition-colors duration-300 ${isActive ? "bg-white text-teal-500" : "hover:bg-white hover:text-teal-500"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full transition-colors duration-300 ${isActive ? "bg-white text-teal-500" : "hover:bg-white hover:text-teal-500"}`
                                    }
                                >
                                    Corporate Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/vision'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full transition-colors duration-300 ${isActive ? "bg-white text-teal-500" : "hover:bg-white hover:text-teal-500"}`
                                    }
                                >
                                    Our Vision
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/products'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full transition-colors duration-300 ${isActive ? "bg-white text-teal-500" : "hover:bg-white hover:text-teal-500"}`
                                    }
                                >
                                    Our Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full transition-colors duration-300 ${isActive ? "bg-white text-teal-500" : "hover:bg-white hover:text-teal-500"}`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 z-40 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="fixed inset-0 bg-black bg-opacity-70" onClick={toggleSidebar}></div>
                <div className="fixed inset-y-0 left-0 w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-6 border-b border-gray-200">
                            <img
                                src="https://i.postimg.cc/5yzJFyrz/LHD-Human-Care-Logo-1-removebg-preview.png"
                                className="h-12"
                                alt="Sidebar Logo"
                            />
                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className="text-gray-500 hover:text-gray-900"
                                aria-label="close menu"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col p-6 space-y-4">
                            <li>
                                <NavLink to='/home'
                                    onClick={toggleSidebar}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 py-3 px-6 rounded-lg transition-colors duration-300 ${isActive ? "bg-teal-500 text-white" : "text-gray-900 hover:bg-teal-100"}`
                                    }
                                >
                                    <FiHome className="w-6 h-6" /> <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile'
                                    onClick={toggleSidebar}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 py-3 px-6 rounded-lg transition-colors duration-300 ${isActive ? "bg-teal-500 text-white" : "text-gray-900 hover:bg-teal-100"}`
                                    }
                                >
                                    <FiUser className="w-6 h-6" /> <span>Corporate Profile</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/vision'
                                    onClick={toggleSidebar}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 py-3 px-6 rounded-lg transition-colors duration-300 ${isActive ? "bg-teal-500 text-white" : "text-gray-900 hover:bg-teal-100"}`
                                    }
                                >
                                    <FiEye className="w-6 h-6" /> <span>Our Vision</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/products'
                                    onClick={toggleSidebar}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 py-3 px-6 rounded-lg transition-colors duration-300 ${isActive ? "bg-teal-500 text-white" : "text-gray-900 hover:bg-teal-100"}`
                                    }
                                >
                                    <FiBox className="w-6 h-6" /> <span>Our Products</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'
                                    onClick={toggleSidebar}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 py-3 px-6 rounded-lg transition-colors duration-300 ${isActive ? "bg-teal-500 text-white" : "text-gray-900 hover:bg-teal-100"}`
                                    }
                                >
                                    <FiMail className="w-6 h-6" /> <span>Contact Us</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
