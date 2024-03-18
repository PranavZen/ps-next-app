import locSlice from "./slice/selectLocationSlice";
import toggleMenuSlice from "./slice/toggleMenuSlice";

const { configureStore } = require("@reduxjs/toolkit");

const mainStore = configureStore({
  reducer: {
    location: locSlice.reducer,
    sidemenu: toggleMenuSlice.reducer,
  },
});

export default mainStore;
