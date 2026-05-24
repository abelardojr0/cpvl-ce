import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
