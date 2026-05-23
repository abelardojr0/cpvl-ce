import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
} from "../Carteirinha/style";

export const CarteirinhaAdmin = () => {
  const { userId } = useParams();
  const [card, setCard] = useState<MemberCard | null>(null);
  const [signature, setSignature] = useState<SignatureSettings | null>(null);

  useEffect(() => {
    if (!userId) return;

    membersService
      .cardByUserId(userId)
      .then(setCard)
      .catch(() => messageError("Nao foi possivel carregar a carteirinha."));

    settingsService.getSignature().then(setSignature).catch(() => setSignature(null));
  }, [userId]);

  return (
    <PageShell>
      <PrintStyles />
      <PageHeader>
        <div>
          <span>Area administrativa</span>
          <h1>Carteirinha do usuario</h1>
        </div>
        <HeaderActions>
          <PrintButton type="button" onClick={() => window.print()}>
            Imprimir PDF
          </PrintButton>
          <Link to="/">Voltar</Link>
        </HeaderActions>
      </PageHeader>

      <PrintArea id="printable-card">
        {card && <IdentificationCard data={card} signature={signature} />}
      </PrintArea>
    </PageShell>
  );
};
