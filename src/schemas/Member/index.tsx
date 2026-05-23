import { z } from "zod";

export const modalityOptions = ["Parapente", "Asa Delta"] as const;

export const memberSchema = z.object({
  fullName: z.string().min(3, "Informe o nome completo."),
  email: z.string().email("Informe um e-mail valido."),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
  modality: z.enum(modalityOptions),
  level: z.string().min(1, "Informe o nivel do piloto."),
  annuityValidUntil: z.string().min(1, "Informe a validade da anuidade."),
  bloodType: z.string().min(1, "Informe o tipo sanguineo."),
  emergencyContactName: z.string().min(3, "Informe o contato de emergencia."),
  emergencyContactPhone: z.string().min(8, "Informe o telefone de emergencia."),
  healthPlan: z.string().min(2, "Informe o plano de saude ou nao possui."),
  photoUrl: z.string().url("Envie uma foto do usuario."),
});

export const memberUpdateSchema = memberSchema.extend({
  password: z.string().optional(),
});
