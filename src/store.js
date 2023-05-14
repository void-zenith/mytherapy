import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authReducer from "./Features/AuthSlice/AuthSlice";
import userReducer from "./Features/UserSlice/UserSlice";
import viewReducer from "./Features/ViewSlice";
import roleReducer from "./Features/RoleSlice/RoleSlice";
import bookingReducer from "./Features/BookingSlice/BookingSlice";
const reducers = combineReducers({
  auth: authReducer,
  view: viewReducer,
  user: userReducer,
  role: roleReducer,
  booking: bookingReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["view", "user", "role", "booking"],
};

const persistededucer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistededucer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
