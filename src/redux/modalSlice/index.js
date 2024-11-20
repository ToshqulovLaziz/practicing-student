import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { modalLeader: false },
  reducers: {
    setModalLeader(state) {
      state.modalLeader = !state.modalLeader;
    },
  },
});

export default modalSlice.reducer;
export const { setModalLeader } = modalSlice.actions;
