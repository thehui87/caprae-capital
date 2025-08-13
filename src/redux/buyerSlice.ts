// buyerSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { BuyerProfile } from "../constants/interfaceItems";

interface BuyerState {
  matchedBuyer: BuyerProfile | null;
  onboardingType: "buyer" | "seller" | null;
}

const initialState: BuyerState = {
  matchedBuyer: null,
  onboardingType: null,
};

const buyerSlice = createSlice({
  name: "buyer",
  initialState,
  reducers: {
    setMatchedBuyer(state, action: { payload: BuyerProfile }) {
      state.matchedBuyer = action.payload;
    },
    setOnboardingType(state, action: any) {
      state.onboardingType = action.payload;
    },
  },
});

export const { setMatchedBuyer, setOnboardingType } = buyerSlice.actions;
export default buyerSlice.reducer;
