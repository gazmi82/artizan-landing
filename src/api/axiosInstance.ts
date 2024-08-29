// src/api/axiosInstance.ts
import axios from "axios";
console.log("All Environment Variables:", process.env);
console.log("Base URL:", process.env.REACT_APP_BASE_URL);

const axiosInstance = axios.create({
  baseURL: "http://localhost:3002", // Use environment variables for the base URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization headers or other customizations
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response?.status === 401) {
      // For example, redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
