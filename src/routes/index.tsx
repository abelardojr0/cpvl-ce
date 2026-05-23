import { useContext } from "react";
import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "../contexts/AuthProvider";
import { Spinner } from "../components/Spinner";
import { AppRoutesAdmin } from "./app_admin.routes";
import { AppRoutesUsuario } from "./app_usuario.routes";


function RoutesApp() {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (user?.type === "admin") {
    return <AppRoutesAdmin />;
  } else if (user?.type === "usuario") {
    return <AppRoutesUsuario />;
  }
  return <AuthRoutes />;
}

export default RoutesApp;
