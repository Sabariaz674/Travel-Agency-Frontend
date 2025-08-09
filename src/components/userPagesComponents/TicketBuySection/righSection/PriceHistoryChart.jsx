import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const chartData = [
  { day: 'Mon', price: 750 },
  { day: 'Tue', price: 950 },
  { day: 'Wed', price: 850 },
  { day: 'Thu', price: 800 },
  { day: 'Fri', price: 720 },
];

const PriceHistoryChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md sm:mb-8 mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Price history</h3>
      {/* Make the container responsive */}
      <div className="h-60 sm:h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#1e3a8a"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceHistoryChart;
