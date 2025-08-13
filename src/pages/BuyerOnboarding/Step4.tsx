// buyerQuestionsStep4.tsx
import React from "react";

export const buyerQuestionsStep4 = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-purple-700">4. Final details.</h3>
    <div className="mb-6">
      <label htmlFor="dueDiligenceTeam" className="block text-gray-700 text-sm font-bold mb-2">
        Do you have a due diligence team ready?
      </label>
      <div className="mt-2 space-y-2">
        <label className="inline-flex items-center">
          <input type="radio" name="diligence" value="yes" className="form-radio text-purple-700" />
          <span className="ml-2 text-gray-700">Yes</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input type="radio" name="diligence" value="no" className="form-radio text-purple-700" />
          <span className="ml-2 text-gray-700">No</span>
        </label>
      </div>
    </div>
    <div className="mb-6">
      <label htmlFor="timeline" className="block text-gray-700 text-sm font-bold mb-2">
        Estimated acquisition timeline:
      </label>
      <select
        id="timeline"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
      >
        <option value="">Select timeline</option>
        <option value="3-6months">3-6 Months</option>
        <option value="6-12months">6-12 Months</option>
        <option value="12months+">12+ Months</option>
      </select>
    </div>
  </>
);
