import styled from "styled-components";
import { colors } from "../../utils/theme";

const brand = {
  navy: "#003a70",
  deepNavy: "#061727",
  blue: "#0067b1",
  green: "#007a3d",
  brightGreen: "#009b2f",
  yellow: "#ffb800",
  cream: "#f8fbf4",
};

export const CardStack = styled.div`
  width: min(940px, 100%);
  display: grid;
  gap: 20px;
`;

const BaseCard = styled.article`
  position: relative;
  width: 100%;
  aspect-ratio: 1.586 / 1;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(0, 58, 112, 0.16);
  box-shadow:
    0 22px 54px rgba(6, 23, 39, 0.16),
    inset 0 0 0 1px rgba(255, 255, 255, 0.28);
  isolation: isolate;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    z-index: -2;
  }

  &::after {
    z-index: -1;
    background:
      linear-gradient(108deg, transparent 0 39%, rgba(255, 255, 255, 0.32) 40%, transparent 42%),
      radial-gradient(circle at 74% 20%, rgba(255, 255, 255, 0.34), transparent 24%),
      repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 5px);
    mix-blend-mode: soft-light;
  }

  @media (max-width: 720px) {
    border-radius: 14px;
  }

  @media (max-width: 520px) {
    aspect-ratio: auto;
    min-height: 0;
  }
`;

export const FrontCard = styled(BaseCard)`
  &::before {
    background:
      radial-gradient(circle at 78% 17%, rgba(255, 184, 0, 0.94) 0 12%, transparent 13%),
      linear-gradient(160deg, transparent 0 54%, rgba(0, 122, 61, 0.96) 55% 65%, transparent 66%),
      linear-gradient(132deg, #071927 0 46%, ${brand.navy} 46% 57%, #ffffff 57% 100%);
  }
`;

export const BackCard = styled(BaseCard)`
  &::before {
    background:
      linear-gradient(150deg, #071927 0 58%, ${brand.green} 58% 66%, #ffffff 66% 100%);
  }
`;

export const CardBrand = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-width: 0;

  > div:last-child {
    min-width: 0;
    max-width: min(520px, 66%);
    border-radius: 12px;
    padding: 10px 14px;
    background: rgba(6, 23, 39, 0.88);
    text-align: right;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
  }

  span {
    display: block;
    color: #d9edff;
    font-size: clamp(10px, 1.4vw, 12px);
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 5px;
    color: #ffffff;
    font-size: clamp(16px, 2.8vw, 28px);
    font-weight: 900;
    line-height: 1;
    overflow-wrap: anywhere;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: clamp(16px, 2.4vw, 26px);

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const CardFace = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: clamp(12px, 2vw, 22px);
  padding: clamp(18px, 2.8vw, 30px);
  color: #f8fbff;

  > section {
    display: grid;
    grid-template-columns: minmax(112px, 170px) 1fr;
    align-items: center;
    gap: clamp(16px, 3vw, 32px);
    min-width: 0;
  }

  > section > div:last-child {
    min-width: 0;
    border-radius: 12px;
    padding: clamp(15px, 2.4vw, 24px);
    background: rgba(6, 23, 39, 0.92);
    box-shadow:
      inset 0 0 0 1px rgba(255, 255, 255, 0.18),
      0 16px 34px rgba(0, 0, 0, 0.14);
  }

  h2 {
    max-width: 100%;
    color: #ffffff;
    font-size: clamp(24px, 4vw, 44px);
    font-weight: 900;
    line-height: 1;
    overflow-wrap: anywhere;
    text-transform: uppercase;
  }

  h3 {
    margin: 4px 0 10px;
    color: #ffffff;
    font-size: clamp(16px, 2.1vw, 24px);
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
  }

  p {
    margin-top: 8px;
    color: #e6f3ff;
    font-size: clamp(12px, 1.8vw, 15px);
    font-weight: 700;
    overflow-wrap: anywhere;
  }

  > footer {
    display: flex;
    align-items: end;
    gap: 14px;

    span {
      display: block;
      color: #d9edff;
      font-size: 10px;
      font-weight: 900;
      text-transform: uppercase;
    }

    strong {
      display: block;
      margin-top: 4px;
      color: #ffffff;
      font-size: clamp(18px, 2.6vw, 28px);
      font-weight: 900;
      letter-spacing: 0;
    }
  }

  ${BackCard} & {
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.72fr);
    grid-template-rows: auto 1fr;
    gap: clamp(14px, 2vw, 22px);

    ${CardBrand} {
      grid-column: 1 / -1;

      > div:last-child {
        max-width: 360px;
        padding: 9px 13px;
      }

      strong {
        font-size: clamp(18px, 2.1vw, 25px);
        line-height: 1.08;
      }
    }
  }

  @media (max-width: 640px) {
    > section,
    ${BackCard} & {
      grid-template-columns: 1fr;
    }

    > section {
      align-items: start;
    }
  }

  @media (max-width: 520px) {
    grid-template-rows: auto auto 1fr;
    align-content: start;

    h2 {
      font-size: clamp(22px, 8vw, 32px);
    }
  }
`;

export const LogoMark = styled.div`
  flex: 0 0 auto;
  width: clamp(118px, 19vw, 210px);
  border-radius: 10px;
  padding: clamp(7px, 1.4vw, 12px);
  background: #ffffff;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.14),
    inset 0 0 0 1px rgba(0, 58, 112, 0.08);

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const StatusBadge = styled.span`
  position: absolute;
  right: clamp(18px, 3vw, 34px);
  bottom: clamp(18px, 3vw, 34px);
  border-radius: 999px;
  padding: 9px 15px;
  background: rgba(255, 255, 255, 0.96);
  color: ${brand.green};
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);

  &[data-status="inativo"] {
    color: ${colors.error};
  }
`;

export const Photo = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  max-width: 170px;
  aspect-ratio: 0.78 / 1;
  border-radius: 10px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0)),
    #f4f8f6;
  color: ${brand.deepNavy};
  font-size: clamp(34px, 5vw, 58px);
  font-weight: 900;
  box-shadow:
    inset 0 0 0 8px rgba(255, 255, 255, 0.5),
    0 16px 28px rgba(0, 0, 0, 0.16);

  @media (max-width: 640px) {
    max-width: 132px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VerticalLabel = styled.span`
  display: block;
  margin-bottom: 4px;
  color: #f5c463;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const DetailPill = styled.div`
  min-width: 0;
  min-height: 74px;
  border: 1px solid rgba(0, 58, 112, 0.18);
  border-radius: 999px;
  padding: 12px 16px;
  display: grid;
  align-content: center;
  background: rgba(255, 255, 255, 0.98);
  color: ${brand.deepNavy};

  span {
    display: block;
    color: #42616f;
    font-size: 10px;
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 5px;
    color: ${brand.deepNavy};
    font-size: clamp(13px, 1.8vw, 18px);
    font-weight: 900;
    line-height: 1.05;
    overflow-wrap: anywhere;
  }
`;

export const QrCode = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 2px;
  width: clamp(58px, 8vw, 86px);
  aspect-ratio: 1;
  padding: 6px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);

  i {
    border-radius: 1px;
    background: transparent;
  }

  i[data-active="true"] {
    background: ${brand.deepNavy};
  }
`;

export const EmergencyPanel = styled.section`
  && {
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
    gap: clamp(14px, 1.8vw, 20px);
  }

  grid-column: 1 / 2;
  align-self: stretch;
  align-content: start;
  min-height: 0;
  border-left: 4px solid ${brand.yellow};
  padding: clamp(16px, 2.2vw, 24px);
  border-radius: 0 12px 12px 0;
  background: rgba(6, 23, 39, 0.9);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16);

  @media (max-width: 640px) {
    grid-column: 1;
  }

  > span {
    color: #e6f3ff;
    max-width: 100%;
    font-size: clamp(18px, 2.25vw, 29px);
    font-weight: 900;
    line-height: 1.05;
    text-transform: uppercase;
  }
`;

export const EmergencyGrid = styled.div`
  && {
    min-width: 0;
    border-radius: 0;
    padding: 0;
    background: transparent;
    box-shadow: none;
  }

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(10px, 1.5vw, 14px);

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const EmergencyItem = styled.div`
  min-width: 0;
  min-height: 86px;
  display: grid;
  align-content: center;
  border-radius: 10px;
  padding: 13px 15px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow:
    inset 0 0 0 1px rgba(0, 58, 112, 0.12),
    0 12px 24px rgba(0, 0, 0, 0.14);

  span {
    color: #42616f;
    font-size: clamp(10px, 1vw, 12px);
    font-weight: 900;
    line-height: 1.1;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  strong {
    display: block;
    margin-top: 7px;
    color: ${brand.deepNavy};
    font-size: clamp(18px, 2vw, 25px);
    font-weight: 900;
    line-height: 1.08;
    overflow-wrap: anywhere;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;

    > div:last-child {
      width: 100%;
      max-width: none;
      text-align: left;
    }
  }
`;

export const Signature = styled.footer`
  && {
    grid-column: 2 / 3;
    align-self: stretch;
    display: grid;
  }

  display: grid;
  align-content: center;
  justify-items: center;
  min-width: min(360px, 100%);
  border-radius: 12px;
  padding: clamp(18px, 2.4vw, 28px);
  background: rgba(255, 255, 255, 0.98);
  text-align: center;
  box-shadow:
    inset 0 0 0 1px rgba(0, 58, 112, 0.12),
    0 18px 38px rgba(0, 0, 0, 0.16);

  i {
    display: block;
    width: min(240px, 100%);
    height: 1px;
    margin: 4px 0 14px;
    border-bottom: 2px solid ${brand.navy};
  }

  img {
    display: block;
    width: min(240px, 100%);
    max-height: 76px;
    object-fit: contain;
    margin-bottom: 0;
  }

  && strong {
    display: block;
    color: ${brand.deepNavy};
    font-size: clamp(13px, 1.45vw, 17px);
    font-weight: 900;
    line-height: 1.05;
    overflow-wrap: anywhere;
    text-transform: uppercase;
  }

  && span {
    display: block;
    margin-top: 8px;
    color: ${brand.navy};
    font-size: clamp(11px, 1.25vw, 14px);
    font-weight: 900;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    && {
      grid-column: 1;
    }
  }
`;
