import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authReducer from "./Features/AuthSlice/AuthSlice";
import viewReducer from "./Features/ViewSlice";
const reducers = combineReducers({
  auth: authReducer,
  view: viewReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["view"],
};

const persistededucer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistededucer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
