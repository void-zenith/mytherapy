import { createSlice } from "@reduxjs/toolkit";

const registerState = {
  viewRegisterOption: false,
  viewRegisterDoctor: false,
  viewRegisterUser: false,
};
const initialState = {
  isLoading: false,
  isSelected: false,
  registerViews: { ...registerState },
};
const ViewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    selectRegisterOption: (state, action) => {
      state.isSelected = true;
      state.registerViews = { ...registerState };
      state.registerViews[`${action.payload}`] = true;
    },
    unSelectRegisterOption: (state) => {
      state.isSelected = false;
      state.registerViews = { ...registerState };
    },
  },
});

export const { selectRegisterOption, unSelectRegisterOption } =
  ViewSlice.actions;
export default ViewSlice.reducer;
