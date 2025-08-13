import { useState } from "react";

// Define Onboarding Props Interface
interface OnboardingProps {
  onComplete: (type: "buyer" | "seller") => void;
}

// Onboarding component
const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [userType, setUserType] = useState<"buyer" | "seller" | "">("");
  const [currentOnboardingStep, setCurrentOnboardingStep] = useState<number>(1);

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
