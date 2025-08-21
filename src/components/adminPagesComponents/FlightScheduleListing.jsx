// src/components/adminPagesComponents/FlightScheduleListing.jsx
import React, { useState, useEffect } from 'react';
import FlightCard from '../common/cards/FlightScheduleCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../../redux/slices/flightSlice';

// ✅ Accept the onUpdateFlight prop here
const FlightScheduleListing = ({ onDeleteFlight, onUpdateFlight }) => {
    const dispatch = useDispatch();
    const { flights, status, addFlightStatus, deleteFlightStatus,updateFlightStatus } = useSelector((state) => state.flights);
    const [visibleCount, setVisibleCount] = useState(3);
    
    useEffect(() => {
    if (status === 'idle' || addFlightStatus === 'succeeded' || deleteFlightStatus === 'succeeded' || updateFlightStatus === 'succeeded') {
        dispatch(fetchFlights());
    }
}, [dispatch, status, addFlightStatus, deleteFlightStatus, updateFlightStatus]);


    const handleToggle = () => {
        if (visibleCount < flights.length) {
            setVisibleCount(flights.length);
        } else {
            setVisibleCount(3);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const isShowingAll = visibleCount >= flights.length;

    if (status === 'loading') {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-xl text-gray-500">Loading flights...</p>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-xl text-red-500">Failed to fetch flights. Please try again later.</p>
            </div>
        );
    }

    if (flights.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-2xl font-bold text-gray-600">No flights found.</p>
                <p className="text-md text-gray-500 mt-2">Add a new flight to get started!</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="space-y-6">
                {flights.slice(0, visibleCount).map((flight) => (
                    <div key={flight._id} className="relative">
                        <FlightCard
                            airline={flight.airline}
                            logo={flight.logo}
                            flightCode={flight.flightCode}
                            duration={flight.duration}
                            departure={flight.departure}
                            stop={flight.stop}
                            price={flight.price}
                            type={flight.type}
                            meal={flight.meal}
                            baggage={flight.baggage}
                            lax={flight.lax}
                            laf={flight.laf}
                        />
                        {/* The Delete and Update Buttons */}
                        <div className="absolute top-4 right-4 z-10 space-x-2">
                             {/* ✅ New Update Button */}
                             <button
                                onClick={() => onUpdateFlight(flight)}
                                className="bg-blue-500 text-white p-2 rounded-md shadow-lg hover:bg-blue-600 transition"
                                title="Update Flight"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => onDeleteFlight(flight._id)}
                                className="bg-red-500 text-white p-2 rounded-md shadow-lg hover:bg-red-600 transition"
                                title="Delete Flight"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 112 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
                <p className="text-gray-600 font-medium mb-4 sm:mb-0">
                    Showing {Math.min(visibleCount, flights.length)} of {flights.length} results
                </p>
                {flights.length > 3 && (
                    <button
                        onClick={handleToggle}
                        className="text-[#1e3a8a] font-semibold py-2 px-6 border border-[#1e3a8a] rounded-md hover:bg-[#1e3a8a] hover:text-white transition"
                    >
                        {isShowingAll ? 'Show less flights' : 'Show all flights'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default FlightScheduleListing;
