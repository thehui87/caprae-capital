// Deals Component (Stub)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { BuyerProfile } from "../constants/interfaceItems";
import { buyerProfiles } from "../constants/interfaceItems";
import { setMatchedBuyer } from "../redux/buyerSlice";
import { useDispatch } from "react-redux";

const Deals: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDealRoom = (buyer: BuyerProfile) => {
    dispatch(setMatchedBuyer(buyer));
    // setActiveScreen("deal-room");
    navigate("/deal-room");
  };

  return (
    <div className="container mx-auto p-6 font-inter">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Active Deals 🚀</h2>
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <p className="text-gray-700 mb-4">
          Track the progress of all your active acquisitions, from initial discussions to closing.
        </p>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg flex items-center justify-between shadow-sm">
            <span className="font-semibold text-gray-800">
              Acme Innovations Group{" "}
              <span className="text-sm text-gray-500">- Current Stage: Due Diligence</span>
            </span>
            <button
              className="text-purple-600 hover:text-purple-800 font-medium"
              onClick={() => goToDealRoom(buyerProfiles[0])}
            >
              View Deal
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Deals;
