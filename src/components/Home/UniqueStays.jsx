import React from "react";
import { stays } from '../../data';
const UniqueStays = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stays.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={place.image}
              alt={place.location}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                {place.title}{" "}
                <span className="text-teal-500">{place.location}</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">{place.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
         <div className="border-t border-b border-red-500 mx-auto w-1/30 my-4"></div> {/* Red line with controlled width */}
          <button className="bg-indigo-600 text-white px-12 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition">
              Explore more stays
         </button>
         <div className="border-t border-b border-red-500 mx-auto w-1/30 my-4"></div> {/* Red line with controlled width */}
         
       </div>
    </div>
    
  );
};

export default UniqueStays;
