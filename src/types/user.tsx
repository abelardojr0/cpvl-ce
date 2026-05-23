export interface User {
  id?: string | number;
  email: string;
  name?: string;
  username?: string;
  type?: "admin" | "usuario";
  password?: string;
}

export interface MemberCard {
  id?: string | number;
  userId?: string | number;
  fullName: string;
  email: string;
  modality: "Parapente" | "Asa Delta";
  level: "Aluno" | "Iniciante" | "Intermediario" | "Avancado" | "Instrutor";
  annuityValidUntil: string;
  bloodType: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  healthPlan: string;
  photoUrl?: string;
  status?: "ativo" | "inativo";
  createdAt?: string;
}

export interface SignatureSettings {
  signatureDataUrl: string | null;
  presidentName: string;
  presidentRole: string;
}
