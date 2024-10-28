import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Entries: null,
  error: false,
};

export const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    saveSucces(state, action) {
      state.Entries = action.payload;
      state.error = false;
    },

    saveFailure(state, action) {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveSucces, saveFailure } =
entrySlice.actions;

export default entrySlice.reducer;
