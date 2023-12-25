import { SERVER } from "../helpers";

export const loginUserAPI = (user) => {
  return SERVER.post(`/auth/login`, { ...user });
};

export const verifyUserOTPAPI = (data) => {
  return SERVER.post(`/auth/verifyOtp`, { ...data });
};

export const logoutUser = () => {
  return SERVER.post(`/logout`);
};