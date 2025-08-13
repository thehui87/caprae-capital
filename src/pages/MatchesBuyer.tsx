// BuyerMatches.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMatchedSeller } from "../redux/buyerSlice"; // Assuming a buyer sets a matched seller

// Assuming these types and data are defined elsewhere
import type { SellerProfile } from "../components/SellerProfileCard";
// In a real app, this data would come from an API
const sellerMatches: SellerProfile[] = [
  {
    id: "s1",
    businessName: "Innovate Solutions Inc.",
    logo: "https://placehold.co/60x60/9F7AEA/FFFFFF?text=AIG",
    industry: "Software as a Service (SaaS)",
    annualRevenue: "$5M - $20M",
    employees: 45,
    reasonForSale: "Strategic pivot to new venture.",
    valuationExpectation: "Seeking 3-5x annual revenue.",
    businessDescription: "...",
    isProfitable: true,
    businessWebsite: "...",
    keyHighlights: [],
    teamInvolvement: "Assist with a transition period",
  },
  {
    id: "s2",
    businessName: "The E-commerce Hub",
    logo: "https://placehold.co/60x60/9F7AEA/FFFFFF?text=AIG",
    industry: "E-commerce",
    annualRevenue: "$1M - $5M",
    employees: 10,
    reasonForSale: "Owner retirement.",
    valuationExpectation: "Negotiable, based on buyer synergy.",
    businessDescription: "...",
    isProfitable: true,
    businessWebsite: "...",
    keyHighlights: [],
    teamInvolvement: "Exit immediately",
  },
];

const COLORS = {
  primary: "#4B3F72",
  secondary: "#6A5ACD",
  background: "#F7F7F7",
  card: "#FFFFFF",
  text: "#333333",
  lightText: "#666666",
  matchStatus: "#10B981",
};

const BuyerMatches: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDealRoom = (seller: SellerProfile) => {
    dispatch(setMatchedSeller(seller));
    navigate("/deal-room");
  };

  return (
    <div className="container mx-auto p-6 font-sans bg-background min-h-[calc(100ch-168px)]">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
        Your Seller Matches ✨
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {sellerMatches.length === 0 ? (
          <div className="bg-card rounded-xl shadow-lg p-8 text-center text-lightText">
            <p>You currently have no matches. Review seller profiles to find a great fit!</p>
          </div>
        ) : (
          sellerMatches.map(match => (
            <div
              key={match.id}
              className="bg-card rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold text-text">{match.businessName}</h3>
                <p className="text-sm font-medium text-matchStatus mt-1">Matched on 10/26/2023</p>
                <p className="text-lightText text-sm mt-2">
                  <span className="font-semibold text-text">Revenue:</span> {match.annualRevenue} |{" "}
                  <span className="font-semibold text-text">Industry:</span> {match.industry}
                </p>
              </div>

              <button
                className="w-full md:w-auto bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-gray-900"
                onClick={() => goToDealRoom(match)}
              >
                Go to Deal Room
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BuyerMatches;
