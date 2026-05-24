import api from "..";
import type { MemberCard } from "../../types/user";

export const membersService = {
  list: async () => {
    const { data } = await api.get<MemberCard[]>("/members");
    return data;
  },

  myCard: async () => {
    const { data } = await api.get<MemberCard>("/members/me/card");
    return data;
  },

  cardByUserId: async (userId: string | number) => {
    const { data } = await api.get<MemberCard>(`/members/${userId}/card`);
    return data;
  },

  create: async (payload: MemberCard) => {
    const { data } = await api.post<MemberCard>("/members", payload);
    return data;
  },

  update: async (userId: string | number, payload: MemberCard) => {
    const { data } = await api.put<MemberCard>(`/members/${userId}`, payload);
    return data;
  },

  delete: async (userId: string | number) => {
    await api.delete(`/members/${userId}`);
  },
};
