import { createSlice } from "@reduxjs/toolkit";

const shopModalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    modalItem: null,
  },
  reducers: {
    setModalItem: (state, action) => {
      state.modalItem = action.payload;
    },
  },
});

export const { setModalItem } = shopModalSlice.actions;
export default shopModalSlice;
