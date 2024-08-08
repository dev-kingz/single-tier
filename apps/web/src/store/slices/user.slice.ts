import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "..";

interface UserState {
  status: "pending" | "fulfilled" | "rejected";
  accessToken: string | null;
  user: {
    _id: string;
    name: string;
    username: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  status: "pending",
  accessToken: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<UserState["status"]>) => {
      state.status = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setSession: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.status = "rejected";
      state.accessToken = null;
      state.user = null;
    },
  },
});

// Selectors
export const selectUser = (state: RootState) => state.user;

// Actions
export const {setStatus, setAccessToken, setSession, logout} = userSlice.actions;

// Reducer
export default userSlice.reducer;
