import React, { useState } from 'react';

    const PublishPage = () => {
    const [departureLocation, setDepartureLocation] = useState('');
    const [arrivalLocation, setArrivalLocation] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the publish logic here
        console.log({ departureLocation, arrivalLocation, date, passengers, price });
    };

    return (
        <div className="bg-gradient-to-r from-teal-400 via-indigo-500 to-blue-600 min-h-screen pt-16 flex items-center justify-center">
            <div className="bg-zinc-100 shadow-lg rounded-lg p-8 max-w-4xl w-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Publish a Ride
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <label htmlFor="departureLocation" className="block text-sm font-medium text-gray-700 mb-1">
                            Departure Location
                        </label>
                        <input
                            type="text"
                            id="departureLocation"
                            value={departureLocation}
                            onChange={(e) => setDepartureLocation(e.target.value)}
                            placeholder="Enter departure location"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="arrivalLocation" className="block text-sm font-medium text-gray-700 mb-1">
                            Arrival Location
                        </label>
                        <input
                            type="text"
                            id="arrivalLocation"
                            value={arrivalLocation}
                            onChange={(e) => setArrivalLocation(e.target.value)}
                            placeholder="Enter arrival location"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                            Number of Passengers
                        </label>
                        <input
                            type="number"
                            id="passengers"
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            placeholder="Enter number of passengers"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            min="1"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                            Price of Ride
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter price of the ride"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            min="0"
                            step="10"
                            required
                        />
                    </div>
                    <div className="col-span-2 text-center mt-6">
                        <button
                            type="submit"
                            className="px-8 py-3 text-lg font-semibold text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 ease-in-out"
                        >
                            Publish Ride
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PublishPage;
