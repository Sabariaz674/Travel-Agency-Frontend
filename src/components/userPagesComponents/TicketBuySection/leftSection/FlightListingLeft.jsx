// FlightListing.js
import React, { useState } from 'react';
import FlightCard from '../../../common/cards/FlightCard'; // Import the FlightCard component
import { flights } from '../../../../data';  // Assuming you have a `flights` data source

const FlightListing = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () => {
    if (visibleCount < flights.length) {
      setVisibleCount(flights.length); // Show all flights
    } else {
      setVisibleCount(3); // Show only 3 flights
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
  };

  const isShowingAll = visibleCount >= flights.length;

  return (


    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ml-0 xl:ml-10">


      <div className="space-y-6">
        {flights.slice(0, visibleCount).map((flight, index) => (
          <FlightCard
            key={index}
            airline={{ name: flight.airline, logo: flight.logo }}
            duration={flight.duration}
            time={flight.departure}
            stops={flight.stop}
            layover={flight.stopDetails}
            price={flight.price}
            tripType={flight.type}
          />
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleToggle}
          className="text-[#1e3a8a] font-semibold py-2 px-6 border border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition"
        >
          {isShowingAll ? 'Show less flights' : 'Show all flights'}
        </button>
      </div>
    </div>
  );
};

export default FlightListing;
