import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMatchedBuyer } from "../redux/buyerSlice";

// Assuming these types and data are defined elsewhere
import type { BuyerProfile } from "../constants/interfaceItems";
import { buyerProfiles } from "../constants/interfaceItems";

// Define a consistent color palette
const COLORS = {
  primary: "#4B3F72",
  secondary: "#6A5ACD",
  background: "#F7F7F7",
  card: "#FFFFFF",
  text: "#333333",
  lightText: "#666666",
  matchStatus: "#10B981", // A nice green for "Matched"
};

const Matches: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDealRoom = (buyer: BuyerProfile) => {
    dispatch(setMatchedBuyer(buyer));
    navigate("/deal-room");
  };

  // Combine the buyerProfiles and add a match status for the design
  const matches = buyerProfiles.map(profile => ({
    ...profile,
    matchStatus: "Matched on 10/26/2023", // Example status string
  }));

  return (
    <div className="container mx-auto p-6 font-sans bg-background min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
        Your Matches ✨
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {matches.length === 0 ? (
          <div className="bg-card rounded-xl shadow-lg p-8 text-center text-lightText">
            <p>You currently have no matches. Continue to explore profiles to find a great fit!</p>
          </div>
        ) : (
          matches.map(match => (
            <div
              key={match.id}
              className="bg-card rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Match Details */}
              <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold text-text">{match.companyName}</h3>
                <p className="text-sm font-medium text-matchStatus mt-1">{match.matchStatus}</p>
                <p className="text-lightText text-sm mt-2">
                  <span className="font-semibold text-text">Target:</span> {match.revenueTarget} |{" "}
                  <span className="font-semibold text-text">Industry:</span> {match.industryFocus}
                </p>
              </div>

              {/* Action Button */}
              <button
                className="w-full md:w-auto bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-opacity-80"
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

export default Matches;
