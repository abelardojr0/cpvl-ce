import { useState } from "react";
import type { MemberCard, SignatureSettings } from "../../types/user";
import { formatMonth } from "../../utils/Masks";
import {
  BackCard,
  CardBrand,
  CardFace,
  CardStack,
  DetailPill,
  EmergencyGrid,
  EmergencyItem,
  EmergencyPanel,
  FrontCard,
  InfoGrid,
  LogoMark,
  MobileCardViewport,
  MobileFlipButton,
  Photo,
  Signature,
  StatusBadge,
  VerticalLabel,
} from "./style";

interface IdentificationCardProps {
  data: MemberCard;
  signature?: SignatureSettings | null;
}

export const IdentificationCard = ({ data, signature }: IdentificationCardProps) => {
  const [mobileFace, setMobileFace] = useState<"front" | "back">("front");

  const emergencyPhone = data.emergencyContactPhone.replace(
    /^(\d{2})(\d{5})(\d{4})$/,
    "($1) $2-$3",
  );
  const emergencyContact = [data.emergencyContactName, emergencyPhone]
    .filter(Boolean)
    .join(" - ");

  const initials = data.fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <MobileCardViewport>
        <CardStack data-face={mobileFace}>
          <FrontCard data-card="front">
            <CardFace>
              <CardBrand>
                <LogoMark>
                  <img src="/cpvl-ce-logo.svg" alt="CPVL-CE - Clube Pacatuba de Voo Livre" />
                </LogoMark>
                <div>
                  <span>Clube Pacatuba de Voo Livre</span>
                  <strong>Carteirinha digital</strong>
                </div>
              </CardBrand>

              <StatusBadge data-status={data.status || "ativo"}>
                {data.status === "inativo" ? "Inativa" : "Ativa"}
              </StatusBadge>

              <section>
                <Photo>
                  {data.photoUrl ? (
                    <img src={data.photoUrl} alt={`Foto de ${data.fullName}`} />
                  ) : (
                    initials
                  )}
                </Photo>

                <div>
                  <VerticalLabel>Piloto</VerticalLabel>
                  <h3>Aerodesportista</h3>
                  <h2>{data.fullName}</h2>
                  <p>{data.email}</p>

                  <InfoGrid>
                    <DetailPill>
                      <span>Modalidade</span>
                      <strong>{data.modality}</strong>
                    </DetailPill>
                    <DetailPill>
                      <span>Nivel</span>
                      <strong>{data.level}</strong>
                    </DetailPill>
                    <DetailPill>
                      <span>Validade</span>
                      <strong>{formatMonth(data.annuityValidUntil)}</strong>
                    </DetailPill>
                    <DetailPill>
                      <span>Tipo sanguineo</span>
                      <strong>{data.bloodType}</strong>
                    </DetailPill>
                  </InfoGrid>
                </div>
              </section>
            </CardFace>
          </FrontCard>

          <BackCard data-card="back">
            <CardFace>
              <CardBrand>
                <LogoMark>
                  <img src="/cpvl-ce-logo.svg" alt="CPVL-CE - Clube Pacatuba de Voo Livre" />
                </LogoMark>
                <div>
                  <span>Documento digital</span>
                  <strong>Verso da carteirinha</strong>
                </div>
              </CardBrand>

              <EmergencyPanel>
                <span>Contatos de Emergencia</span>
                <EmergencyGrid>
                  <EmergencyItem>
                    <span>Telefone de emergencia</span>
                    <strong>{emergencyContact}</strong>
                  </EmergencyItem>
                  <EmergencyItem>
                    <span>CIOPS</span>
                    <strong>190</strong>
                  </EmergencyItem>
                  <EmergencyItem>
                    <span>Bombeiros</span>
                    <strong>193</strong>
                  </EmergencyItem>
                  <EmergencyItem>
                    <span>Plano de saude</span>
                    <strong>{data.healthPlan}</strong>
                  </EmergencyItem>
                </EmergencyGrid>
              </EmergencyPanel>

              <Signature>
                {signature?.signatureDataUrl && (
                  <img
                    src={signature.signatureDataUrl}
                    alt={`Assinatura de ${signature.presidentName}`}
                  />
                )}
                <i aria-hidden="true" />
                <strong>{signature?.presidentName || "Roger Messala Pimentel Cajazeiras"}</strong>
                <span>{signature?.presidentRole || "Presidente"}</span>
              </Signature>
            </CardFace>
          </BackCard>
        </CardStack>
      </MobileCardViewport>

      <MobileFlipButton
        type="button"
        onClick={() =>
          setMobileFace((current) => (current === "front" ? "back" : "front"))
        }
      >
        {mobileFace === "front" ? "Ver verso" : "Ver frente"}
      </MobileFlipButton>
    </>
  );
};
