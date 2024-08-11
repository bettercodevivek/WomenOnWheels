import React, { useState } from 'react';

const SearchPage = () => {
    const [departureLocation, setDepartureLocation] = useState('');
    const [arrivalLocation, setArrivalLocation] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the search logic here
        console.log({ departureLocation, arrivalLocation, date, passengers });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-screen-lg w-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Search for a Ride
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="departureLocation" className="text-sm font-medium text-gray-700 mb-1">
                            Departure Location
                        </label>
                        <input
                            type="text"
                            id="departureLocation"
                            value={departureLocation}
                            onChange={(e) => setDepartureLocation(e.target.value)}
                            placeholder="Enter departure location"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="arrivalLocation" className="text-sm font-medium text-gray-700 mb-1">
                            Arrival Location
                        </label>
                        <input
                            type="text"
                            id="arrivalLocation"
                            value={arrivalLocation}
                            onChange={(e) => setArrivalLocation(e.target.value)}
                            placeholder="Enter arrival location"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-1">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="passengers" className="text-sm font-medium text-gray-700 mb-1">
                            Number of Passengers
                        </label>
                        <input
                            type="number"
                            id="passengers"
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            placeholder="Enter number of passengers"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            min="1"
                            required
                        />
                    </div>
                    <div className="col-span-full text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 text-lg font-semibold text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 ease-in-out"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchPage;
