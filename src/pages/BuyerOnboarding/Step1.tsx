// buyerQuestionsStep1.tsx
import React from "react";

// Assuming commonQuestions is defined elsewhere and contains basic company info fields
// export const commonQuestions = (...)

export const buyerQuestionsStep1 = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-purple-700">1. Tell us about your company.</h3>
    {/* Common questions about company name, industry, etc. */}
    {/* {commonQuestions} */}
    <div className="mb-6">
      <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
        Company Name:
      </label>
      <input
        type="text"
        id="companyName"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., Caprae Capital"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="companyWebsite" className="block text-gray-700 text-sm font-bold mb-2">
        Company Website:
      </label>
      <input
        type="url"
        id="companyWebsite"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., https://www.caprae.com"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="buyerIndustry" className="block text-gray-700 text-sm font-bold mb-2">
        Industry:
      </label>
      <input
        type="text"
        id="buyerIndustry"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., Technology, Finance, Healthcare"
      />
    </div>
  </>
);
