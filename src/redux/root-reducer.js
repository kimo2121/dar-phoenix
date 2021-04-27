import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import navbarReducer from "./navbar/navbar.reducer";
import bannerReducer from "./banner/banner.reducer";
// import productReducer from "./products/product.reducer";
// import checkoutReducer from "./checkout/checkout.reducer";
// import ordersReducer from "./orders/order.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "navbar", "bannerReducer"],
};

const rootReducer = combineReducers({
  // user: userReducer,
  cart: cartReducer,
  navbar: navbarReducer,
  banner: bannerReducer,
  // checkout: checkoutReducer,
  // orders: ordersReducer,
});

export default persistReducer(persistConfig, rootReducer);
