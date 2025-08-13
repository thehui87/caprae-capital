// components/SellerProfileDetail.tsx
import React from "react";
import type { SellerProfile } from "./SellerProfileCard"; // Re-use the interface

interface SellerProfileDetailProps {
  seller: SellerProfile;
  onClose: () => void;
}

const COLORS = {
  primary: "#4B3F72",
  secondary: "#6A5ACD",
  background: "#F7F7F7",
  card: "#FFFFFF",
  text: "#333333",
  lightText: "#666666",
};

const SellerProfileDetail: React.FC<SellerProfileDetailProps> = ({ seller, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl h-full md:max-h-[90vh] overflow-y-auto relative p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-primary mb-4">{seller.businessName}</h2>
        <p className="text-lg text-secondary mb-6">Industry: {seller.industry}</p>

        {/* Business Overview Section */}
        <div className="mb-8 border-b pb-4 border-gray-200">
          <h3 className="text-2xl font-bold text-text mb-3">Business Overview</h3>
          <p className="text-lightText leading-relaxed">{seller.businessDescription}</p>
        </div>

        {/* Key Financials */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 border-b pb-4 border-gray-200">
          <div>
            <h4 className="font-semibold text-text mb-1">Annual Revenue:</h4>
            <p className="text-lightText">{seller.annualRevenue}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Valuation Expectation:</h4>
            <p className="text-lightText">{seller.valuationExpectation}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Number of Employees:</h4>
            <p className="text-lightText">{seller.employees}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Profitability:</h4>
            <p className="text-lightText">{seller.isProfitable ? "Yes" : "No"}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Reason for Selling:</h4>
            <p className="text-lightText">{seller.reasonForSale}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Post-Sale Team Involvement:</h4>
            <p className="text-lightText">{seller.teamInvolvement}</p>
          </div>
        </div>

        {/* Key Highlights */}
        {seller.keyHighlights && seller.keyHighlights.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-text mb-3">Key Highlights</h3>
            <ul className="list-disc list-inside text-lightText space-y-1">
              {seller.keyHighlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact Information (if available) */}
        {seller.contactEmail && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-text mb-3">Contact Information</h3>
            <p className="text-lightText">
              {seller.contactEmail && `Email: ${seller.contactEmail}`}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Note: Full contact details may be shared upon mutual acceptance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerProfileDetail;
