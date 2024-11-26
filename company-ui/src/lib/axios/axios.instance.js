// axios instance
import axios from "axios";

// const $axios = axios.create({
//   baseURL: "http://localhost:8080",
//   timeout: 5000
// });

const $axios = axios.create({
  baseURL: "https://company-api-ehg1.onrender.com",
  timeout: 5000
});
// axios request interceptor
$axios.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default $axios;
