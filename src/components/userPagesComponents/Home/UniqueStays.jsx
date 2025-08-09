import React from "react";
import { stays } from "../../../data";
import Card from "../../common/cards/HotelCard";

const UniqueStays = () => {
  return (
    <section className="px-6 md:px-20 py-12 pt-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Discover <span className="text-[#1e3a8a]">Unique Stays</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stays.map((place, index) => (
          <Card
            key={index}
            image={place.image}
            title={place.title}
            location={place.location}
            description={place.description}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <div className="border-t border-red-500 w-20 mx-auto my-4"></div>
        <button className="bg-indigo-600 text-white px-12 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition">
          Explore more stays
        </button>
        <div className="border-t border-red-500 w-20 mx-auto my-4"></div>
      </div>
    </section>
  );
};

export default UniqueStays;
