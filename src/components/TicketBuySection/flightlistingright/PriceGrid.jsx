import React from 'react';

const columnHeaders = ['2/12', '2/13', '2/14', '2/15', '2/16', '2/17'];

const priceGridData = [
  { date: '3/7', prices: [837, 592, 624, 1308, 837, 837] },
  { date: '3/8', prices: [837, 837, 592, 837, 1308, 1308] },
  { date: '3/9', prices: [624, 624, 592, 592, 592, 624] },
  { date: '3/10', prices: [1308, 624, 624, 837, 837, 837] },
  { date: '3/11', prices: [592, 624, 1308, 837, 837, 624] },
];

const PriceGrid = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-22">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        Price grid (flexible dates)
      </h3>

      {/* Header Row */}
      <div className="grid grid-cols-[80px_repeat(6,minmax(0,1fr))] gap-2 text-sm text-gray-600 font-medium mb-1">
        <div></div>
        {columnHeaders.map((header, i) => (
          <div key={i} className="text-center">{header}</div>
        ))}
      </div>

      {/* Price Rows */}
      {priceGridData.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-[80px_repeat(6,minmax(0,1fr))] gap-2 text-sm text-gray-700 mb-1"
        >
          <div className="text-gray-500 font-medium">{row.date}</div>
          {row.prices.map((price, i) => (
            <div key={i} className="text-center">${price}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PriceGrid;
