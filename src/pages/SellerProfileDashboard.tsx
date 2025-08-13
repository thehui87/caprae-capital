// pages/SellerProfilesDashboard.tsx
import React, { useState } from "react";
import SellerProfileCard from "../components/SellerProfileCard";
import type { SellerProfile } from "../components/SellerProfileCard";
import SellerProfileDetail from "../components/SellerProfileDetail";

const COLORS = {
  primary: "#4B3F72",
  background: "#F7F7F7",
  text: "#333333",
};

// Sample Seller Data
const initialSellers: SellerProfile[] = [
  {
    id: "s1",
    businessName: "Innovate Solutions Inc.",
    industry: "Software as a Service (SaaS)",
    annualRevenue: "$5M - $20M",
    employees: 45,
    reasonForSale: "Strategic pivot to new venture.",
    valuationExpectation: "Seeking 3-5x annual revenue.",
    businessDescription:
      "A highly profitable SaaS company providing project management tools for mid-sized enterprises, with a strong recurring revenue model and a loyal customer base.",
    isProfitable: true,
    businessWebsite: "https://innovate.com",
    keyHighlights: [
      "Market-leading product in a niche industry.",
      "High customer retention rate (95%).",
      "Fully remote team with low overhead.",
    ],
    teamInvolvement: "Assist with a transition period",
  },
  {
    id: "s2",
    businessName: "The E-commerce Hub",
    industry: "E-commerce",
    annualRevenue: "$1M - $5M",
    employees: 10,
    reasonForSale: "Owner retirement.",
    valuationExpectation: "Negotiable, based on buyer synergy.",
    businessDescription:
      "An established e-commerce store specializing in niche home goods. Strong brand identity and organic traffic with a diverse supplier network.",
    isProfitable: true,
    businessWebsite: "https://ecomhub.com",
    keyHighlights: [
      "Strong brand with a loyal social media following.",
      "Diversified supplier base.",
      "Optimized for international shipping.",
    ],
    teamInvolvement: "Exit immediately",
  },
  {
    id: "s3",
    businessName: "Digital Marketing Pros",
    industry: "Digital Marketing Agency",
    annualRevenue: "Less than $1M",
    employees: 5,
    reasonForSale: "Partner seeking new opportunities.",
    valuationExpectation: "Seeking fair market value.",
    businessDescription:
      "A boutique digital marketing agency providing services for small businesses, specializing in SEO and content marketing. The business has a strong local presence.",
    isProfitable: true,
    businessWebsite: "https://digitalpros.com",
    keyHighlights: [
      "Solid portfolio of local clients.",
      "Experienced team with a strong reputation.",
      "Potential for rapid scalability.",
    ],
    teamInvolvement: "Stay with the business",
  },
];

const SellerProfilesDashboard: React.FC = () => {
  const [sellers, setSellers] = useState<SellerProfile[]>(initialSellers);
  const [acceptedSellers, setAcceptedSellers] = useState<SellerProfile[]>([]);
  const [rejectedSellers, setRejectedSellers] = useState<SellerProfile[]>([]);
  const [selectedSeller, setSelectedSeller] = useState<SellerProfile | null>(null);

  const handleAccept = (id: string) => {
    const sellerToMove = sellers.find(s => s.id === id);
    if (sellerToMove) {
      setAcceptedSellers(prev => [...prev, sellerToMove]);
      setSellers(prev => prev.filter(s => s.id !== id));
      setSelectedSeller(null);
      console.log(`Accepted seller: ${sellerToMove.businessName}`);
    }
  };

  const handleReject = (id: string) => {
    const sellerToMove = sellers.find(s => s.id === id);
    if (sellerToMove) {
      setRejectedSellers(prev => [...prev, sellerToMove]);
      setSellers(prev => prev.filter(s => s.id !== id));
      setSelectedSeller(null);
      console.log(`Rejected seller: ${sellerToMove.businessName}`);
    }
  };

  const handleViewDetails = (id: string) => {
    const seller =
      sellers.find(s => s.id === id) ||
      acceptedSellers.find(s => s.id === id) ||
      rejectedSellers.find(s => s.id === id);
    setSelectedSeller(seller || null);
  };

  const handleCloseDetails = () => {
    setSelectedSeller(null);
  };

  return (
    <div className="bg-background min-h-[calc(100vh-168px)] font-sans p-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Review Seller Profiles</h1>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-text mb-6">
          New Potential Businesses ({sellers.length})
        </h2>
        {sellers.length === 0 ? (
          <p className="text-lightText text-center p-8 bg-card rounded-lg shadow-md">
            No new businesses to review at the moment. Check back later!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sellers.map(seller => (
              <SellerProfileCard
                key={seller.id}
                seller={seller}
                onAccept={handleAccept}
                onReject={handleReject}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        <h2 className="text-2xl font-bold text-text mb-6">
          Accepted Businesses ({acceptedSellers.length})
        </h2>
        {acceptedSellers.length === 0 ? (
          <p className="text-lightText text-center p-8 bg-card rounded-lg shadow-md">
            No businesses accepted yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {acceptedSellers.map(seller => (
              <SellerProfileCard
                key={seller.id}
                seller={seller}
                onAccept={handleAccept}
                onReject={handleReject}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {selectedSeller && (
          <SellerProfileDetail seller={selectedSeller} onClose={handleCloseDetails} />
        )}
      </div>
    </div>
  );
};

export default SellerProfilesDashboard;
