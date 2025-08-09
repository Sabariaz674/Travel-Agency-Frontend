import React from 'react';

const PriceRating = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 text-sm text-gray-700 space-y-2 shadow-sm sm:p-6 md:p-8">
      <div className="flex items-center gap-3">
        <p className="font-semibold text-gray-800 text-base sm:text-lg md:text-xl">
          Price rating
        </p>
        <span className="bg-teal-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          Buy soon
        </span>
      </div>
      <p className="text-base sm:text-sm md:text-base">
        We recommend booking soon. The average cost of this flight is <strong>$750</strong>, but
        could rise <strong>18%</strong> to <strong>$885</strong> in two weeks.
      </p>
      <p className="text-xs sm:text-sm md:text-sm text-gray-400">
        Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.
      </p>
    </div>
  );
};

export default PriceRating;
