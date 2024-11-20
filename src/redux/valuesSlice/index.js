import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valuesLeader: [],  
};

const valuesSlice = createSlice({
  name: 'values',
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
  },
});

export const { setValuesLeader } = valuesSlice.actions;
export default valuesSlice.reducer;

