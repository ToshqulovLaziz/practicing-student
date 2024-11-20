import { createSlice } from "@reduxjs/toolkit";

const valuesSlice = createSlice({
  name: "values",
  initialState: { valuesLeader: [] },
  reducers: {
    setValuesLeader(state, action) {
        state.valuesLeader = action.payload;
    },
    prepare(values) {
        return {
          payload: {
            ...values,
            date: values.date?.toISOString(),
          },
        };
      },
  },
});

export default valuesSlice.reducer;
export const { setValuesLeader } = valuesSlice.actions;
