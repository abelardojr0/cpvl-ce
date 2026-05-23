import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { Layout } from "../layout";
import { Esqueceu } from "../auth/Forgot";
import { NotFound } from "../pages/NotFound";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="esqueceu" element={<Esqueceu />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
