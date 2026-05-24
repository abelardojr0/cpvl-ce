export interface User {
  id?: string | number;
  email: string;
  cpf?: string;
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
  cpf: string;
  modality: "Parapente" | "Asa Delta";
  level: string;
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
