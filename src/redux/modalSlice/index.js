import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { modalLeader: false, modalStudent: false },
  reducers: {
    setModalLeader(state) {
      state.modalLeader = !state.modalLeader;
    },
    setModalStudent(state) {
      state.modalStudent = !state.modalStudent;
    },
  },
});

export default modalSlice.reducer;
export const { setModalLeader, setModalStudent} = modalSlice.actions;
