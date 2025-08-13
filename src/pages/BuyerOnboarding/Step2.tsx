// buyerQuestionsStep2.tsx
import React from "react";

export const buyerQuestionsStep2 = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-purple-700">
      2. Tell us about your ideal target.
    </h3>
    <div className="mb-6">
      <label htmlFor="acquisitionBudget" className="block text-gray-700 text-sm font-bold mb-2">
        Acquisition Budget Range:
      </label>
      <select
        id="acquisitionBudget"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
      >
        <option value="">Select budget</option>
        <option value="1M-5M">$1M - $5M</option>
        <option value="5M-20M">$5M - $20M</option>
        <option value="20M-50M">$20M - $50M</option>
        <option value="50M+">$50M+</option>
      </select>
    </div>
    <div className="mb-6">
      <label htmlFor="revenueTarget" className="block text-gray-700 text-sm font-bold mb-2">
        Target Seller Revenue (Annual):
      </label>
      <select
        id="revenueTarget"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
      >
        <option value="">Select revenue target</option>
        <option value="lt1M">Less than $1M</option>
        <option value="1M-5M">$1M - $5M</option>
        <option value="5M-20M">$5M - $20M</option>
        <option value="20M+">$20M+</option>
      </select>
    </div>
  </>
);
