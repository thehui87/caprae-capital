import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { BuyerProfile } from "../components/BuyerProfileCard";
import type { SellerProfile } from "../components/SellerProfileCard";

// Define the component's props to accept either a buyer or a seller profile
interface DealRoomProps {
  // Use a type union to ensure one of these is provided
  matchedProfile: BuyerProfile | SellerProfile;
  role: string | null;
  onBackToDashboard: () => void;
}

// Define the structure for a deal progress step
interface Step {
  id: number;
  label: string;
  isComplete: boolean;
  isActive: boolean;
}

// Deal Room Component
const DealRoom: React.FC<DealRoomProps> = ({ matchedProfile, role, onBackToDashboard }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [financialDoc, setFinancialDoc] = useState<File | null>(null);
  const [summary, setSummary] = useState<string>("");
  const [loadingAI, setLoadingAI] = useState<boolean>(false);
  const [dealStage, setDealStage] = useState<string>("Introduction"); // Current deal stage

  // Use a type guard to determine which profile type we have
  const isBuyerProfile = (profile: BuyerProfile | SellerProfile): profile is BuyerProfile =>
    (profile as BuyerProfile).companyName !== undefined;

  const isMatchedPartyBuyer = isBuyerProfile(matchedProfile);

  // Dynamic values based on role and matched profile
  const partnerName = isMatchedPartyBuyer
    ? (matchedProfile as BuyerProfile).companyName
    : (matchedProfile as SellerProfile).businessName;
  const partnerLogo = isMatchedPartyBuyer
    ? (matchedProfile as BuyerProfile).logo
    : (matchedProfile as SellerProfile).logo;
  const partnerType = isMatchedPartyBuyer ? "Buyer" : "Seller";
  const userType = role === "buyer" ? "Buyer" : "Seller";
  const acquisitionPhrase = role === "buyer" ? "acquisition begins here." : "sale begins here.";

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

  const steps: Step[] = [
    { id: 1, label: "Introduction", isComplete: true, isActive: false },
    { id: 2, label: "Initial Discussion", isComplete: true, isActive: false },
    { id: 3, label: "NDA Signed", isComplete: false, isActive: true },
    { id: 4, label: "Due Diligence Prep", isComplete: false, isActive: false },
    { id: 5, label: "Document Exchange", isComplete: false, isActive: false },
    { id: 6, label: "Financial Analysis", isComplete: false, isActive: false },
    { id: 7, label: "Offer Negotiation", isComplete: false, isActive: false },
    { id: 8, label: "LOI Signed", isComplete: false, isActive: false },
    { id: 9, label: "Legal Review", isComplete: false, isActive: false },
    { id: 10, label: "Closing", isComplete: false, isActive: false },
    { id: 11, label: "Deal Complete", isComplete: false, isActive: false },
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

    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
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
      setDealStage("Financial Analysis");
    } catch (error) {
      console.error("AI analysis error:", error);
      setSummary("Failed to analyze document. Please try again.");
    } finally {
      setLoadingAI(false);
    }
  };

  const StageIndicator: React.FC<{ stage: string; currentStage: string }> = ({
    stage,
    currentStage,
  }) => {
    const stageIndex = dealStages.indexOf(stage);
    const currentIndex = dealStages.indexOf(currentStage);
    const isActive = stageIndex <= currentIndex;
    const isCurrent = stageIndex === currentIndex;

    return (
      <div
        className={`flex items-center ${isCurrent ? "font-bold text-purple-700" : "text-gray-500"}`}
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

      {matchedProfile && (
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <img
              src={partnerLogo}
              alt={partnerName}
              className="w-20 h-20 rounded-full mr-4 border-4 border-purple-400"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Deal Room: <span className="text-purple-700">{partnerName}</span>
              </h2>
              <p className="text-gray-600 text-lg mt-1">
                Your journey to a successful {acquisitionPhrase}
              </p>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Deal Progress</h2>
            <div className="flex flex-col md:flex-row md:items-center relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 z-0">
                <div
                  className="bg-purple-600 h-full transition-all duration-500"
                  style={{
                    width: `${
                      (steps.filter(s => s.isComplete).length / (steps.length - 1)) * 100
                    }%`,
                  }}
                ></div>
              </div>
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex items-center md:flex-col md:flex-1 md:p-2 z-10 relative mb-4 md:mb-0"
                >
                  {index < steps.length - 1 && (
                    <div
                      className={`md:hidden absolute left-4 top-8 w-0.5 h-full ${
                        step.isComplete ? "bg-purple-600" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                  <div className="flex items-center z-10">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm md:text-base
                    ${
                      step.isActive
                        ? "bg-green-600 text-white scale-110"
                        : step.isComplete
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                    >
                      {step.id}
                    </div>
                    <span
                      className={`text-sm md:text-sm ml-3 md:ml-0 md:mt-2 transition-colors text-left
                    ${step.isActive ? "text-primary font-semibold" : "text-gray-500"}`}
                    >
                      {step.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
          <div>
            {activeTab === "overview" && (
              <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Deal Overview</h3>
                <p className="text-gray-700 mb-4">
                  This section provides a high-level summary of the matched deal, including key
                  terms and a timeline of interactions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p>
                      <span className="font-semibold">Buyer:</span>{" "}
                      {role === "buyer" ? "[Your Business Name]" : partnerName}
                    </p>
                    <p>
                      <span className="font-semibold">Seller:</span>{" "}
                      {role === "seller" ? "[Your Business Name]" : partnerName}
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
                  Communicate directly and securely with {partnerName} here.
                </p>
                <div className="bg-white h-96 overflow-y-auto p-4 rounded-lg shadow-md mb-4 flex flex-col-reverse">
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
                        {partnerName} - 10:05 AM
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
                  {role === "buyer"
                    ? "Manage and track all offers and the Letter of Intent to acquire this business."
                    : `Review and manage all offers received from ${partnerName} for your business.`}
                </p>
                <div className="mb-6 p-4 border border-blue-200 rounded-lg bg-white shadow-sm">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {role === "buyer" ? "Create New Offer" : "Offer from Buyer"}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {role === "buyer"
                      ? "Use our guided process to draft a comprehensive offer or LOI."
                      : "Review the latest offer from the buyer here."}
                  </p>
                  {role === "buyer" && (
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
                      Start New Offer Draft
                    </button>
                  )}
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
      )}
    </div>
  );
};

export default DealRoom;
