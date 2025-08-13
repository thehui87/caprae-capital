// sellerQuestionsStep4.tsx
import React from "react";

export const sellerQuestionsStep4 = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-green-700">4. What is your ideal exit?</h3>
    <div className="mb-6">
      <label htmlFor="valuationExpectation" className="block text-gray-700 text-sm font-bold mb-2">
        Valuation Expectation:
      </label>
      <input
        type="text"
        id="valuationExpectation"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., Seeking 3-5x annual revenue"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="teamInvolvement" className="block text-gray-700 text-sm font-bold mb-2">
        Post-sale team involvement:
      </label>
      <select
        id="teamInvolvement"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
      >
        <option value="">Select option</option>
        <option value="stay">Stay with the business</option>
        <option value="transition">Assist with a transition period</option>
        <option value="exit">Exit immediately</option>
      </select>
    </div>
  </>
);
