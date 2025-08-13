// components/BuyerProfileDetail.tsx
import React from "react";
import type { BuyerProfile } from "./BuyerProfileCard"; // Re-use the interface

interface BuyerProfileDetailProps {
  buyer: BuyerProfile;
  onClose: () => void; // Function to close the detail view
}

const COLORS = {
  primary: "#4B3F72",
  secondary: "#6A5ACD",
  background: "#F7F7F7",
  card: "#FFFFFF",
  text: "#333333",
  lightText: "#666666",
};

const BuyerProfileDetail: React.FC<BuyerProfileDetailProps> = ({ buyer, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-50 bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-auto">
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

        <h2 className="text-3xl font-bold text-primary mb-4">{buyer.companyName}</h2>
        <p className="text-lg text-secondary mb-6">Investment Focus: {buyer.investmentThesis}</p>

        {/* Overview Section */}
        <div className="mb-8 border-b pb-4 border-gray-200">
          <h3 className="text-2xl font-bold text-text mb-3">Overview</h3>
          <p className="text-lightText leading-relaxed">{buyer.companyDescription}</p>
        </div>

        {/* Key Criteria */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 border-b pb-4 border-gray-200">
          <div>
            <h4 className="font-semibold text-text mb-1">Acquisition Budget:</h4>
            <p className="text-lightText">{buyer.acquisitionBudget}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Target Seller Revenue:</h4>
            <p className="text-lightText">{buyer.revenueTarget}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Industry Focus:</h4>
            <p className="text-lightText">{buyer.industry}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Preferred Location:</h4>
            <p className="text-lightText">{buyer.locationPreference}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Estimated Timeline:</h4>
            <p className="text-lightText">{buyer.timeline}</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-1">Due Diligence Ready:</h4>
            <p className="text-lightText">{buyer.dueDiligenceReady ? "Yes" : "No"}</p>
          </div>
        </div>

        {/* Acquisition Experience */}
        {buyer.acquisitionExperience && buyer.acquisitionExperience.length > 0 && (
          <div className="mb-8 border-b pb-4 border-gray-200">
            <h3 className="text-2xl font-bold text-text mb-3">Acquisition Experience</h3>
            <ul className="list-disc list-inside text-lightText space-y-1">
              {buyer.acquisitionExperience.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Personnel */}
        {buyer.keyPersonnel && buyer.keyPersonnel.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-text mb-3">Key Personnel</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {buyer.keyPersonnel.map((person, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-md">
                  <p className="font-semibold text-primary">{person.name}</p>
                  <p className="text-sm text-lightText">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Information (if available) */}
        {(buyer.contactEmail || buyer.contactPhone) && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-text mb-3">Contact Information</h3>
            <p className="text-lightText">{buyer.contactEmail && `Email: ${buyer.contactEmail}`}</p>
            <p className="text-lightText">{buyer.contactPhone && `Phone: ${buyer.contactPhone}`}</p>
            <p className="text-sm text-gray-500 mt-2">
              Note: Full contact details may be shared upon mutual acceptance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerProfileDetail;
