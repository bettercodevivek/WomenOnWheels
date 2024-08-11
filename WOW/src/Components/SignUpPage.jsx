import React, { useState } from 'react';

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password validation
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters long and include at least one number and one special character.');
            return;
        }

        setPasswordError('');
        // Handle the signup logic here
        console.log({ firstName, lastName, email, dateOfBirth, mobileNumber, password });
    };

    return (
        <div className="bg-gray-100 min-h-screen pt-16 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Sign Up
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Enter your first name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Enter your last name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                        </div>
                    </div>
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
                        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
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
                        {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
                    </div>
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="px-8 py-3 text-lg font-semibold text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 ease-in-out"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
