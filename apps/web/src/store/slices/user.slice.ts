import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "..";

interface UserState {
  loading: boolean;
  accessToken: string | null;
  user: {
    _id: string;
    name: string;
    username: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  loading: true,
  accessToken: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
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
export const {setLoading, setAccessToken, setSession, logout} = userSlice.actions;

// Reducer
export default userSlice.reducer;
