// Insights.tsx
import React from "react";

const Insights = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-[calc(100ch-168px)]">
      <h1 className="text-4xl font-bold text-primary mb-8">Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Line Chart */}
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Trends</h2>
          {/* Placeholder for a chart library like Chart.js or Recharts */}
          <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
            [Line Chart Placeholder]
          </div>
        </div>

        {/* Card 2: Pie Chart */}
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Asset Distribution</h2>
          <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
            [Pie Chart Placeholder]
          </div>
        </div>

        {/* Card 3: Summary Text */}
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Key Metrics Summary</h2>
          <p className="text-gray-600">
            Here you can display a summary of key metrics, such as total portfolio value, recent
            gains, and other important data points. This section provides a quick overview for the
            user.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
