// sellerQuestionsStep2.tsx
import React from "react";

export const sellerQuestionsStep2 = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-green-700">
      2. Tell us about your business's financials.
    </h3>
    <div className="mb-6">
      <label htmlFor="businessRevenue" className="block text-gray-700 text-sm font-bold mb-2">
        Current Annual Revenue:
      </label>
      <select
        id="businessRevenue"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
      >
        <option value="">Select revenue</option>
        <option value="lt1M">Less than $1M</option>
        <option value="1M-5M">$1M - $5M</option>
        <option value="5M-20M">$5M - $20M</option>
        <option value="20M+">$20M+</option>
      </select>
    </div>
    <div className="mb-6">
      <label htmlFor="profitability" className="block text-gray-700 text-sm font-bold mb-2">
        Is your business profitable?
      </label>
      <div className="mt-2 space-y-2">
        <label className="inline-flex items-center">
          <input type="radio" name="profit" value="yes" className="form-radio text-green-700" />
          <span className="ml-2 text-gray-700">Yes</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input type="radio" name="profit" value="no" className="form-radio text-green-700" />
          <span className="ml-2 text-gray-700">No</span>
        </label>
      </div>
    </div>
  </>
);
