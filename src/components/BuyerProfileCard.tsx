// components/BuyerProfileCard.tsx
import React from "react";

// Define the interface for a Buyer Profile
export interface BuyerProfile {
  id: string;
  companyName: string;
  acquisitionBudget: string;
  revenueTarget: string;
  industry: string;
  investmentThesis: string; // A concise summary
  locationPreference: string;
  companyDescription: string;
  acquisitionExperience: string[]; // List of previous acquisitions or experience
  keyPersonnel: { name: string; role: string }[];
  timeline: string;
  dueDiligenceReady: boolean;
  contactEmail?: string; // Optional, might only be revealed after acceptance
  contactPhone?: string; // Optional
}

interface BuyerProfileCardProps {
  buyer: BuyerProfile;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onViewDetails: (id: string) => void; // To open the full profile
}

const COLORS = {
  primary: "#4B3F72",
  secondary: "#6A5ACD",
  background: "#F7F7F7",
  card: "#FFFFFF",
  text: "#333333",
  lightText: "#666666",
  success: "#22C55E", // Green for accept
  danger: "#EF4444", // Red for reject
};

const BuyerProfileCard: React.FC<BuyerProfileCardProps> = ({
  buyer,
  onAccept,
  onReject,
  onViewDetails,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <h3 className="text-xl font-bold text-primary mb-2 truncate" title={buyer.companyName}>
        {buyer.companyName}
      </h3>
      <div className="flex-grow space-y-2 text-lightText text-sm">
        <p>
          <span className="font-semibold text-text">Budget:</span> {buyer.acquisitionBudget}
        </p>
        <p>
          <span className="font-semibold text-text">Target Revenue:</span> {buyer.revenueTarget}
        </p>
        <p>
          <span className="font-semibold text-text">Industry:</span> {buyer.industry}
        </p>
        <p className="line-clamp-2">
          <span className="font-semibold text-text">Strategy:</span> {buyer.investmentThesis}
        </p>
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <button
          onClick={() => onViewDetails(buyer.id)}
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 font-semibold"
        >
          View Details
        </button>
        <div className="flex space-x-2">
          <button
            onClick={() => onAccept(buyer.id)}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 font-semibold"
          >
            Accept 👍
          </button>
          <button
            onClick={() => onReject(buyer.id)}
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 font-semibold"
          >
            Reject 👎
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfileCard;
