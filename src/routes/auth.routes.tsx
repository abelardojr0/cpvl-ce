import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { NotFound } from "../pages/NotFound";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
