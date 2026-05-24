import { createContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import type { User } from "../types/user";
import { authService } from "../services/Auth";
import { messageError } from "../utils/toast";

interface AuthContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  signin: (
    email: string,
    password: string,
    remember: boolean,
  ) => Promise<boolean>;
  logout: () => void;
}

interface ApiErrorResponse {
  message?: string;
  detail?: string;
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const signin = async (
    email: string,
    password: string,
    remember: boolean,
  ): Promise<boolean> => {
    setLoading(true);

    try {
      const data = await authService.login(email, password);
      const storage = remember ? localStorage : sessionStorage;

      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
      storage.setItem("authToken", data.token);

      setUser(data.user);
      navigate("/", { replace: true });
      return true;
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      const msg =
        axiosError.response?.data.message ||
        axiosError.response?.data.detail ||
        "Erro ao fazer login.";
      messageError(msg);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    setUser(null);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const loadSession = async () => {
      const token =
        localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const profile = await authService.me();
        setUser(profile);
      } catch {
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");
      } finally {
        setLoading(false);
      }
    };

    loadSession();
  }, []);

  const value = useMemo(
    () => ({ user, setUser, signin, loading, logout }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
