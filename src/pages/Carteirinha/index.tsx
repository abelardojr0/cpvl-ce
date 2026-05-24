import { useEffect, useState } from "react";
import { IdentificationCard } from "../../components/IdentificationCard";
import { membersService } from "../../services/Members";
import { settingsService } from "../../services/Settings";
import type { MemberCard, SignatureSettings } from "../../types/user";
import { messageError } from "../../utils/toast";
import {
  HeaderActions,
  PageHeader,
  PageShell,
  PrintArea,
  PrintButton,
  PrintStyles,
} from "./style";

const fallbackCard: MemberCard = {
  fullName: "Usuario Carteirinha",
  email: "usuario@exemplo.com",
  cpf: "00000000000",
  modality: "Parapente",
  level: "Intermediario",
  annuityValidUntil: "2026-12",
  bloodType: "O+",
  emergencyContactName: "Contato Emergencia",
  emergencyContactPhone: "(11) 99999-9999",
  healthPlan: "Nao possui",
  photoUrl: "",
  status: "ativo",
};

export const Carteirinha = () => {
  const [card, setCard] = useState<MemberCard>(fallbackCard);
  const [signature, setSignature] = useState<SignatureSettings | null>(null);

  useEffect(() => {
    membersService
      .myCard()
      .then(setCard)
      .catch(() => messageError("Nao foi possivel carregar a carteirinha."));

    settingsService.getSignature().then(setSignature).catch(() => setSignature(null));
  }, []);

  return (
    <PageShell>
      <PrintStyles />
      <PageHeader>
        <div>
          <span>Area do usuario</span>
          <h1>Minha carteirinha</h1>
        </div>
        <HeaderActions>
          <PrintButton type="button" onClick={() => window.print()}>
            Imprimir PDF
          </PrintButton>
        </HeaderActions>
      </PageHeader>

      <PrintArea id="printable-card">
        <IdentificationCard data={card} signature={signature} />
      </PrintArea>
    </PageShell>
  );
};
