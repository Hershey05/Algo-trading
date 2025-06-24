import { configureStore } from "@reduxjs/toolkit";
import appThemeReducer from "../features/appTheme/appThemeSlice";

export const store = configureStore({
  reducer: {
    appTheme: appThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
