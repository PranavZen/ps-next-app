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
    setMenuComponent(state, action) {
      state.leftMenuComponent = action.payload;
    }
  },
});

export const { toggleMenuVisible, setMenuComponent } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
