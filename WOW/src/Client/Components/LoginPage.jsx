import React, { useState } from 'react';

const LoginPage = () => {
    const [loginMethod, setLoginMethod] = useState('email');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ loginMethod, email, mobileNumber, password });
    };

    return (
        <div className="bg-gray-100 min-h-screen pt-16 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center space-x-4 mb-6">
                        <button
                            type="button"
                            onClick={() => setLoginMethod('email')}
                            className={`py-2 px-4 text-sm font-semibold rounded-lg ${loginMethod === 'email' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'} transition-all duration-300`}
                        >
                            Email
                        </button>
                        <button
                            type="button"
                            onClick={() => setLoginMethod('mobile')}
                            className={`py-2 px-4 text-sm font-semibold rounded-lg ${loginMethod === 'mobile' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'} transition-all duration-300`}
                        >
                            Mobile Number
                        </button>
                    </div>

                    {loginMethod === 'email' ? (
                        <>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    placeholder="+1 123-456-7890"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                    required
                                />
                            </div>
                        </>
                    )}

                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="px-8 py-3 text-lg font-semibold text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 ease-in-out"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
