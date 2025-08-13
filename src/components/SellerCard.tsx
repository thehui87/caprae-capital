import type { SellerProfile } from "../components/SellerProfileCard";

// Define BuyerCard Props Interface
interface SellerCardProps {
  seller: SellerProfile;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onViewProfile: (buyer: SellerProfile) => void;
}

// Buyer Card for Seller's View
const SellerCard: React.FC<SellerCardProps> = ({ seller, onAccept, onReject, onViewProfile }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl h-full">
    {/* Business Name */}
    <h3
      className="text-xl font-bold text-gray-800 mb-2 text-center truncate"
      title={seller.businessName}
    >
      {seller.businessName}
    </h3>

    {/* Primary Reason for Sale - acts as a compelling headline/snippet */}
    <p className="text-secondary text-sm font-semibold mb-3 text-center line-clamp-2">
      {seller.reasonForSale}
    </p>

    {/* Key Business Metrics */}
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 w-full mb-4">
      <div className="flex items-center">
        <span className="mr-2 text-purple-500">💼</span>
        <span className="font-semibold text-text">Industry:</span> {seller.industry}
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-purple-500">💰</span>
        <span className="font-semibold text-text">Revenue:</span> {seller.annualRevenue}
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-purple-500">👥</span>
        <span className="font-semibold text-text">Employees:</span> {seller.employees}
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-purple-500">✅</span>
        <span className="font-semibold text-text">Profitable:</span>{" "}
        {seller.isProfitable ? "Yes" : "No"}
      </div>
    </div>

    {/* Action Buttons (Reject and Accept) */}
    <div className="flex space-x-4 mt-auto w-full justify-center">
      <button
        className="bg-danger hover:bg-red-600 text-white p-3 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-200"
        onClick={() => onReject(seller.id)} // Pass seller.id to the parent's reject handler
        aria-label="Reject Seller Profile"
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
        className="bg-success hover:bg-green-600 text-white p-3 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-200"
        onClick={() => onAccept(seller.id)} // Pass seller.id to the parent's accept handler
        aria-label="Accept Seller Profile"
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

    {/* View Full Profile Button */}
    <button
      className="text-purple-600 hover:text-purple-800 text-sm mt-4 font-medium transition-colors"
      onClick={() => onViewProfile(seller)} // Pass the full seller object for detailed view
    >
      View Full Profile
    </button>
  </div>
);

export default SellerCard;
