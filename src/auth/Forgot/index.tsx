import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ZodError } from "zod";
import { useAuth } from "../../hooks/UseAuth";
import { forgotPasswordSchema } from "../../schemas/Auth";
import { messageError } from "../../utils/toast";
import { AuthCard, AuthPage, Field, Form, SubmitButton } from "../Login/style";

export const Esqueceu = () => {
  const { forgot, loading } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const payload = forgotPasswordSchema.parse({ email });
      await forgot(payload.email);
    } catch (error) {
      if (error instanceof ZodError) {
        messageError(error.issues[0]?.message || "Informe um e-mail valido.");
      }
    }
  };

  return (
    <AuthPage>
      <AuthCard>
        <span>Recuperacao</span>
        <h1>Redefinir senha</h1>
        <p>Informe o e-mail cadastrado para receber as proximas instrucoes.</p>

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

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar recuperacao"}
          </SubmitButton>
          <Link to="/">Voltar para login</Link>
        </Form>
      </AuthCard>
    </AuthPage>
  );
};
