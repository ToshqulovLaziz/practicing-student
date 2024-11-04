import { createSlice } from '@reduxjs/toolkit';
import i18n from 'i18next';

const initialState = {
  language: localStorage.getItem('i18nextLng') || 'uz',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
      localStorage.setItem('i18nextLng', action.payload);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
