import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  darkMode: boolean;
};

const initialState: TInitialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeChange: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { themeChange } = themeSlice.actions;
export default themeSlice.reducer;
