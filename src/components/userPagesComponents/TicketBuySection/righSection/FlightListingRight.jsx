import React from 'react';
import PriceGrid from './PriceGrid';
import PriceHistoryChart from './PriceHistoryChart';
import PriceRating from './PriceRating';

const PriceSection = () => {
  return (
    <div className="space-y-6">
      {/* <PriceGrid /> */}
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Price history</h3>
      <PriceHistoryChart />



      <h3 className="text-lg font-semibold mb-3 text-gray-800">Price rating</h3>
      <PriceRating />

    </div>
  );
};

export default PriceSection;
