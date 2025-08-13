// Define interfaces for data structures
export interface BuyerProfile {
  id: string;
  name: string;
  headline: string;
  industryFocus: string;
  revenueRange: string;
  acquisitionBudget: string;
  location: string;
  logo: string;
  companyName: string;
  revenueTarget: string;
  expanded: {
    investmentThesis: string;
    pastAcquisitions: string[];
    teamOverview: string;
    financialCapacity: string;
    detailedPreferences: string;
  };
}

export const buyerProfiles: BuyerProfile[] = [
  {
    id: "buy1",
    name: "Acme Innovations Group",
    headline: "Seeking established tech ventures with recurring revenue.",
    industryFocus: "SaaS, FinTech, E-commerce",
    revenueRange: "$5M - $20M ARR",
    acquisitionBudget: "$20M - $50M",
    location: "Remote-friendly, USA",
    logo: "https://placehold.co/60x60/9F7AEA/FFFFFF?text=AIG",
    companyName: "Acme Innovations Group",
    revenueTarget: "$4M",
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
    companyName: "Strategic Growth Partners",
    revenueTarget: "$5M",
    expanded: {
      investmentThesis:
        "Committed to impact investing, we seek businesses aligning with ethical production and environmental sustainability. We provide capital and strategic guidance to scale.",
      pastAcquisitions: ["EcoBliss (Organic Foods, 2023)", "PureLiving (Wellness Products, 2022)"],
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
    companyName: "Venture Capital X",
    revenueTarget: "$6M",
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
