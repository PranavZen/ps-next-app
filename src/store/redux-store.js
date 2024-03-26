import { configureStore } from "@reduxjs/toolkit";
import locSlice from "./slice/selectLocationSlice";
import selectCategorySlice from "./slice/selectCategorySlice";
import toggleSideMenuSlice from "./slice/toggleMenuSlice";
import shopModalSlice from "./slice/shopModalSlice";
import toggleCartSlice from "./slice/toggleCartSlice";
import productModalSlice from "./slice/productModalSlice";

const mainStore = configureStore({
  reducer: {
    location: locSlice.reducer,
    selectCategory: selectCategorySlice.reducer,
    sidemenu: toggleSideMenuSlice.reducer,
    modal: shopModalSlice.reducer,
    sidecart: toggleCartSlice.reducer,
    productModal: productModalSlice.reducer,
  },
});

export default mainStore;
