import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
  withCredentials: true,
  withXSRFToken: true,
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get("csrftoken");
  if (token) {
    config.headers["X-CSRFToken"] = token;
  }
  return config;
});

export default instance;
