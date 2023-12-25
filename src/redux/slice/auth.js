import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'login_request',
  initialState: {
    loginToken: null,
    accessToken: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequest: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.loginToken = action.payload;
    },
    verifyOTPSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {loginRequest, loginSuccess, loginFailure, verifyOTPSuccess} =
  authSlice.actions;
export default authSlice.reducer;
