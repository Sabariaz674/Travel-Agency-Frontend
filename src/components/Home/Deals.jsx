import React from 'react';
import { deals } from '../../data';


const Deals = () => {
  return (
    <section className="px-6 md:px-20 py-12 pt-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Find your next adventure with these Countries <span className="text-[#1e3a8a]">flight deals</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-[260px] object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-sm">
                {deal.title}, <span className="text-indigo-600">{deal.location}</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">{deal.subtitle}</p>
              <p className="text-right font-semibold text-gray-700 mt-2">{deal.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;
