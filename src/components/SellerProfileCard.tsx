// components/SellerProfileCard.tsx
import React from "react";

// Define the interface for a Seller Profile
export interface SellerProfile {
  id: string;
  businessName: string;
  industry: string;
  annualRevenue: string;
  employees: number;
  reasonForSale: string; // A concise summary
  valuationExpectation: string;
  businessDescription: string;
  isProfitable: boolean;
  businessWebsite: string;
  keyHighlights: string[];
  teamInvolvement: string;
  contactEmail?: string;
}

interface SellerProfileCardProps {
  seller: SellerProfile;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onViewDetails: (id: string) => void;
}

const COLORS = {
  primary: "#4B3F72",
  secondary: "#6A5ACD",
  background: "#F7F7F7",
  card: "#FFFFFF",
  text: "#333333",
  lightText: "#666666",
  success: "#22C55E",
  danger: "#EF4444",
};

const SellerProfileCard: React.FC<SellerProfileCardProps> = ({
  seller,
  onAccept,
  onReject,
  onViewDetails,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <h3 className="text-xl font-bold text-primary mb-2 truncate" title={seller.businessName}>
        {seller.businessName}
      </h3>
      <div className="flex-grow space-y-2 text-lightText text-sm">
        <p>
          <span className="font-semibold text-text">Industry:</span> {seller.industry}
        </p>
        <p>
          <span className="font-semibold text-text">Revenue:</span> {seller.annualRevenue}
        </p>
        <p>
          <span className="font-semibold text-text">Employees:</span> {seller.employees}
        </p>
        <p className="line-clamp-2">
          <span className="font-semibold text-text">Reason for Sale:</span> {seller.reasonForSale}
        </p>
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <button
          onClick={() => onViewDetails(seller.id)}
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 font-semibold"
        >
          View Details
        </button>
        <div className="flex space-x-2">
          <button
            onClick={() => onAccept(seller.id)}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 font-semibold"
          >
            Accept 👍
          </button>
          <button
            onClick={() => onReject(seller.id)}
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 font-semibold"
          >
            Reject 👎
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerProfileCard;
