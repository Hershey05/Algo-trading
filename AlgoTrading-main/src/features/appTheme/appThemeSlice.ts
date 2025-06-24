import { createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "../../common/themes/theme";

interface AppThemeState {
  theme: string;
  themeProperties: DefaultTheme;
}

const initialState: AppThemeState = {
  theme: "light",
  themeProperties: lightTheme,
};

const appThemeSlice = createSlice({
  name: "appTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeProperties = state.theme === "light" ? darkTheme : lightTheme;
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = appThemeSlice.actions;
export default appThemeSlice.reducer;
