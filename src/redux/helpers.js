import axios from "axios";

export const SERVER = axios.create({
  baseURL: "http://localhost:3000/api/v1/user",
  withCredentials: true,
  credentials: "include",
});

SERVER.interceptors.request.use(
  (config) => {
    config.headers.access_token = "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

SERVER.interceptors.response.use(
  function (response) {
    return response;
  },

  function (e) {
    if (e.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(e);
  }
);
