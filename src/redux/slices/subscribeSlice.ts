// src/redux/slices/exampleSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

interface SubscribeState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SubscribeState = {
  status: "idle",
  error: null,
};

export const subscribeUser = createAsyncThunk(
  "subscribe/subscribeUser",
  async (userData: { email: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/subscribe", userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Subscription failed"
      );
    }
  }
);

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(subscribeUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default subscribeSlice.reducer;
