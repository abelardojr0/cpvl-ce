import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
import { Formulario } from "../pages/Formulario";
import { AssinaturaDigital } from "../pages/AssinaturaDigital";
import { CarteirinhaAdmin } from "../pages/CarteirinhaAdmin";

export const AppRoutesAdmin = () => {
  return (
    <Routes>
      <Route path="carteirinha/:userId" element={<CarteirinhaAdmin />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="formulario" element={<Formulario />} />
        <Route path="formulario/:userId" element={<Formulario />} />
        <Route path="assinatura" element={<AssinaturaDigital />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
