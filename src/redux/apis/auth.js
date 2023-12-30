import { SERVER } from "../helpers";

export const loginUserAPI = (user) => {
  return SERVER.post(`/auth/login`, { ...user });
};

export const verifyUserOTPAPI = (data) => {
  return SERVER.post(`/auth/verifyOtp`, { ...data });
};

export const registerUserAPI = (data) => {
  return SERVER.post(`/auth/register`, { ...data });
};

export const resendAPI = (data) => {
  return SERVER.post(`/auth/resendOtp`, { ...data });
};

export const checkAuthenticationAPI = () => {
  return SERVER.get(`/users/me`);
};

export const logoutUser = () => {
  return SERVER.post(`/logout`);
};
