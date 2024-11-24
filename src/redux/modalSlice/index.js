import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalLeader: false,
    modalStudent: false,
    modalOragnization: false,
  },
  reducers: {
    setModalLeader(state) {
      state.modalLeader = !state.modalLeader;
    },
    setModalStudent(state) {
      state.modalStudent = !state.modalStudent;
    },
    setModalOragnization(state) {
      state.modalOragnization = !state.modalOragnization;
    },
  },
});

export default modalSlice.reducer;
export const { setModalLeader, setModalStudent, setModalOragnization } = modalSlice.actions;
