import { apiInstance } from "../constant";

const api = apiInstance({
  baseURL: import.meta.env.VITE_BE_URL,
});

export const authServices = {
  login: (payload) => api.post("/auth/login", payload),
  register: (payload) => api.post("/auth/register", payload),
  forgotPassword: (payload) => api.post("/auth/forgot-password", payload),
};
