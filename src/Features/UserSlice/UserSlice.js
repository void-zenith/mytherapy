import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allTherapists, allCustomers } from "./UserApi";
const initialState = {
  isLoading: false,
  therapistsCollection: [],
  customerCollection: [],
  unverifiedTherapists: [],
};

export const allTherapistFn = createAsyncThunk(
  "user/allTherapistFn",
  async (data, { rejectWithValue }) => {
    try {
      return await allTherapists(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);
export const allCustomerFn = createAsyncThunk(
  "user/allCustomerFn",
  async (data, { rejectWithValue }) => {
    try {
      return await allCustomers(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allCustomerFn.pending, (state, action) => {
        state.isLoading = true;
        state.customerCollection = [];
      })
      .addCase(allCustomerFn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customerCollection = action.payload.data.data;
      });
  },
});

export default UserSlice.reducer;
