// buyerQuestionsStep3.tsx
import React from "react";

export const buyerQuestionsStep3 = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-purple-700">
      3. What is your investment strategy?
    </h3>
    <div className="mb-6">
      <label htmlFor="investmentThesis" className="block text-gray-700 text-sm font-bold mb-2">
        Your Investment Thesis/Strategy:
      </label>
      <textarea
        id="investmentThesis"
        rows={3}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., Seeking profitable SaaS businesses for strategic expansion..."
      ></textarea>
    </div>
    <div className="mb-6">
      <label htmlFor="preferredLocation" className="block text-gray-700 text-sm font-bold mb-2">
        Preferred Geographic Location of Target:
      </label>
      <input
        type="text"
        id="preferredLocation"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., North America, Europe, Remote"
      />
    </div>
  </>
);
