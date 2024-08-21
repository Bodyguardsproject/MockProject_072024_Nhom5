import axios from "axios";

export const apiInstance = (config) => {
  const api = axios.create(config);

  api.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer" + " ",
      },
    };
  });

  return api;
};
