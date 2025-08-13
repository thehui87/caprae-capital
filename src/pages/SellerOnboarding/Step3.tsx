// sellerQuestionsStep3.tsx
import React from "react";

export const sellerQuestionsStep3 = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-green-700">3. Why are you selling?</h3>
    <div className="mb-6">
      <label htmlFor="reasonForSale" className="block text-gray-700 text-sm font-bold mb-2">
        Primary Reason for Selling:
      </label>
      <textarea
        id="reasonForSale"
        rows={3}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., Retirement, strategic pivot, new venture..."
      ></textarea>
    </div>
    <div className="mb-6">
      <label htmlFor="employees" className="block text-gray-700 text-sm font-bold mb-2">
        Number of Employees:
      </label>
      <input
        type="number"
        id="employees"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., 10"
      />
    </div>
  </>
);
