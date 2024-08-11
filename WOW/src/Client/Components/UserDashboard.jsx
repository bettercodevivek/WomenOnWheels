import React, { useState } from 'react';
import { FaCamera, FaEdit, FaCar, FaInfoCircle } from 'react-icons/fa';

const UserDashboard = () => {
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);
    const [isAddVehicleOpen, setIsAddVehicleOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState('/default-profile.png');
    const [userDetails, setUserDetails] = useState({
        mobile: '+1234567890',
        email: 'user@example.com',
        bio: 'Hello! I am a user of this platform.',
    });
    const [vehicle, setVehicle] = useState({
        brand: '',
        color: '',
        type: '',
        age: '',
    });

    const handleAddVehicle = () => {
        // Handle adding vehicle logic here
        console.log(vehicle);
        setIsAddVehicleOpen(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
                {/* Profile Section */}
                <div className="flex items-center mb-8">
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover mr-4"
                    />
                    <div className="flex flex-col">
                        <button
                            onClick={() => setIsEditProfileOpen(true)}
                            className="flex items-center text-teal-500 hover:text-teal-600"
                        >
                            <FaCamera className="w-5 h-5 mr-2" /> Edit Profile Picture
                        </button>
                        <button
                            onClick={() => setIsEditDetailsOpen(true)}
                            className="flex items-center text-teal-500 hover:text-teal-600 mt-2"
                        >
                            <FaEdit className="w-5 h-5 mr-2" /> Edit Personal Details
                        </button>
                    </div>
                </div>

                {/* User Details Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">User Details</h3>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <p className="mb-2"><strong>Mobile:</strong> {userDetails.mobile}</p>
                        <p><strong>Email:</strong> {userDetails.email}</p>
                    </div>
                </div>

                {/* About You Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">About You</h3>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <p>{userDetails.bio}</p>
                    </div>
                </div>

                {/* Add Vehicle Section */}
                <div>
                    <button
                        onClick={() => setIsAddVehicleOpen(true)}
                        className="flex items-center text-teal-500 hover:text-teal-600 mb-4"
                    >
                        <FaCar className="w-5 h-5 mr-2" /> Add Your Vehicle
                    </button>
                    {isAddVehicleOpen && (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Add Vehicle</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Car Brand</label>
                                    <input
                                        type="text"
                                        value={vehicle.brand}
                                        onChange={(e) => setVehicle({ ...vehicle, brand: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Car Color</label>
                                    <input
                                        type="text"
                                        value={vehicle.color}
                                        onChange={(e) => setVehicle({ ...vehicle, color: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Car Type</label>
                                    <input
                                        type="text"
                                        value={vehicle.type}
                                        onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Car Age (Years)</label>
                                    <input
                                        type="number"
                                        value={vehicle.age}
                                        onChange={(e) => setVehicle({ ...vehicle, age: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                                    />
                                </div>
                                <div className="text-center">
                                    <button
                                        onClick={handleAddVehicle}
                                        className="px-6 py-3 text-lg font-semibold text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 ease-in-out"
                                    >
                                        Add Vehicle
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
