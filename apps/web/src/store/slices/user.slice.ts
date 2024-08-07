import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "..";

interface UserState {
  token: string | null;
  user: {
    _id: string;
    name: string;
    username: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    setSession: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      // Clear the local storage
      localStorage.removeItem("token");
    },
  },
});

// Selectors
export const selectUser = (state: RootState) => state.user;

// Actions
export const {login, setSession, logout} = userSlice.actions;

// Reducer
export default userSlice.reducer;
