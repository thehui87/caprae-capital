import React from "react";
import { Link } from "react-router-dom";
import {
  Handshake,
  MessageSquare,
  UserRoundPen,
  Settings,
  CheckCircle,
  Mail,
  TrendingUp,
} from "lucide-react";
import type { SellerProfile } from "../components/SellerProfileCard";
import { initialSellers } from "./SellerProfileDashboard";
import SellerCard from "../components/SellerCard"; // Assuming SellerCard exists
import SellerProfileDetail from "../components/SellerProfileDetail"; // Assuming this modal exists

interface BuyerDashboardProps {
  onAccept: (sellerId: string) => void;
  onReject: (sellerId: string) => void;
  onViewProfile: (seller: SellerProfile) => void;
  showProfileModal: boolean;
  selectedSeller: SellerProfile | null;
  setShowProfileModal: (show: boolean) => void;
  matchedSeller: SellerProfile | null;
  goToDealRoom: (seller: SellerProfile) => void;
}

const BuyerDashboard: React.FC<BuyerDashboardProps> = ({
  onAccept,
  onReject,
  onViewProfile,
  showProfileModal,
  selectedSeller,
  setShowProfileModal,
  matchedSeller,
  goToDealRoom,
}) => (
  <div className="container mx-auto p-6">
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
        Potential Sellers
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialSellers.map(seller => (
          <SellerCard
            key={seller.id}
            seller={seller}
            onAccept={onAccept}
            onReject={onReject}
            onViewProfile={onViewProfile}
          />
        ))}
      </div>
      {showProfileModal && selectedSeller && (
        <SellerProfileDetail seller={selectedSeller} onClose={() => setShowProfileModal(false)} />
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
            <Mail className="mr-3 text-blue-500 min-w-5" /> Sellers will review your profile and
            send connection requests.
          </li>
          {matchedSeller && (
            <li className="flex items-center text-gray-700">
              <TrendingUp className="mr-3 text-purple-500 min-w-5" /> You matched with{"  "}
              <span className="font-semibold text-purple-600">
                {matchedSeller.businessName}
              </span>!{" "}
              <button
                onClick={() => goToDealRoom(matchedSeller)}
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
        <Link to="/seller-profile">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <UserRoundPen className="h-12 w-12 text-blue-500 mb-3" />
            <p className="font-semibold text-gray-800">Explore Sellers</p>
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

export default BuyerDashboard;
