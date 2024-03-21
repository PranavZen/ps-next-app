const { createSlice } = require("@reduxjs/toolkit");

const toggleSideMenuSlice = createSlice({
  name: "toggleSideMenu",
  initialState: {
    visibleComponent: false,
    selectedComponent: null,
  },
  reducers: {
    setVisibility: (state) => {
      state.visibleComponent = !state.visibleComponent;
    },
    setSideComponent: (state, action) => {
      state.selectedComponent = action.payload;
    },
  },
});


export const {setVisibility, setSideComponent} = toggleSideMenuSlice.actions;
export default toggleSideMenuSlice;