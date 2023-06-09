import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

// Create the store
export default configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // if not necessary if your feature is not too complex, you can just comment this line if you dont need it
});