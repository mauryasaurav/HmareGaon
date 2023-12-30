import axios from "axios";
import { getLocalData } from "../utils/helpers";

export const SERVER = axios.create({
  baseURL: "http://localhost:3000/api/v1/user",
  withCredentials: true,
  credentials: "include",
});

SERVER.interceptors.request.use(async (config) => {
  const userToken = await getLocalData("userToken")
  config.headers.accesstoken = userToken;
  return config;
},
  (error) => {
    return Promise.reject(e.response.data.message || "Something went wrong. Please try again after some time.");
  }
);

SERVER.interceptors.response.use(
  function (response) {
    return response;
  },

  function (e) {
    // if (e.response?.status === 401) {
    //   window.location.href = "/login";
    // }
    return Promise.reject(e.response?.data?.message || "Something went wrong. Please try again after some time.");
  }
);
