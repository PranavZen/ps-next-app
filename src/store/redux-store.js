import { configureStore } from "@reduxjs/toolkit";
import locSlice from "./slice/selectLocationSlice";
import toggleMenuSlice from "./slice/toggleMenuSlice";

const mainStore = configureStore({
  reducer: {
    location: locSlice.reducer,
    sidemenu: toggleMenuSlice.reducer,
  },
});

export default mainStore;
