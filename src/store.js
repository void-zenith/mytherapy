import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authReducer from "./Features/AuthSlice/AuthSlice";
import userReducer from "./Features/UserSlice/UserSlice";
import viewReducer from "./Features/ViewSlice";
import roleReducer from "./Features/RoleSlice/RoleSlice";
import occupationReducer from "./Features/OccupationSlice/OccupationSlice";
import bookingReducer from "./Features/BookingSlice/BookingSlice";
import profileReducer from "./Features/ProfileSlice/ProfileSlice";
const reducers = combineReducers({
  auth: authReducer,
  view: viewReducer,
  user: userReducer,
  role: roleReducer,
  booking: bookingReducer,
  occupation: occupationReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["prfile", "view", "user", "role", "booking", "occupation"],
};

const persistededucer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistededucer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
