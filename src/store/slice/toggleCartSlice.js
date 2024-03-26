const { createSlice } = require("@reduxjs/toolkit");

const toggleCartSlice = createSlice({
  name: "toggleSideCart",
  initialState: {
    cartVisible: false,
  },
  reducers: {
    cartVisibility: (state) => {
      state.cartVisible = !state.cartVisible;
    },
    
  },
});


export const {cartVisibility} = toggleCartSlice.actions;
export default toggleCartSlice;