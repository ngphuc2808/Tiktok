import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: false,
};

export const darkModeSlice = createSlice({
  name: 'dark-mode',
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
