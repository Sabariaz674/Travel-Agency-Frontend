// FlightCard.js
import React from 'react';

const FlightCard = ({ airline, duration, time, stops, layover, price, tripType }) => {
  return (
    <div className="bg-white shadow-md rounded-lg lg:p-1 p-4 flex flex-col sm:flex-row justify-between sm:items-start gap-4">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={airline.logo}
          alt={airline.name}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
        />
        <div className="flex flex-col overflow-hidden">
          <span className="text-sm  truncate">{duration}</span>
          <span className="text-base sm:text-lg md:text-xl text-gray-600 lg:mr-20 ">{airline.name}</span>
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-[140px] lg:mr-10">
        <span className="text-sm font-semibold">{time}</span>
      </div>

      <div className="flex flex-col w-full sm:w-[130px] lg:mr-10">
        <span className="text-sm font-semibold">{stops}</span>
        <span className="text-xs text-gray-500">{layover}</span>
      </div>

      <div className="flex flex-col items-start sm:items-end w-full sm:w-[100px] lg:mr-10">
        <span className="text-base font-bold text-gray-800">{price}</span>
        <span className="text-xs text-blue-600">{tripType}</span>
      </div>
    </div>
  );
};

export default FlightCard;
