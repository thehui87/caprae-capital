import type { BuyerProfile } from "../constants/interfaceItems";

// Define BuyerProfileModal Props Interface
interface BuyerProfileModalProps {
  buyer: BuyerProfile;
  onClose: () => void;
}

// Expanded Buyer Profile Modal
const BuyerProfileModal: React.FC<BuyerProfileModalProps> = ({ buyer, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
    <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-8 relative transform scale-100 opacity-100 animate-scale-in">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        onClick={onClose}
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
      <div className="flex flex-col items-center mb-6">
        <img
          src={buyer.logo}
          alt={buyer.name}
          className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-purple-400 shadow-md"
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{buyer.name}</h2>
        <p className="text-purple-700 text-lg font-semibold text-center">{buyer.headline}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        <div>
          <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center">
            <span className="mr-2 text-2xl">✨</span>Overview
          </h3>
          <p className="mb-2">
            <span className="font-semibold">Location:</span> {buyer.location}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Industry Focus:</span> {buyer.industryFocus}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Acquisition Budget:</span> {buyer.acquisitionBudget}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Target Revenue:</span> {buyer.revenueRange}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center">
            <span className="mr-2 text-2xl">💡</span>Investment Thesis
          </h3>
          <p className="mb-2">{buyer.expanded.investmentThesis}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center">
            <span className="mr-2 text-2xl">🤝</span>Team & Experience
          </h3>
          <p className="mb-2">{buyer.expanded.teamOverview}</p>
          <p className="mb-2">
            <span className="font-semibold">Past Acquisitions:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            {buyer.expanded.pastAcquisitions.map((acq, index) => (
              <li key={index}>{acq}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center">
            <span className="mr-2 text-2xl">🏦</span>Financial Capacity
          </h3>
          <p className="mb-2">{buyer.expanded.financialCapacity}</p>
          <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center mt-4">
            <span className="mr-2 text-2xl">🎯</span>Detailed Preferences
          </h3>
          <p className="mb-2">{buyer.expanded.detailedPreferences}</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300">
          Send Connection Request
        </button>
      </div>
    </div>
  </div>
);

export default BuyerProfileModal;
