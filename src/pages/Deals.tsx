// components/Deals.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { BuyerProfile } from "../components/BuyerProfileCard";
import type { SellerProfile } from "../components/SellerProfileCard";
import { initialBuyers } from "./BuyerProfilesDashboard";
import { initialSellers } from "./SellerProfileDashboard";
// import { buyerProfiles, sellerProfiles } from "../constants/interfaceItems";

import { setMatchedBuyer } from "../redux/buyerSlice";
import { setMatchedSeller } from "../redux/buyerSlice";

// Assuming a Redux state type
interface RootState {
  auth: {
    role: "buyer" | "seller" | null;
  };
}

const Deals: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.auth.role);

  // Define deal-specific data based on the user's role
  const isBuyer = role === "buyer";
  const dealsData = isBuyer ? initialSellers : initialBuyers;
  const dealHeading = isBuyer ? "Your Active Acquisitions" : "Your Active Deals";
  const dealIntroText = isBuyer
    ? "Track the progress of all your active acquisitions, from initial discussions to closing."
    : "Track the progress of all your active deals, from initial discussions to closing.";
  const dealButtonText = "View Deal";

  const goToDealRoom = (profile: BuyerProfile | SellerProfile) => {
    if (isBuyer) {
      dispatch(setMatchedSeller(profile as SellerProfile));
    } else {
      dispatch(setMatchedBuyer(profile as BuyerProfile));
    }
    navigate("/deal-room");
  };

  // Dummy data for active deals to demonstrate the component
  const activeDeals = isBuyer
    ? [{ id: "s1", name: "Innovate Solutions Inc.", stage: "Due Diligence" }]
    : [{ id: "b1", name: "Acme Innovations Group", stage: "Due Diligence" }];

  return (
    <div className="container mx-auto p-6 font-sans">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">{dealHeading} 🚀</h2>
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
        <p className="text-gray-700 mb-6">{dealIntroText}</p>
        <ul className="space-y-4">
          {activeDeals.length === 0 ? (
            <p className="text-gray-500 text-center">You have no active deals.</p>
          ) : (
            activeDeals.map(deal => (
              <li
                key={deal.id}
                className="bg-gray-100 p-4 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="font-semibold text-gray-800">
                  {deal.name}{" "}
                  <span className="text-sm text-gray-500">- Current Stage: {deal.stage}</span>
                </span>
                <button
                  className="text-purple-600 hover:text-purple-800 font-medium"
                  onClick={() => {
                    const profile = dealsData.find(p => p.id === deal.id);
                    if (profile) goToDealRoom(profile as BuyerProfile | SellerProfile);
                  }}
                >
                  {dealButtonText}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Deals;
