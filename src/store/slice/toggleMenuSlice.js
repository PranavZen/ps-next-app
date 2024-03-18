import { createSlice } from "@reduxjs/toolkit";

const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState: {
    isLeftMenuVisible: false,
    leftMenuComponent: null,
  },
  reducers: {
    toggleMenuVisible(state) {
      state.isLeftMenuVisible = !state.isLeftMenuVisible;
      
    },
    toggleMenuComp(state, action) {
      state.leftMenuComponent = action.payload;
    }
  },
});
export const { toggleMenuVisible,toggleMenuComp  } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
