// sellerQuestionsStep1.tsx
import React from "react";

export const sellerQuestionsStep1 = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-green-700">1. Tell us about your business.</h3>
    {/* Common questions about company name, industry, etc. */}
    <div className="mb-6">
      <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">
        Business Name:
      </label>
      <input
        type="text"
        id="businessName"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., Acme Innovations"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="businessWebsite" className="block text-gray-700 text-sm font-bold mb-2">
        Business Website:
      </label>
      <input
        type="url"
        id="businessWebsite"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., https://www.acme.com"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="sellerIndustry" className="block text-gray-700 text-sm font-bold mb-2">
        Industry:
      </label>
      <input
        type="text"
        id="sellerIndustry"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., SaaS, E-commerce, Marketing"
      />
    </div>
  </>
);
