import { useState, useEffect } from "react";
import type { BuyerProfile } from "../constants/interfaceItems";
import BuyerCard from "../components/BuyerCard";
import BuyerProfileModal from "../components/BuyerProfileModal";
import { Link, useNavigate } from "react-router-dom";

export default function RoleSelectionPage({
  onSelectRole,
}: {
  onSelectRole: (role: string) => void;
}) {
  const [role, setRole] = useState<string | null>(null);
  const [onboarded, setOnboarded] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load saved role & onboarding state
    const savedRole = localStorage.getItem("role");
    const savedOnboarded = localStorage.getItem("onboarded") === "true";
    setRole(savedRole);
    setOnboarded(savedOnboarded);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;
    if (role) {
      navigate("/onboarding");
    }
  }, [role, onboarded, loading, navigate]);

  return (
    <>
      <div className="min-h-[calc(100vh-168px)] bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-500 ease-in-out scale-100 opacity-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Welcome to Capre Capital! 👋
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Let's get you set up. Will you be buying or selling a business today?
          </p>
          <div className="flex justify-center space-x-6">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
              onClick={() => onSelectRole("buyer")}
            >
              I'm a Buyer
            </button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
              onClick={() => onSelectRole("seller")}
            >
              I'm a Seller
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
