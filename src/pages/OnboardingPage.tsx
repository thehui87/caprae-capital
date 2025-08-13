// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { commonQuestions, buyerQuestions, sellerQuestions } from "../components/questions";
// export default function OnboardingPage({
//   role: propRole,
//   onComplete,
// }: {
//   role?: string;
//   onComplete: () => void;
// }) {
//   const [role, setRole] = useState<string | null>(propRole || null);
//   const navigate = useNavigate();
//   const [onboarded, setOnboarded] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Load saved role & onboarding state
//     const savedOnboarded = localStorage.getItem("onboarded") === "true";
//     setOnboarded(savedOnboarded);
//     setLoading(false);
//   }, []);
//   useEffect(() => {
//     if (loading) return;

//     if (!role) {
//       const savedRole = localStorage.getItem("role");
//       if (savedRole) {
//         setRole(savedRole);
//       } else {
//         navigate("/role-selection");
//       }
//     } else {
//       if (onboarded) {
//         navigate("/dashboard");
//       }
//     }
//   }, [role, onboarded, navigate]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     localStorage.setItem("onboarded", "true");
//     onComplete();
//   };

//   return (
//     <div className="min-h-[calc(100vh-168px)] flex items-center justify-center bg-gray-50 p-6">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {role === "buyer" ? "Buyer Onboarding" : "Seller Onboarding"}
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {role === "buyer" ? buyerQuestions : sellerQuestions}

//           <button
//             type="submit"
//             className="mt-6 w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
//           >
//             Complete Onboarding
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { commonQuestions, buyerQuestions, sellerQuestions } from "../components/questions";
import { buyerQuestionsStep1 } from "./BuyerOnboarding/Step1";
import { buyerQuestionsStep2 } from "./BuyerOnboarding/Step2";
import { buyerQuestionsStep3 } from "./BuyerOnboarding/Step3";
import { buyerQuestionsStep4 } from "./BuyerOnboarding/Step4";

import { sellerQuestionsStep1 } from "./SellerOnboarding/Step1";
import { sellerQuestionsStep2 } from "./SellerOnboarding/Step2";
import { sellerQuestionsStep3 } from "./SellerOnboarding/Step3";
import { sellerQuestionsStep4 } from "./SellerOnboarding/Step4";
// You'll need to define your questions in a way that can be split into steps.
// For example:
// const buyerQuestionsStep1 = <div>{/* Step 1 questions here */}</div>;
// const buyerQuestionsStep2 = <div>{/* Step 2 questions here */}</div>;
// const buyerQuestionsStep3 = <div>{/* Step 3 questions here */}</div>;
// const buyerQuestionsStep4 = <div>{/* Step 4 questions here */}</div>;

// const sellerQuestionsStep1 = <div>{/* Step 1 questions here */}</div>;
// const sellerQuestionsStep2 = <div>{/* Step 2 questions here */}</div>;
// const sellerQuestionsStep3 = <div>{/* Step 3 questions here */}</div>;
// const sellerQuestionsStep4 = <div>{/* Step 4 questions here */}</div>;

export default function OnboardingPage({
  role: propRole,
  onComplete,
}: {
  role?: string;
  onComplete: () => void;
}) {
  const [role, setRole] = useState<string | null>(propRole || null);
  const navigate = useNavigate();
  const [onboarded, setOnboarded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  useEffect(() => {
    const savedOnboarded = localStorage.getItem("onboarded") === "true";
    setOnboarded(savedOnboarded);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;

    if (!role) {
      const savedRole = localStorage.getItem("role");
      if (savedRole) {
        setRole(savedRole);
      } else {
        navigate("/role-selection");
      }
    } else {
      if (onboarded) {
        navigate("/dashboard");
      }
    }
  }, [role, onboarded, navigate, loading]);

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === totalSteps) {
      localStorage.setItem("onboarded", "true");
      onComplete();
    } else {
      handleNextStep();
    }
  };

  const renderQuestions = () => {
    if (role === "buyer") {
      switch (currentStep) {
        case 1:
          return buyerQuestionsStep1;
        case 2:
          return buyerQuestionsStep2;
        case 3:
          return buyerQuestionsStep3;
        case 4:
          return buyerQuestionsStep4;
        default:
          return null;
      }
    } else if (role === "seller") {
      switch (currentStep) {
        case 1:
          return sellerQuestionsStep1;
        case 2:
          return sellerQuestionsStep2;
        case 3:
          return sellerQuestionsStep3;
        case 4:
          return sellerQuestionsStep4;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className="min-h-[calc(100vh-168px)] flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {role === "buyer" ? "Buyer Onboarding" : "Seller Onboarding"}
        </h2>

        {/* Progress Indicator */}
        <div className="flex justify-between items-center mb-6">
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className="flex-1 flex flex-col items-center relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                  ${
                    index + 1 <= currentStep
                      ? "bg-gray-700 text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
              >
                {index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-3 w-full h-1
                    ${index + 1 < currentStep ? "bg-gray-700" : "bg-gray-300"}`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {renderQuestions()}

          <div className="mt-6 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className={`py-2 px-4 rounded transition
                ${currentStep > 1 ? "ml-auto" : "w-full"}
                ${
                  currentStep < totalSteps
                    ? "bg-gray-700 text-white hover:bg-gray-900"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
            >
              {currentStep < totalSteps ? "Next" : "Complete Onboarding"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
