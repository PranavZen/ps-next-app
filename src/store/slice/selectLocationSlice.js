import { createSlice } from "@reduxjs/toolkit";

const locSlice = createSlice({
  name: "locationSlice",
  initialState: {
    selectedStore: null,
  },
  reducers: {
    setSelectedStore: (state, action) => {
      state.selectedStore = action.payload;
    },
  },
});

export const { setSelectedStore } = locSlice.actions;
export default locSlice;
