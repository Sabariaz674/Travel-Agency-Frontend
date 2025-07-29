import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { places } from '../../data';  // Import your places data

const PlacesToStay = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Find <span className="text-[#3B82F6]">places to stay</span> in Japan
        </h2>
        flightlistingright     flightListingRight
        {/* Link to China Hotels page */}
        <Link to="/china-hotels" className="text-sm text-blue-600 font-medium flex items-center gap-1">
          View All <span className="text-lg">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={place.image}
              alt={place.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-[#3B82F6] mb-1">
                {place.title}
              </h3>
              <p className="text-sm text-gray-600">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacesToStay;
