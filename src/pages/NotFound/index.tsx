import { Link } from "react-router-dom";
import { Box } from "./style";

export const NotFound = () => {
  return (
    <Box>
      <h1>Pagina nao encontrada</h1>
      <p>O endereco acessado nao existe ou nao esta disponivel.</p>
      <Link to="/">Voltar ao inicio</Link>
    </Box>
  );
};
