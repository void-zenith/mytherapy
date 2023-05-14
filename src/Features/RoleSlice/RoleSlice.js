import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addRole, allRoles, deleterole, updaterole } from "./RoleAPI";
const initialState = {
  isLoading: false,
  roleCollection: [],
};

export const addRoleFn = createAsyncThunk(
  "role/addRole",
  async (data, { rejectWithValue }) => {
    try {
      return await addRole(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);

export const getRoleFn = createAsyncThunk(
  "role/getRole",
  async (data, { rejectWithValue }) => {
    try {
      return await allRoles(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);
const RoleSlice = createSlice({
  name: "role",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRoleFn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoleFn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.roleCollection = action.payload.data.data;
      })
      .addCase(getRoleFn.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export default RoleSlice.reducer;
