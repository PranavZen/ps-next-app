const { createSlice } = require("@reduxjs/toolkit");

const toggleSideMenuSlice = createSlice({
  name: "toggleSideMenu",
  initialState: {
    visibleComponent: false,
    selectedComponent: null,
  },
  reducers: {
    setVisibility: (state) => {
      return !visibleComponent;
    },
    setSideComponent: (state,action) => {
      return action.payload;
    }
  }
});

export const {setVisibility, setSideComponent} = toggleSideMenuSlice.actions;
export default toggleSideMenuSlice;