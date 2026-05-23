import api from "..";
import type { SignatureSettings } from "../../types/user";

export const settingsService = {
  getSignature: async () => {
    const { data } = await api.get<SignatureSettings>("/settings/signature");
    return data;
  },

  saveSignature: async (signatureDataUrl: string) => {
    const { data } = await api.put<SignatureSettings>("/settings/signature", {
      signatureDataUrl,
    });
    return data;
  },
};
