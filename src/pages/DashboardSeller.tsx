import React from "react";
import { Link } from "react-router-dom";
import {
  Handshake,
  MessageSquare,
  UserRoundPen,
  Settings,
  CheckCircle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import type { BuyerProfile } from "../components/BuyerProfileCard";
import { initialBuyers } from "./BuyerProfilesDashboard";
import BuyerCard from "../components/BuyerCard"; // Assuming BuyerCard exists
import BuyerProfileDetail from "../components/BuyerProfileDetail"; // Assuming this modal exists

interface SellerDashboardProps {
  onAccept: (buyerId: string) => void;
  onReject: (buyerId: string) => void;
  onViewProfile: (buyer: BuyerProfile) => void;
  showProfileModal: boolean;
  selectedBuyer: BuyerProfile | null; // Corrected name
  setShowProfileModal: (show: boolean) => void;
  matchedBuyer: BuyerProfile | null; // Corrected name
  goToDealRoom: (buyer: BuyerProfile) => void;
}

const SellerDashboard: React.FC<SellerDashboardProps> = ({
  onAccept,
  onReject,
  onViewProfile,
  showProfileModal,
  selectedBuyer,
  setShowProfileModal,
  matchedBuyer,
  goToDealRoom,
}) => (
  <div className="container mx-auto p-6">
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
        Potential Buyers
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialBuyers.map((buyer: any) => (
          <BuyerCard
            key={buyer.id}
            buyer={buyer}
            onAccept={onAccept}
            onReject={onReject}
            onViewProfile={onViewProfile}
          />
        ))}
      </div>
      {showProfileModal && selectedBuyer && (
        <BuyerProfileDetail buyer={selectedBuyer} onClose={() => setShowProfileModal(false)} />
      )}
    </section>

    <section className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
        Recent Activity
      </h3>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <ul className="space-y-4">
          <li className="flex items-center text-gray-700">
            <CheckCircle className="mr-3 text-green-500 min-w-5" /> You just completed your
            onboarding!
          </li>
          <li className="flex items-center text-gray-700">
            <Lightbulb className="mr-3 text-blue-500 min-w-5" /> Explore potential buyer profiles
            above. Swipe right to connect!
          </li>
          {matchedBuyer && (
            <li className="flex items-center text-gray-700">
              <TrendingUp className="mr-3 text-purple-500 min-w-5" /> You matched with{"  "}
              <span className="font-semibold text-purple-600">
                {matchedBuyer.companyName}
              </span>!{" "}
              <button
                onClick={() => goToDealRoom(matchedBuyer)}
                className="text-sm ml-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
              >
                Go to Deal Room
              </button>
            </li>
          )}
        </ul>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-2">
        Quick Access
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/buyer-profile">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <UserRoundPen className="h-12 w-12 text-blue-500 mb-3" />
            <p className="font-semibold text-gray-800">Explore Buyers</p>
          </div>
        </Link>
        <Link to="/messages">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <MessageSquare className="h-12 w-12 text-green-500 mb-3" />
            <p className="font-semibold text-gray-800">Messages</p>
          </div>
        </Link>
        <Link to="/profile">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <UserRoundPen className="h-12 w-12 text-yellow-500 mb-3" />
            <p className="font-semibold text-gray-800">Edit My Profile</p>
          </div>
        </Link>
        <Link to="/settings">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <Settings className="h-12 w-12 text-purple-500 mb-3" />
            <p className="font-semibold text-gray-800">Settings</p>
          </div>
        </Link>
      </div>
    </section>
  </div>
);

export default SellerDashboard;
