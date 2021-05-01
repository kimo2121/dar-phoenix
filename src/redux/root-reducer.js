import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import navbarReducer from "./navbar/navbar.reducer";
import bannerReducer from "./banner/banner.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["navbar", "bannerReducer"],
};

const rootReducer = combineReducers({
  navbar: navbarReducer,
  banner: bannerReducer,
});

export default persistReducer(persistConfig, rootReducer);
