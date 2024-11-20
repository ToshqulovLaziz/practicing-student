import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import modalReducer from "./modalSlice";
import valuesReducer from "./valuesSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    modal: modalReducer,
    values: valuesReducer,
  },
});
