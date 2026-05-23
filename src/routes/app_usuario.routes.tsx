import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { NotFound } from "../pages/NotFound";
import { Carteirinha } from "../pages/Carteirinha";

export const AppRoutesUsuario = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Carteirinha />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
