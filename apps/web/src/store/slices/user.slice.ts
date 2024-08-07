import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "..";

interface UserState {
  accessToken: string | null;
  user: {
    _id: string;
    name: string;
    username: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  accessToken: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setSession: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

// Selectors
export const selectUser = (state: RootState) => state.user;

// Actions
export const {setAccessToken, setSession, logout} = userSlice.actions;

// Reducer
export default userSlice.reducer;
