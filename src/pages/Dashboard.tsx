import { useState, useEffect } from "react";
import type { BuyerProfile } from "../constants/interfaceItems";
import BuyerCard from "../components/BuyerCard";
import BuyerProfileModal from "../components/BuyerProfileModal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { setMatchedBuyer } from "../redux/buyerSlice";

// Define Dashboard Props Interface
interface DashboardProps {
  role: string | null;
  onboarded: boolean;
  buyerProfiles: BuyerProfile[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onViewProfile: (buyer: BuyerProfile) => void;
  onboardingType: "buyer" | "seller" | null;
}

// Dashboard component
const Dashboard: React.FC<DashboardProps> = ({
  role,
  onboarded,
  buyerProfiles,
  onAccept,
  onReject,
  onViewProfile,
  onboardingType,
}) => {
  const [activeScreen, setActiveScreen] = useState<string>("onboarding"); // 'onboarding', 'dashboard', 'profile-edit', 'deal-room', 'matches', 'deals', 'messages', 'settings'
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [selectedBuyer, setSelectedBuyer] = useState<BuyerProfile | null>(null);
  // const [matchedBuyer, setMatchedBuyer] = useState<BuyerProfile | null>(null);
  // const [role, setRole] = useState<string | null>(null);
  // const [onboarded, setOnboarded] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { matchedBuyer } = useSelector((state: RootState) => state.buyer);

  const handleViewProfile = (buyer: BuyerProfile) => {
    setSelectedBuyer(buyer);
    setShowProfileModal(true);
  };

  const goToDealRoom = (buyer: BuyerProfile) => {
    dispatch(setMatchedBuyer(buyer));
    navigate("/deal-room");
  };

  // useEffect(() => {
  //   // Load saved role & onboarding state
  //   // const savedRole = localStorage.getItem("role");
  //   const savedOnboarded = localStorage.getItem("onboarded") === "true";
  //   // setRole(savedRole);
  //   setOnboarded(savedOnboarded);
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    if (loading) return;
    if (!role) {
      navigate("/role-selection");
    } else if (!onboarded) {
      navigate("/onboarding");
    }
  }, [role, onboarded, loading, navigate]);

  return (
    <div className="container mx-auto p-6 font-inter">
      <h2 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-700">
        Your Dashboard
      </h2>

      {onboardingType === "seller" && (
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
            Potential Buyers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyerProfiles.map(buyer => (
              <BuyerCard
                key={buyer.id}
                buyer={buyer}
                onAccept={onAccept}
                onReject={onReject}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
          {showProfileModal && selectedBuyer && (
            <BuyerProfileModal buyer={selectedBuyer} onClose={() => setShowProfileModal(false)} />
          )}
        </section>
      )}

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
          Recent Activity
        </h3>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="mr-3 text-green-500 text-xl">✅</span> You just completed your
              onboarding!
            </li>
            {onboardingType === "seller" && (
              <li className="flex items-center text-gray-700">
                <span className="mr-3 text-blue-500 text-xl">💡</span> Explore potential buyer
                profiles above. Swipe right to connect!
              </li>
            )}
            {onboardingType === "buyer" && (
              <li className="flex items-center text-gray-700">
                <span className="mr-3 text-blue-500 text-xl">📩</span> Sellers will review your
                profile and send connection requests.
              </li>
            )}
            {matchedBuyer && (
              <li className="flex items-center text-gray-700">
                <span className="mr-3 text-purple-500 text-xl">🎉</span> You matched with{"  "}
                <span className="font-semibold text-purple-600">{matchedBuyer.name}</span>!{" "}
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
          <Link to="#">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253M12 6.253c1.168-.776 2.754-1.253 4.5-1.253s3.332.477 4.5 1.253m-12 13C9.168 18.523 10.754 19 12.5 19s3.332-.477 4.5-1.253M12 6.253v13"
                />
              </svg>
              <p className="font-semibold text-gray-800">Explore Opportunities</p>
            </div>
          </Link>
          <Link to="/messages">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <p className="font-semibold text-gray-800">Messages</p>
            </div>
          </Link>
          <Link to="/profile">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-500 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <p className="font-semibold text-gray-800">Edit Profile</p>
            </div>
          </Link>
          <Link to="/settings">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-purple-500 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.942 3.331.83 2.23 2.372a1.724 1.724 0 000 2.573c1.09 1.542-.699 3.33-2.23 2.372a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.942-3.331-.83-2.23-2.372a1.724 1.724 0 000-2.573c-1.09-1.542.699-3.33 2.23-2.372a1.724 1.724 0 002.573-1.066z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="font-semibold text-gray-800">Settings</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
