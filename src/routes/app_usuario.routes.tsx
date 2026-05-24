import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { Carteirinha } from "../pages/Carteirinha";

export const AppRoutesUsuario = () => {
  return (
    <Routes>
      <Route path="/" element={<Carteirinha />} />
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Carteirinha />} />
      </Route>
    </Routes>
  );
};
