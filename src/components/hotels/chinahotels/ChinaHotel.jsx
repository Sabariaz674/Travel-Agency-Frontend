import React from 'react';

import {morePlaces} from '../../../data'

const MoreHotels = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        More Places to Stay
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {morePlaces.map((place, index) => (
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

export default MoreHotels;
