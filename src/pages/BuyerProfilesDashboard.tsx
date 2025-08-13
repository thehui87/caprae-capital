// pages/BuyerProfilesDashboard.tsx
import React, { useState } from "react";
import BuyerProfileCard from "../components/BuyerProfileCard";
import BuyerProfileDetail from "../components/BuyerProfileDetail";
import type { BuyerProfile } from "../components/BuyerProfileCard";

const COLORS = {
  primary: "#4B3F72",
  background: "#F7F7F7",
  text: "#333333",
};

// Sample Buyer Data
const initialBuyers: BuyerProfile[] = [
  {
    id: "b1",
    companyName: "Global Acquisitions Inc.",
    acquisitionBudget: "$20M - $50M",
    revenueTarget: "$5M - $20M",
    industry: "Software & Technology",
    investmentThesis:
      "Seeking profitable SaaS businesses with recurring revenue for strategic expansion.",
    locationPreference: "North America",
    companyDescription:
      "Global Acquisitions Inc. is a leading private equity firm focused on acquiring high-growth technology companies to drive market consolidation and operational efficiencies. With a proven track record of successful exits, we bring both capital and expertise to our portfolio companies.",
    acquisitionExperience: ['Acquired "CodeFlow" in 2022', 'Acquired "DataSolve" in 2021'],
    keyPersonnel: [
      { name: "Alice Johnson", role: "Head of Acquisitions" },
      { name: "Bob Williams", role: "Lead Analyst" },
    ],
    timeline: "3-6 Months",
    dueDiligenceReady: true,
  },
  {
    id: "b2",
    companyName: "Innovate Venture Partners",
    acquisitionBudget: "$1M - $5M",
    revenueTarget: "Less than $1M",
    industry: "E-commerce & Digital Marketing",
    investmentThesis:
      "Looking for niche e-commerce brands with strong customer loyalty and unique product offerings.",
    locationPreference: "Remote-friendly",
    companyDescription:
      "Innovate Venture Partners is a venture capital firm specializing in early to mid-stage e-commerce and digital marketing businesses. We provide not just funding, but also strategic guidance and operational support to help founders scale their vision.",
    acquisitionExperience: ['Invested in "BloomBox" (e-commerce) in 2023'],
    keyPersonnel: [{ name: "Charlie Green", role: "Managing Partner" }],
    timeline: "6-12 Months",
    dueDiligenceReady: false,
  },
  {
    id: "b3",
    companyName: "Strategic Holdings Group",
    acquisitionBudget: "$50M+",
    revenueTarget: "$20M+",
    industry: "Healthcare & Biotech",
    investmentThesis:
      "Targeting established healthcare service providers or biotech firms with patented technologies.",
    locationPreference: "Global",
    companyDescription:
      "Strategic Holdings Group is a diversified holding company with significant interests across various sectors, including healthcare. We seek stable, high-value assets that provide long-term growth and synergistic opportunities within our existing portfolio.",
    acquisitionExperience: [
      'Acquired "MediSolutions" (healthcare) in 2020',
      'Formed "BioGen Nexus" JV in 2022',
    ],
    keyPersonnel: [
      { name: "Diana Ross", role: "Director of Investments" },
      { name: "Eve Adams", role: "Legal Counsel" },
    ],
    timeline: "6-12 Months",
    dueDiligenceReady: true,
  },
];

const BuyerProfilesDashboard: React.FC = () => {
  const [buyers, setBuyers] = useState<BuyerProfile[]>(initialBuyers);
  const [acceptedBuyers, setAcceptedBuyers] = useState<BuyerProfile[]>([]);
  const [rejectedBuyers, setRejectedBuyers] = useState<BuyerProfile[]>([]);
  const [selectedBuyer, setSelectedBuyer] = useState<BuyerProfile | null>(null);

  const handleAccept = (id: string) => {
    const buyerToMove = buyers.find(b => b.id === id);
    if (buyerToMove) {
      setAcceptedBuyers(prev => [...prev, buyerToMove]);
      setBuyers(prev => prev.filter(b => b.id !== id));
      setSelectedBuyer(null); // Close detail view if open
      console.log(`Accepted buyer: ${buyerToMove.companyName}`);
    }
  };

  const handleReject = (id: string) => {
    const buyerToMove = buyers.find(b => b.id === id);
    if (buyerToMove) {
      setRejectedBuyers(prev => [...prev, buyerToMove]);
      setBuyers(prev => prev.filter(b => b.id !== id));
      setSelectedBuyer(null); // Close detail view if open
      console.log(`Rejected buyer: ${buyerToMove.companyName}`);
    }
  };

  const handleViewDetails = (id: string) => {
    const buyer =
      buyers.find(b => b.id === id) ||
      acceptedBuyers.find(b => b.id === id) ||
      rejectedBuyers.find(b => b.id === id);
    setSelectedBuyer(buyer || null);
  };

  const handleCloseDetails = () => {
    setSelectedBuyer(null);
  };

  return (
    <div className="bg-background min-h-screen font-sans p-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Review Buyer Profiles</h1>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-text mb-6">
          New Potential Buyers ({buyers.length})
        </h2>
        {buyers.length === 0 ? (
          <p className="text-lightText text-center p-8 bg-card rounded-lg shadow-md">
            No new buyer profiles to review at the moment. Check back later!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {buyers.map(buyer => (
              <BuyerProfileCard
                key={buyer.id}
                buyer={buyer}
                onAccept={handleAccept}
                onReject={handleReject}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        <h2 className="text-2xl font-bold text-text mb-6">
          Accepted Buyers ({acceptedBuyers.length})
        </h2>
        {acceptedBuyers.length === 0 ? (
          <p className="text-lightText text-center p-8 bg-card rounded-lg shadow-md">
            No buyers accepted yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 shadow-2xl">
            {acceptedBuyers.map(buyer => (
              <BuyerProfileCard
                key={buyer.id}
                buyer={buyer}
                onAccept={handleAccept} // These buttons could be hidden or change functionality in accepted/rejected lists
                onReject={handleReject}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {selectedBuyer && <BuyerProfileDetail buyer={selectedBuyer} onClose={handleCloseDetails} />}
      </div>
    </div>
  );
};

export default BuyerProfilesDashboard;
