// SellerMatches.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMatchedBuyer } from "../redux/buyerSlice"; // Assuming a seller sets a matched buyer

// Assuming these types and data are defined elsewhere
import type { BuyerProfile } from "../components/BuyerProfileCard";
// In a real app, this data would come from an API
const buyerMatches: BuyerProfile[] = [
  {
    id: "b1",
    companyName: "Acme Innovations Group",
    logo: "https://placehold.co/60x60/9F7AEA/FFFFFF?text=AIG",
    acquisitionBudget: "$20M - $50M",
    revenueTarget: "$5M - $20M",
    industry: "Software & Technology",
    investmentThesis: "Seeking profitable SaaS businesses...",
    locationPreference: "North America",
    companyDescription: "...",
    acquisitionExperience: [],
    keyPersonnel: [],
    timeline: "3-6 Months",
    dueDiligenceReady: true,
  },
  {
    id: "b2",
    companyName: "Strategic Growth Partners",
    logo: "https://placehold.co/60x60/9F7AEA/FFFFFF?text=AIG",
    acquisitionBudget: "$1M - $5M",
    revenueTarget: "$1M - $5M",
    industry: "E-commerce & Digital Marketing",
    investmentThesis: "Looking for niche e-commerce brands...",
    locationPreference: "Remote-friendly",
    companyDescription: "...",
    acquisitionExperience: [],
    keyPersonnel: [],
    timeline: "6-12 Months",
    dueDiligenceReady: false,
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

const SellerMatches: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDealRoom = (buyer: BuyerProfile) => {
    dispatch(setMatchedBuyer(buyer));
    navigate("/deal-room");
  };

  return (
    <div className="container mx-auto p-6 font-sans bg-background min-h-[calc(100ch-168px)]">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
        Your Buyer Matches ✨
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {buyerMatches.length === 0 ? (
          <div className="bg-card rounded-xl shadow-lg p-8 text-center text-lightText">
            <p>You currently have no matches. Review buyer profiles to find a great fit!</p>
          </div>
        ) : (
          buyerMatches.map(match => (
            <div
              key={match.id}
              className="bg-card rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold text-text">{match.companyName}</h3>
                <p className="text-sm font-medium text-matchStatus mt-1">Matched on 10/26/2023</p>
                <p className="text-lightText text-sm mt-2">
                  <span className="font-semibold text-text">Budget:</span> {match.acquisitionBudget}{" "}
                  | <span className="font-semibold text-text">Target:</span> {match.revenueTarget}
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

export default SellerMatches;
