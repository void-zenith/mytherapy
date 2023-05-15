import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addOccupation,
  allOccupations,
  deleteOccupation,
  updateOccupation,
} from "./OccupationAPI";
const initialState = {
  isLoading: false,
  occupationCollection: [],
};

export const addOccupationFn = createAsyncThunk(
  "occupation/addOccupation",
  async (data, { rejectWithValue }) => {
    try {
      return await addOccupation(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);

export const getOccupationFn = createAsyncThunk(
  "occupation/getOccupationFn",
  async (data, { rejectWithValue }) => {
    try {
      return await allOccupations(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);
const OccupationSlice = createSlice({
  name: "occupation",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOccupationFn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOccupationFn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.occupationCollection = action.payload.data.data;
      })
      .addCase(getOccupationFn.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addOccupationFn.fulfilled, () => {
        toast.success("Occupation Added Successfully");
      });
  },
});
export default OccupationSlice.reducer;
