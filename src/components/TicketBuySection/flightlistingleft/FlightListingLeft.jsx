import React, { useState } from 'react';
import { flights } from '../../../data';
import flightMap from '../../../assets/flightmap.png'

const FlightListing = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () => {
    if (visibleCount < flights.length) {
      setVisibleCount(flights.length); // show all
    } else {
      setVisibleCount(3); // show only 3
      window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top
    }
  };

  const isShowingAll = visibleCount >= flights.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6 text-left">
        Choose a <span className="text-[#1e3a8a]">departing</span> flight
      </h2>

      <div className="space-y-6">
        {flights.slice(0, visibleCount).map((flight, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
              {/* Logo */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={flight.logo}
                  alt={flight.airline}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{flight.duration}</span>
                  <span className="text-xs text-gray-600">{flight.airline}</span>
                </div>
              </div>

              {/* Departure Time */}
              <div className="flex flex-col w-full md:w-[140px]">
                <span className="text-sm font-semibold">{flight.departure}</span>
              </div>

              {/* Stop Info */}
              <div className="flex flex-col w-full md:w-[130px]">
                <span className="text-sm font-semibold">{flight.stop}</span>
                <span className="text-xs text-gray-500">{flight.stopDetails}</span>
              </div>

              {/* Price Info */}
              <div className="flex flex-col items-start md:items-end w-full md:w-[100px]">
                <span className="text-base font-bold text-gray-800">{flight.price}</span>
                <span className="text-xs text-blue-600">{flight.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleToggle}
          className="text-[#1e3a8a] font-semibold py-2 px-6 border border-[#1e3a8a]  hover:bg-[#1e3a8a] hover:text-white transition"
        >
          {isShowingAll ? 'Show less flights' : 'Show all flights'}
        </button>
      </div>
      <div className="mt-10 w-full">
        <img
          src={flightMap}
          alt="Flight Route"
          className="w-full max-h-52 object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default FlightListing;
