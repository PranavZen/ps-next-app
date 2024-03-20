import { configureStore } from "@reduxjs/toolkit";
import locSlice from "./slice/selectLocationSlice";
import selectCategorySlice from "./slice/selectCategorySlice";
import toggleSideMenuSlice from "./slice/toggleMenuSlice";

const mainStore = configureStore({
  reducer: {
    location: locSlice.reducer,
    selectCategory: selectCategorySlice.reducer,
    sidemenu: toggleSideMenuSlice.reducer,
  },
});

export default mainStore;
