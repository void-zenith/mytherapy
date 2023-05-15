import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getProfile } from "./ProfileAPI";

const initialState = {
  isLoading: false,
  currentProfile: {},
};

export const getProfileFn = createAsyncThunk(
  "profile/getProfileFn",
  async (data, { rejectWithValue }) => {
    try {
      return await getProfile(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);
const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProfileFn.pending, (state) => {
        state.isLoading = true;
        state.currentProfile = {};
      })
      .addCase(getProfileFn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProfile = action.payload.data.data;
      })
      .addCase(getProfileFn.rejected, (state, action) => {
        state.currentProfile = {};
        state.isLoading = false;
      });
  },
});
export default ProfileSlice.reducer;
