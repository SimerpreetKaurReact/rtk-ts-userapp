import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  username: string;
}
interface InitialState {
  loading: boolean;
  data: User[];
  error: string;
}
const initialState: InitialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users", {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    })
    .then((response) => response.data);
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default userSlice.reducer;
