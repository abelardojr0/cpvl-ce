import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import { Brand, Header, Main, Nav, Shell } from "./style";

export const Layout = () => {
  const { user, logout } = useAuth();

  return (
    <Shell>
      <Header>
        <Brand to="/">
          <img src="/cpvl-ce-logo.svg" alt="CPVL-CE" />
        </Brand>

        {user && (
          <Nav>
            <button type="button" onClick={logout}>
              Sair
            </button>
          </Nav>
        )}
      </Header>

      <Main>
        <Outlet />
      </Main>
    </Shell>
  );
};
