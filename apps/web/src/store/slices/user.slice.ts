import {createSlice} from "@reduxjs/toolkit";
import { RootState } from "..";

interface UserState {
  user: {
    _id: string;
    name: string;
    username: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Actions
export const {setSession, logout} = userSlice.actions;

// Selectors
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
