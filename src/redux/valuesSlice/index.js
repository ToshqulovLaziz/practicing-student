import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valuesLeader: [],
  valuesStudent: [],
  valuesOragnization: [],
};

const valuesSlice = createSlice({
  name: "values",
  initialState,
  reducers: {
    setValuesLeader: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.valuesLeader = action.payload;
      } else {
        console.error("Payload for setValuesLeader must be an array.");
        state.valuesLeader = [];
      }
    },
    setValuesStudent: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.valuesStudent = action.payload;
      } else {
        console.error("Payload for setValuesStudent must be an array.");
        state.valuesStudent = [];
      }
    },
    setValuesOragnization: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.valuesOragnization = action.payload;
      } else {
        console.error("Payload for setValuesOragnization must be an array.");
        state.valuesOragnization = [];
      }
    },
  },
});

export const { setValuesLeader, setValuesStudent, setValuesOragnization } = valuesSlice.actions;
export default valuesSlice.reducer;
