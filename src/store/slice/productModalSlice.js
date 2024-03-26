const { createSlice } = require("@reduxjs/toolkit");

const productModalSlice = createSlice({
  name: "toggleProductModal",
  initialState: {
    productModalVisible: false,
  },
  reducers: {
    productModalVisibility: (state) => {
      state.productModalVisible = !state.productModalVisible;
    },
    
  },
});


export const {productModalVisibility} = productModalSlice.actions;
export default productModalSlice;