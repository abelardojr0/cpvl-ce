import api from "..";
import type { User } from "../../types/user";

export interface LoginResponse {
  token: string;
  user: User;
}

export const authService = {
  login: async (email: string, password: string) => {
    const { data } = await api.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
    return data;
  },

  me: async () => {
    const { data } = await api.get<User>("/auth/me");
    return data;
  },
};
