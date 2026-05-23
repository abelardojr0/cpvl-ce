import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ZodError } from "zod";
import { useAuth } from "../../hooks/UseAuth";
import { loginSchema } from "../../schemas/Auth";
import { messageError } from "../../utils/toast";
import {
  AuthCard,
  AuthPage,
  CheckboxRow,
  Field,
  Form,
  SubmitButton,
} from "./style";

export const Login = () => {
  const { signin, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const payload = loginSchema.parse({ email, password, remember });
      await signin(payload.email, payload.password, payload.remember);
    } catch (error) {
      if (error instanceof ZodError) {
        messageError(error.issues[0]?.message || "Confira os dados do login.");
      }
    }
  };

  return (
    <AuthPage>
      <AuthCard>
        <img src="/cpvl-ce-logo.svg" alt="CPVL-CE" />
        <span>Identificacao digital</span>
        <h1>Acesse sua carteirinha</h1>
        <p>Entre como administrador ou usuario para continuar.</p>

        <Form onSubmit={handleSubmit}>
          <Field>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seuemail@exemplo.com"
            />
          </Field>

          <Field>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Sua senha"
            />
          </Field>

          <CheckboxRow>
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
              />
              Lembrar-me
            </label>
            <Link to="/esqueceu">Esqueci minha senha</Link>
          </CheckboxRow>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </SubmitButton>
        </Form>
      </AuthCard>
    </AuthPage>
  );
};
