import type { BuyerProfile } from "../components/BuyerProfileCard";

// Define BuyerCard Props Interface
interface BuyerCardProps {
  buyer: BuyerProfile;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onViewProfile: (buyer: BuyerProfile) => void;
}

// Buyer Card for Seller's View
const BuyerCard: React.FC<BuyerCardProps> = ({ buyer, onAccept, onReject, onViewProfile }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
    {/* <img
      src={buyer.logo}
      alt={buyer.industry}
      className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-purple-300"
    /> */}
    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{buyer.companyName}</h3>
    <p className="text-purple-600 text-sm font-semibold mb-3 text-center">
      {buyer.investmentThesis}
    </p>
    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 w-full mb-4">
      <div className="flex items-center">
        <span className="mr-2 text-purple-500">📍</span>
        {buyer.locationPreference}
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-purple-500">💼</span>
        {buyer.industry}
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-purple-500">💰</span>
        {buyer.acquisitionBudget}
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-purple-500">📈</span>
        {buyer.revenueTarget}
      </div>
    </div>
    <div className="flex space-x-4 mt-auto">
      <button
        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-200"
        onClick={() => console.log(`Rejected ${buyer.industry}`)} // Replaced alert
        aria-label="Reject"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-200"
        onClick={() => console.log(`Accepted ${buyer.industry}`)} // Replaced alert
        aria-label="Accept"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
    <button
      className="text-purple-600 hover:text-purple-800 text-sm mt-4 font-medium transition-colors"
      onClick={() => onViewProfile(buyer)}
    >
      View Full Profile
    </button>
  </div>
);

export default BuyerCard;
