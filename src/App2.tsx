import React, { useState, useEffect } from "react";

// Define interfaces for data structures
interface BuyerProfile {
  id: string;
  name: string;
  headline: string;
  industryFocus: string;
  revenueRange: string;
  acquisitionBudget: string;
  location: string;
  logo: string;
  expanded: {
    investmentThesis: string;
    pastAcquisitions: string[];
    teamOverview: string;
    financialCapacity: string;
    detailedPreferences: string;
  };
}

// Main App component
const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string>("onboarding"); // 'onboarding', 'dashboard', 'profile-edit', 'deal-room', 'matches', 'deals', 'messages', 'settings'
  const [onboardingType, setOnboardingType] = useState<"buyer" | "seller" | null>(null);
  const [currentOnboardingStep, setCurrentOnboardingStep] = useState<number>(1);
  const [matchedBuyer, setMatchedBuyer] = useState<BuyerProfile | null>(null); // Simulates a matched buyer for the deal flow

  const buyerProfiles: BuyerProfile[] = [
    {
      id: "buy1",
      name: "Acme Innovations Group",
      headline: "Seeking established tech ventures with recurring revenue.",
      industryFocus: "SaaS, FinTech, E-commerce",
      revenueRange: "$5M - $20M ARR",
      acquisitionBudget: "$20M - $50M",
      location: "Remote-friendly, USA",
      logo: "https://placehold.co/60x60/9F7AEA/FFFFFF?text=AIG",
      expanded: {
        investmentThesis:
          "We invest in scalable, defensible software companies with strong leadership and a clear path to profitability. Our focus is on long-term growth and strategic synergy.",
        pastAcquisitions: ["InnovateCorp (SaaS, 2022)", "DataGenius (AI, 2021)"],
        teamOverview:
          "Our team comprises seasoned entrepreneurs, financial analysts, and M&A experts with a track record of successful integrations.",
        financialCapacity:
          "Access to significant capital from a network of private equity firms and institutional investors.",
        detailedPreferences:
          "Open to various business models, but prefer subscription-based services. Looking for companies with 10+ employees and a positive EBITDA.",
      },
    },
    {
      id: "buy2",
      name: "Strategic Growth Partners",
      headline: "Expanding portfolio in sustainable consumer goods.",
      industryFocus: "Sustainable CPG, Health & Wellness",
      revenueRange: "$1M - $10M ARR",
      acquisitionBudget: "$5M - $25M",
      location: "North America",
      logo: "https://placehold.co/60x60/68D391/FFFFFF?text=SGP",
      expanded: {
        investmentThesis:
          "Committed to impact investing, we seek businesses aligning with ethical production and environmental sustainability. We provide capital and strategic guidance to scale.",
        pastAcquisitions: [
          "EcoBliss (Organic Foods, 2023)",
          "PureLiving (Wellness Products, 2022)",
        ],
        teamOverview:
          "A diverse team with expertise in supply chain, marketing, and sustainable business practices.",
        financialCapacity: "Backed by a multi-million dollar fund dedicated to green investments.",
        detailedPreferences:
          "Strong brand presence, established distribution channels, and commitment to sustainability are key. Revenue growth potential is a plus.",
      },
    },
    {
      id: "buy3",
      name: "Venture Capital X",
      headline: "High-growth tech startups. Pre-revenue to $2M ARR.",
      industryFocus: "AI, Biotech, Quantum Computing",
      revenueRange: "Pre-revenue - $2M ARR",
      acquisitionBudget: "$1M - $10M",
      location: "Global",
      logo: "https://placehold.co/60x60/A0AEC0/FFFFFF?text=VCX",
      expanded: {
        investmentThesis:
          "We partner with visionary founders leveraging disruptive technologies. Our focus is on early-stage companies with significant market potential and a strong intellectual property.",
        pastAcquisitions: ["Synapse AI (Pre-seed, 2024)", "BioFusion (Seed, 2023)"],
        teamOverview:
          "Our partners are former founders and industry leaders, offering hands-on mentorship and network access.",
        financialCapacity:
          "Multi-stage fund with capital for seed, Series A, and follow-on investments.",
        detailedPreferences:
          "Seeking innovative solutions to complex problems. Strong founding team and a clear product roadmap are essential.",
      },
    },
  ];

  const handleOnboardingComplete = (type: "buyer" | "seller") => {
    setOnboardingType(type);
    setActiveScreen("dashboard");
    // Simulate a match after onboarding for demonstration of the deal flow
    if (type === "seller") {
      setMatchedBuyer(buyerProfiles[0]); // Seller matches with Acme Innovations Group
    }
  };

  const goToDashboard = () => setActiveScreen("dashboard");
  const goToProfileEdit = () => setActiveScreen("profile-edit");
  const goToDealRoom = (buyer: BuyerProfile) => {
    setMatchedBuyer(buyer);
    setActiveScreen("deal-room");
  };

  // Define Header Props Interface
  interface HeaderProps {
    onNavigate?: () => void; // onNavigate might not always be used, hence optional
  }

  // Shared Header Component (Simplified for sidebar navigation)
  const Header: React.FC<HeaderProps> = () => (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 shadow-lg rounded-b-lg md:rounded-b-none">
      <div className="container mx-auto flex justify-between items-center md:justify-center md:pl-24">
        {" "}
        {/* Added pl-24 for sidebar offset */}
        <h1
          className="text-3xl font-bold font-inter cursor-pointer"
          onClick={() => setActiveScreen("dashboard")}
        >
          DealFlowe you looking to buy or sell a business?”
        </h1>
      </div>
    </header>
  );

  // Define Sidebar Props Interface
  interface SidebarProps {
    setActiveScreen: (screen: string) => void;
    goToDashboard: () => void;
    goToProfileEdit: () => void;
  }

  // Shared Sidebar Component
  const Sidebar: React.FC<SidebarProps> = ({ setActiveScreen, goToDashboard, goToProfileEdit }) => (
    <nav className="fixed left-0 top-0 h-full w-24 bg-gray-800 text-white flex flex-col items-center py-6 shadow-xl z-40">
      <ul className="space-y-6 mt-8">
        <li>
          <button
            className="flex flex-col items-center text-sm hover:text-purple-300 transition-colors group"
            onClick={goToDashboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mb-1 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2 2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Dashboard
          </button>
        </li>
        <li>
          <button
            className="flex flex-col items-center text-sm hover:text-purple-300 transition-colors group"
            onClick={() => setActiveScreen("matches")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mb-1 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Matches
          </button>
        </li>
        <li>
          <button
            className="flex flex-col items-center text-sm hover:text-purple-300 transition-colors group"
            onClick={() => setActiveScreen("deals")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mb-1 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.55 23.55 0 0112 15c-1.649 0-3.265-.153-4.851-.444m0 0C3.373 14.618 1 12.164 1 10c0-1.042.448-2.003 1.224-2.776m0 0A7.49 7.49 0 0112 4c1.649 0 3.265.153 4.851.444m0 0C20.627 8.382 23 10.836 23 13c0 1.042-.448 2.003-1.224 2.776m0 0Dd4.285 4.286A2.49 2.49 0 0112 18.5c-1.246 0-2.434-.582-3.176-1.558L12 18.5l3.176-1.558z"
              />
            </svg>
            Deals
          </button>
        </li>
        <li>
          <button
            className="flex flex-col items-center text-sm hover:text-purple-300 transition-colors group"
            onClick={() => setActiveScreen("messages")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mb-1 group-hover:scale-110 transition-transform"
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
            Messages
          </button>
        </li>
        <li>
          <button
            className="flex flex-col items-center text-sm hover:text-purple-300 transition-colors group"
            onClick={goToProfileEdit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mb-1 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Profile
          </button>
        </li>
        <li>
          <button
            className="flex flex-col items-center text-sm hover:text-purple-300 transition-colors group"
            onClick={() => setActiveScreen("settings")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mb-1 group-hover:scale-110 transition-transform"
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
            Settings
          </button>
        </li>
      </ul>
    </nav>
  );

  // Shared Footer Component
  const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white p-4 mt-8 rounded-t-lg md:ml-24">
      {" "}
      {/* Added ml-24 for sidebar offset */}
      <div className="container mx-auto text-center text-sm">
        <p>&copy; 2024 DealFlow. All rights reserved.</p>
        <p className="mt-2">Connecting opportunities, maximizing success.</p>
      </div>
    </footer>
  );

  // Define Onboarding Props Interface
  interface OnboardingProps {
    onComplete: (type: "buyer" | "seller") => void;
  }

  // Onboarding component
  const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
    const [userType, setUserType] = useState<"buyer" | "seller" | "">("");

    const handleUserTypeSelect = (type: "buyer" | "seller") => {
      setUserType(type);
      if (type === "seller") {
        setCurrentOnboardingStep(2);
      } else {
        setCurrentOnboardingStep(3);
      }
    };

    // handleNextStep is no longer needed as the step is advanced directly in handleUserTypeSelect
    // const handleNextStep = () => setCurrentOnboardingStep(prev => prev + 1);
    const handlePrevStep = () => setCurrentOnboardingStep(prev => prev - 1);

    const commonQuestions = (
      <>
        <div className="mb-6">
          <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
            Company/Individual Name:
          </label>
          <input
            type="text"
            id="companyName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
            placeholder="Your Name or Company Name"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="industry" className="block text-gray-700 text-sm font-bold mb-2">
            Primary Industry Focus:
          </label>
          <select
            id="industry"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
          >
            <option value="">Select an industry</option>
            <option value="tech">Technology</option>
            <option value="finance">Finance</option>
            <option value="retail">Retail & E-commerce</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="healthcare">Healthcare</option>
            <option value="service">Professional Services</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Geographic Focus:
          </label>
          <input
            type="text"
            id="location"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
            placeholder="e.g., USA, Europe, Remote, Local"
          />
        </div>
      </>
    );

    const buyerQuestions = (
      <>
        <h3 className="text-xl font-semibold mb-4 text-purple-700">
          Tell us about your acquisition criteria.
        </h3>
        {commonQuestions}
        <div className="mb-6">
          <label htmlFor="acquisitionBudget" className="block text-gray-700 text-sm font-bold mb-2">
            Acquisition Budget Range:
          </label>
          <select
            id="acquisitionBudget"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
          >
            <option value="">Select budget</option>
            <option value="1M-5M">$1M - $5M</option>
            <option value="5M-20M">$5M - $20M</option>
            <option value="20M-50M">$20M - $50M</option>
            <option value="50M+">$50M+</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="revenueTarget" className="block text-gray-700 text-sm font-bold mb-2">
            Target Seller Revenue (Annual):
          </label>
          <select
            id="revenueTarget"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
          >
            <option value="">Select revenue target</option>
            <option value="lt1M">Less than $1M</option>
            <option value="1M-5M">$1M - $5M</option>
            <option value="5M-20M">$5M - $20M</option>
            <option value="20M+">$20M+</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="investmentThesis" className="block text-gray-700 text-sm font-bold mb-2">
            Your Investment Thesis/Strategy:
          </label>
          <textarea
            id="investmentThesis"
            rows={3}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
            placeholder="e.g., Seeking profitable SaaS businesses for strategic expansion..."
          ></textarea>
        </div>
      </>
    );

    const sellerQuestions = (
      <>
        <h3 className="text-xl font-semibold mb-4 text-green-700">Tell us about your business.</h3>
        {commonQuestions}
        <div className="mb-6">
          <label htmlFor="businessRevenue" className="block text-gray-700 text-sm font-bold mb-2">
            Current Annual Revenue:
          </label>
          <select
            id="businessRevenue"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
          >
            <option value="">Select revenue</option>
            <option value="lt1M">Less than $1M</option>
            <option value="1M-5M">$1M - $5M</option>
            <option value="5M-20M">$5M - $20M</option>
            <option value="20M+">$20M+</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="employees" className="block text-gray-700 text-sm font-bold mb-2">
            Number of Employees:
          </label>
          <input
            type="number"
            id="employees"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
            placeholder="e.g., 10"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="reasonForSale" className="block text-gray-700 text-sm font-bold mb-2">
            Primary Reason for Selling:
          </label>
          <textarea
            id="reasonForSale"
            rows={3}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
            placeholder="e.g., Retirement, strategic pivot, new venture..."
          ></textarea>
        </div>
      </>
    );

    const renderStep = () => {
      switch (currentOnboardingStep) {
        case 1:
          return (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Welcome to DealFlow! 👋
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Let's get you set up. Will you be buying or selling a business today?
              </p>
              <div className="flex justify-center space-x-6">
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
                  onClick={() => handleUserTypeSelect("buyer")}
                >
                  I'm a Buyer
                </button>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                  onClick={() => handleUserTypeSelect("seller")}
                >
                  I'm a Seller
                </button>
              </div>
            </>
          );
        case 2:
          return (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Almost there! Your {userType === "buyer" ? "Buyer" : "Seller"} Profile.
              </h2>
              <p className="text-center text-gray-600 mb-8">
                This information helps us find your perfect match.
              </p>
              {userType === "buyer" ? buyerQuestions : sellerQuestions}
              <div className="flex justify-between mt-8">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                  onClick={handlePrevStep}
                >
                  Back
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={() => onComplete(userType as "buyer" | "seller")}
                >
                  Complete Onboarding
                </button>
              </div>
            </>
          );
        default:
          return null;
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-500 ease-in-out scale-100 opacity-100">
          {!userType ? (
            renderStep()
          ) : (
            <>
              <div className="flex justify-center mb-6">
                <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`bg-gradient-to-r ${
                      currentOnboardingStep === 1
                        ? "from-purple-400 to-purple-600"
                        : "from-green-400 to-green-600"
                    } h-2.5 rounded-full`}
                    style={{ width: `${(currentOnboardingStep / 2) * 100}%` }}
                  ></div>
                </div>
              </div>
              {renderStep()}
            </>
          )}
        </div>
      </div>
    );
  };

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
      <img
        src={buyer.logo}
        alt={buyer.name}
        className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-purple-300"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{buyer.name}</h3>
      <p className="text-purple-600 text-sm font-semibold mb-3 text-center">{buyer.headline}</p>
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 w-full mb-4">
        <div className="flex items-center">
          <span className="mr-2 text-purple-500">📍</span>
          {buyer.location}
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-purple-500">💼</span>
          {buyer.industryFocus}
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-purple-500">💰</span>
          {buyer.acquisitionBudget}
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-purple-500">📈</span>
          {buyer.revenueRange}
        </div>
      </div>
      <div className="flex space-x-4 mt-auto">
        <button
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-200"
          onClick={() => console.log(`Rejected ${buyer.name}`)} // Replaced alert
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
          onClick={() => console.log(`Accepted ${buyer.name}`)} // Replaced alert
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

  // Define Dashboard Props Interface
  interface DashboardProps {
    buyerProfiles: BuyerProfile[];
    onAccept: (id: string) => void;
    onReject: (id: string) => void;
    onViewProfile: (buyer: BuyerProfile) => void;
    onboardingType: "buyer" | "seller" | null;
  }

  // Dashboard component
  const Dashboard: React.FC<DashboardProps> = ({
    buyerProfiles,
    onAccept,
    onReject,
    onViewProfile,
    onboardingType,
  }) => {
    const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
    const [selectedBuyer, setSelectedBuyer] = useState<BuyerProfile | null>(null);

    const handleViewProfile = (buyer: BuyerProfile) => {
      setSelectedBuyer(buyer);
      setShowProfileModal(true);
    };

    return (
      <div className="container mx-auto p-6 font-inter">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-700">
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
                  <span className="mr-3 text-purple-500 text-xl">🎉</span> You matched with{" "}
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
          </div>
        </section>
      </div>
    );
  };

  // Define DealRoom Props Interface
  interface DealRoomProps {
    buyer: BuyerProfile;
    onBackToDashboard: () => void;
  }

  // Deal Room Component
  const DealRoom: React.FC<DealRoomProps> = ({ buyer, onBackToDashboard }) => {
    const [activeTab, setActiveTab] = useState<string>("overview");
    const [financialDoc, setFinancialDoc] = useState<File | null>(null);
    const [summary, setSummary] = useState<string>("");
    const [loadingAI, setLoadingAI] = useState<boolean>(false);
    const [dealStage, setDealStage] = useState<string>("Introduction"); // Current deal stage

    const dealStages: string[] = [
      "Introduction",
      "Initial Discussion",
      "NDA Signed",
      "Due Diligence Prep",
      "Document Exchange",
      "Financial Analysis",
      "Offer Negotiation",
      "LOI Signed",
      "Legal Review",
      "Closing",
      "Deal Complete",
    ];

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files ? event.target.files[0] : null;
      if (file) {
        setFinancialDoc(file);
      }
    };

    const analyzeDocument = async () => {
      if (!financialDoc) {
        setSummary("Please upload a document first.");
        return;
      }

      setLoadingAI(true);
      setSummary("Analyzing document...");

      // Simulate API call for AI analysis (replace with actual Gemini API call)
      // For demonstration, we'll just show a placeholder response after a delay.
      try {
        // Example of how to call the Gemini API for text generation (if needed for analysis)
        // const prompt = `Summarize the key financial highlights and risks from the following document: ${financialDoc.name}.`;
        // const chatHistory = [];
        // chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        // const payload = { contents: chatHistory };
        // const apiKey = ""; // Canvas will provide this in runtime
        // const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
        //
        // const response = await fetch(apiUrl, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(payload)
        // });
        // const result = await response.json();
        // if (result.candidates && result.candidates.length > 0 &&
        //     result.candidates[0].content && result.candidates[0].content.parts &&
        //     result.candidates[0].content.parts.length > 0) {
        //   setSummary(result.candidates[0].content.parts[0].text);
        // } else {
        //   setSummary('Error: Could not get a summary from the AI. Please try again.');
        // }

        await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate network delay
        setSummary(`AI Summary of ${financialDoc.name}:
        This document appears to be the Q4 2024 Financial Report for Acme Innovations Group.
        Key Highlights:
        - Revenue increased by 15% year-over-year, reaching $18.5M.
        - Net profit margin improved to 22%.
        - Strong cash flow from operations, indicating healthy business performance.
        Potential Risks:
        - Increased operating expenses, primarily due to expansion efforts.
        - Dependence on a few large clients (further diversification recommended).
        - Minor fluctuations in quarterly revenue, but overall upward trend.`);
        setDealStage("Financial Analysis"); // Advance stage after analysis
      } catch (error) {
        console.error("AI analysis error:", error);
        setSummary("Failed to analyze document. Please try again.");
      } finally {
        setLoadingAI(false);
      }
    };

    interface StageIndicatorProps {
      stage: string;
      currentStage: string;
    }

    const StageIndicator: React.FC<StageIndicatorProps> = ({ stage, currentStage }) => {
      const stageIndex = dealStages.indexOf(stage);
      const currentIndex = dealStages.indexOf(currentStage);
      const isActive = stageIndex <= currentIndex;
      const isCurrent = stageIndex === currentIndex;

      return (
        <div
          className={`flex items-center ${
            isCurrent ? "font-bold text-purple-700" : "text-gray-500"
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-2
                    ${
                      isCurrent
                        ? "bg-purple-600 text-white shadow-lg"
                        : isActive
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
          >
            {stageIndex + 1}
          </div>
          <span className="text-sm md:text-base">{stage}</span>
        </div>
      );
    };

    return (
      <div className="container mx-auto p-6 font-inter">
        <button
          onClick={onBackToDashboard}
          className="text-purple-600 hover:text-purple-800 flex items-center mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back to Dashboard
        </button>

        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <img
              src={buyer.logo}
              alt={buyer.name}
              className="w-20 h-20 rounded-full mr-4 border-4 border-purple-400"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Deal Room: <span className="text-purple-700">{buyer.name}</span>
              </h2>
              <p className="text-gray-600 text-lg mt-1">
                Your journey to a successful acquisition begins here.
              </p>
            </div>
          </div>

          {/* Deal Stage Progress */}
          <div className="mb-8 p-4 bg-purple-50 rounded-lg shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Deal Progress: <span className="text-green-600">{dealStage}</span>
            </h3>
            <div className="flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
              {dealStages.map(stage => (
                <StageIndicator key={stage} stage={stage} currentStage={dealStage} />
              ))}
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`py-2 px-4 border-b-2 text-lg font-medium ${
                  activeTab === "overview"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } transition-colors`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`py-2 px-4 border-b-2 text-lg font-medium ${
                  activeTab === "documents"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } transition-colors`}
                onClick={() => setActiveTab("documents")}
              >
                Documents
              </button>
              <button
                className={`py-2 px-4 border-b-2 text-lg font-medium ${
                  activeTab === "messages"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } transition-colors`}
                onClick={() => setActiveTab("messages")}
              >
                Messages
              </button>
              <button
                className={`py-2 px-4 border-b-2 text-lg font-medium ${
                  activeTab === "financial-ai"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } transition-colors`}
                onClick={() => setActiveTab("financial-ai")}
              >
                AI Financial Analyzer
              </button>
              <button
                className={`py-2 px-4 border-b-2 text-lg font-medium ${
                  activeTab === "offers"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } transition-colors`}
                onClick={() => setActiveTab("offers")}
              >
                Offers & LOI
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "overview" && (
              <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Deal Overview</h3>
                <p className="text-gray-700 mb-4">
                  This section provides a high-level summary of the matched deal, including key
                  terms and a timeline of interactions. Use the tabs above to navigate through
                  different aspects of the acquisition process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p>
                      <span className="font-semibold">Buyer:</span> {buyer.name}
                    </p>
                    <p>
                      <span className="font-semibold">Seller:</span> [Your Business
                      Name/Placeholder]
                    </p>
                    <p>
                      <span className="font-semibold">Match Date:</span> July 15, 2024
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold">Current Status:</span> {dealStage}
                    </p>
                    <p>
                      <span className="font-semibold">Next Steps:</span> Discuss NDA terms.
                    </p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">Key Milestones</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Initial Introduction and Interest (July 15, 2024)</li>
                  <li>NDA Drafted (Expected: July 20, 2024)</li>
                  <li>Due Diligence Period (Expected: August 2024)</li>
                  {/* Add more dynamic milestones */}
                </ul>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Document Exchange 📂</h3>
                <p className="text-gray-700 mb-4">
                  Securely share and manage all essential acquisition documents here. Our version
                  control ensures everyone is working with the latest files. All documents are
                  encrypted and accessible only by matched parties.
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Upload Documents</h4>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-700
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-purple-50 file:text-purple-700
                    hover:file:bg-purple-100 transition-colors cursor-pointer"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Max file size: 25MB. Supported formats: PDF, DOCX, XLSX.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-3">Shared Documents</h4>
                <ul className="space-y-3">
                  <li className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                    <span>
                      <span className="font-semibold">NDA Agreement v1.2</span> -{" "}
                      <span className="text-gray-500">Uploaded: July 18, 2024</span>
                    </span>
                    <button className="text-purple-600 hover:text-purple-800 font-medium">
                      Download
                    </button>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                    <span>
                      <span className="font-semibold">Company Pitch Deck</span> -{" "}
                      <span className="text-gray-500">Uploaded: July 15, 2024</span>
                    </span>
                    <button className="text-purple-600 hover:text-purple-800 font-medium">
                      Download
                    </button>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                    <span>
                      <span className="font-semibold">Financial Statements Q2 2024</span> -{" "}
                      <span className="text-gray-500">Uploaded: July 22, 2024</span>
                    </span>
                    <button className="text-purple-600 hover:text-purple-800 font-medium">
                      Download
                    </button>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Note: All document views and downloads are logged for transparency.
                </p>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Deal Messages 💬</h3>
                <p className="text-gray-700 mb-4">
                  Communicate directly and securely with {buyer.name} here. All conversations are
                  archived and can be referenced at any time, ensuring clear communication
                  throughout the process.
                </p>

                <div className="bg-white h-96 overflow-y-auto p-4 rounded-lg shadow-md mb-4 flex flex-col-reverse">
                  {/* Message bubbles (reversed for chat-like experience) */}
                  <div className="flex justify-end mb-2">
                    <div className="bg-purple-100 text-purple-800 p-3 rounded-lg max-w-xs shadow-sm">
                      <p>
                        Great to connect! Looking forward to learning more about Acme Innovations
                        Group.
                      </p>
                      <span className="text-xs text-gray-500 text-right block mt-1">
                        You - 10:00 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start mb-2">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs shadow-sm">
                      <p>
                        Thanks! We're excited to explore this opportunity with you. What are your
                        initial thoughts?
                      </p>
                      <span className="text-xs text-gray-500 text-left block mt-1">
                        {buyer.name} - 10:05 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end mb-2">
                    <div className="bg-purple-100 text-purple-800 p-3 rounded-lg max-w-xs shadow-sm">
                      <p>Could you send over your latest financial statements and a pitch deck?</p>
                      <span className="text-xs text-gray-500 text-right block mt-1">
                        You - 10:10 AM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-grow shadow appearance-none border rounded-l-lg py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-r-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300">
                    Send
                  </button>
                </div>
              </div>
            )}

            {activeTab === "financial-ai" && (
              <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  AI Financial Document Analyzer 🧠📊
                </h3>
                <p className="text-gray-700 mb-4">
                  Upload financial documents (e.g., balance sheets, income statements) and our AI
                  will quickly analyze and summarize key insights, risks, and opportunities, saving
                  you hours of manual review. This accelerates your due diligence process.
                </p>

                <div className="mb-6 p-4 border border-purple-200 rounded-lg bg-white shadow-sm">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Upload Document for Analysis
                  </h4>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-700
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-indigo-50 file:text-indigo-700
                      hover:file:bg-indigo-100 transition-colors cursor-pointer"
                    onChange={handleFileUpload}
                  />
                  {financialDoc && (
                    <p className="text-sm text-gray-600 mt-2">Selected: {financialDoc.name}</p>
                  )}
                  <button
                    className={`mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out ${
                      loadingAI ? "opacity-70 cursor-not-allowed" : "transform hover:scale-105"
                    } focus:outline-none focus:ring-4 focus:ring-indigo-300`}
                    onClick={analyzeDocument}
                    disabled={loadingAI || !financialDoc}
                  >
                    {loadingAI ? "Analyzing..." : "Analyze Document"}
                  </button>
                </div>

                {summary && (
                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-400 mt-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                      <span className="mr-2 text-indigo-500">📈</span>AI Generated Summary
                    </h4>
                    <pre className="whitespace-pre-wrap font-mono text-gray-700 bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                      {summary}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {activeTab === "offers" && (
              <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Offers & Letter of Intent (LOI) ✍️
                </h3>
                <p className="text-gray-700 mb-4">
                  Manage and track all offers and the Letter of Intent. Our platform provides
                  standardized templates and a clear workflow for reviewing, counter-offering, and
                  accepting terms, minimizing legal back-and-forth.
                </p>

                <div className="mb-6 p-4 border border-blue-200 rounded-lg bg-white shadow-sm">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Create New Offer</h4>
                  <p className="text-gray-600 mb-3">
                    Use our guided process to draft a comprehensive offer or LOI.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Start New Offer Draft
                  </button>
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-3">Offer History</h4>
                <ul className="space-y-3">
                  <li className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                    <span>
                      <span className="font-semibold">Offer #001</span> -{" "}
                      <span className="text-gray-500">Status: Rejected</span>
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      View Details
                    </button>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                    <span>
                      <span className="font-semibold">LOI Draft v1</span> -{" "}
                      <span className="text-gray-500">Status: Sent for Review</span>
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      View Details
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Profile Edit Component (Stub)
  const ProfileEdit: React.FC = () => (
    <div className="container mx-auto p-6 font-inter">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Edit Your Profile 🛠️</h2>
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <p className="text-gray-700 mb-4">
          Here you can update your business details, contact information, and preferences.
        </p>
        <div className="mb-6">
          <label htmlFor="editName" className="block text-gray-700 text-sm font-bold mb-2">
            Name/Company Name:
          </label>
          <input
            type="text"
            id="editName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="Your Business Name"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="editBio" className="block text-gray-700 text-sm font-bold mb-2">
            About Us/Bio:
          </label>
          <textarea
            id="editBio"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="A brief description of your company or investment focus."
          ></textarea>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          Save Changes
        </button>
      </div>
    </div>
  );

  // Settings Component (Stub)
  const Settings: React.FC = () => (
    <div className="container mx-auto p-6 font-inter">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Settings ⚙️</h2>
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <p className="text-gray-700 mb-4">
          Manage your account settings, notifications, and privacy preferences.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Notification Preferences</h3>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-purple-600"
              defaultChecked
            />
            <span className="ml-2 text-gray-700">Email notifications for new matches</span>
          </label>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          Save Settings
        </button>
      </div>
    </div>
  );

  // Matches Component (Stub)
  const Matches: React.FC = () => (
    <div className="container mx-auto p-6 font-inter">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Matches ✨</h2>
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <p className="text-gray-700 mb-4">
          Here you'll see all your current and past matches. Click on a match to enter the Deal
          Room.
        </p>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg flex items-center justify-between shadow-sm">
            <span className="font-semibold text-gray-800">Acme Innovations Group</span>
            <button
              className="text-purple-600 hover:text-purple-800 font-medium"
              onClick={() => goToDealRoom(buyerProfiles[0])}
            >
              Go to Deal Room
            </button>
          </li>
          {/* Add more placeholder matches */}
          <li className="bg-gray-100 p-4 rounded-lg flex items-center justify-between shadow-sm">
            <span className="font-semibold text-gray-800">Strategic Growth Partners</span>
            <button
              className="text-purple-600 hover:text-purple-800 font-medium"
              onClick={() => goToDealRoom(buyerProfiles[1])}
            >
              Go to Deal Room
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  // Deals Component (Stub)
  const Deals: React.FC = () => (
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

  // Messages Component (Stub)
  const Messages: React.FC = () => (
    <div className="container mx-auto p-6 font-inter">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Messages ✉️</h2>
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <p className="text-gray-700 mb-4">
          All your direct messages with matched parties will appear here.
        </p>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg flex items-center justify-between shadow-sm">
            <span className="font-semibold text-gray-800">Chat with Acme Innovations Group</span>
            <button
              className="text-purple-600 hover:text-purple-800 font-medium"
              onClick={() => goToDealRoom(buyerProfiles[0])}
            >
              Open Chat
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  // Render the appropriate screen
  const renderScreen = () => {
    switch (activeScreen) {
      case "onboarding":
        return <Onboarding onComplete={handleOnboardingComplete} />;
      case "dashboard":
        return (
          <Dashboard
            buyerProfiles={buyerProfiles}
            onAccept={() => {}}
            onReject={() => {}}
            onViewProfile={() => {}}
            onboardingType={onboardingType}
          />
        );
      case "profile-edit":
        return <ProfileEdit />;
      case "settings":
        return <Settings />;
      case "matches":
        return <Matches />;
      case "deals":
        return <Deals />;
      case "messages":
        return <Messages />;
      case "deal-room":
        return matchedBuyer ? (
          <DealRoom buyer={matchedBuyer} onBackToDashboard={goToDashboard} />
        ) : (
          <p className="text-center text-red-500">No matched buyer selected.</p>
        );
      default:
        return <Onboarding onComplete={handleOnboardingComplete} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex">
      {" "}
      {/* Added flex to enable sidebar layout */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.3s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        `}
      </style>
      <script src="https://cdn.tailwindcss.com"></script>
      {activeScreen !== "onboarding" && (
        <Sidebar
          setActiveScreen={setActiveScreen}
          goToDashboard={goToDashboard}
          goToProfileEdit={goToProfileEdit}
        />
      )}
      <div className="flex-1 flex flex-col min-h-screen">
        {" "}
        {/* Main content area */}
        {activeScreen !== "onboarding" && <Header />}
        <main className="py-8 flex-1 md:ml-24">
          {" "}
          {/* Added ml-24 for sidebar offset */}
          {renderScreen()}
        </main>
        {activeScreen !== "onboarding" && <Footer />}
      </div>
    </div>
  );
};

export default App;
