const { createSlice } = require("@reduxjs/toolkit");

const productModalSlice = createSlice({
  name: "toggleProductModal",
  initialState: {
    productModalVisible: false,
  },
  reducers: {
    productModalVisibilityTrue: (state) => {
      state.productModalVisible = true;
    },
    productModalVisibilityFalse: (state) => {
      state.productModalVisible = false;
    },    
    
  },
});


export const {productModalVisibilityTrue,productModalVisibilityFalse } = productModalSlice.actions;
export default productModalSlice;