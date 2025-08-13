// buyerSlice.ts
import { createSlice } from "@reduxjs/toolkit";
// import type { BuyerProfile } from "../constants/interfaceItems";
import type { BuyerProfile } from "../components/BuyerProfileCard";
import type { SellerProfile } from "../components/SellerProfileCard";

interface BuyerState {
  matchedBuyer: BuyerProfile | null;
  matchedSeller: SellerProfile | null;
  onboardingType: "buyer" | "seller" | null;
}

const initialState: BuyerState = {
  matchedBuyer: null,
  matchedSeller: null,
  onboardingType: null,
};

const buyerSlice = createSlice({
  name: "buyer",
  initialState,
  reducers: {
    setMatchedBuyer(state, action: { payload: BuyerProfile }) {
      state.matchedBuyer = action.payload;
    },
    setMatchedSeller(state, action: { payload: SellerProfile }) {
      state.matchedSeller = action.payload;
    },
    setOnboardingType(state, action: any) {
      state.onboardingType = action.payload;
    },
  },
});

export const { setMatchedBuyer, setMatchedSeller, setOnboardingType } = buyerSlice.actions;
export default buyerSlice.reducer;
