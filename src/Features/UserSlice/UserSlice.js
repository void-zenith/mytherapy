import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  allTherapists,
  allCustomers,
  allUnverifiedTherapists,
  singleTherapy,
  singleCustomer,
  deleteUser,
  updateuser,
} from "./UserApi";
const initialState = {
  isLoading: false,
  therapistsCollection: [],
  customerCollection: [],
  unverifiedTherapists: [],
  selectedUser: {},
};
export const deleteUserFn = createAsyncThunk(
  "user/deleteUser",
  async (data, { rejectWithValue }) => {
    try {
      return await deleteUser(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);
export const getCustomer = createAsyncThunk(
  "user/getCustomer",
  async (data, { rejectWithValue }) => {
    try {
      return await singleCustomer(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);
export const getTherapy = createAsyncThunk(
  "user/getTherapy",
  async (data, { rejectWithValue }) => {
    try {
      return await singleTherapy(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);
export const allUnverifiedTherapistFn = createAsyncThunk(
  "user/allUnverifiedTherapistFn",
  async (data, { rejectWithValue }) => {
    try {
      return await allUnverifiedTherapists(data);
    } catch (err) {
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);

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
  reducers: {
    deleteUserFrontend: (state, action) => {
      console.log(action);
      if (action.payload.toDelete === "therapist") {
        let index = state.therapistsCollection.findIndex(
          (item) => action.payload === item.id
        );
        let newArr = [...state.therapistsCollection];
        newArr.splice(index, 1);
        state.therapistsCollection = newArr;
      }
      if (action.payload.toDelete === "user") {
        let index = state.customerCollection.findIndex(
          (item) => action.payload === item.id
        );
        let newArr = [...state.customerCollection];
        newArr.splice(index, 1);
        state.customerCollection = newArr;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserFn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserFn.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("User Deleted Successfully!");
      })
      .addCase(deleteUserFn.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getCustomer.pending, (state) => {
        state.isLoading = true;
        state.selectedUser = {};
      })
      .addCase(getCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedUser = action.payload.data.data;
      })
      .addCase(getCustomer.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getTherapy.pending, (state) => {
        state.isLoading = true;
        state.selectedUser = {};
      })
      .addCase(getTherapy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedUser = action.payload.data.data;
      })
      .addCase(getTherapy.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(allUnverifiedTherapistFn.pending, (state, action) => {
        state.isLoading = true;
        state.unverifiedTherapists = [];
      })
      .addCase(allUnverifiedTherapistFn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.unverifiedTherapists = action.payload.data.data;
      })
      .addCase(allTherapistFn.pending, (state, action) => {
        state.therapistsCollection = [];
        state.isLoading = true;
      })
      .addCase(allTherapistFn.fulfilled, (state, action) => {
        state.therapistsCollection = action.payload.data.data;
        state.isLoading = false;
      })
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
export const { deleteUserFrontend } = UserSlice.actions;
export default UserSlice.reducer;
