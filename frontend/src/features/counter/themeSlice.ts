import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTheme: 'red',
  error : false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateThemeSuccess(state, action){
      state.currentTheme = action.payload;
      state.error= false;
  },

  updateThemeFailure(state, action){
      state.error= action.payload
  },
  },
})

// Action creators are generated for each case reducer function
export const { updateThemeFailure, updateThemeSuccess } = themeSlice.actions

export default themeSlice.reducer