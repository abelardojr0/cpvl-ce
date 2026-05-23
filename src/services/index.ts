import axios from "axios";
import { messageError } from "../utils/toast";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "https://cpvl-ce-back.onrender.com/api",
});

api.interceptors.request.use(
  (request) => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 403) {
      messageError("Usuario nao tem permissao para esta acao.");
    }

    if (error?.response?.status === 401) {
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
    }

    return Promise.reject(error);
  },
);

export default api;
