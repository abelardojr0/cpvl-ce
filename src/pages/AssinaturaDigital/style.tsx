import styled from "styled-components";
import { colors } from "../../utils/theme";

export const PageShell = styled.section`
  display: grid;
  gap: 22px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  span {
    color: ${colors.main};
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
  }

  h1 {
    margin-top: 8px;
    color: ${colors.text_dark};
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 900;
  }

  a {
    display: inline-flex;
    align-items: center;
    min-height: 42px;
    border-radius: 8px;
    padding: 0 14px;
    background: ${colors.backgroundDark};
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
  }
`;

export const SignatureCard = styled.article`
  display: grid;
  gap: 16px;
  border: 1px solid rgba(0, 58, 112, 0.12);
  border-radius: 8px;
  padding: clamp(16px, 3vw, 26px);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 18px 48px rgba(6, 23, 39, 0.08);
`;

export const CanvasBox = styled.div`
  height: clamp(220px, 34vw, 360px);
  border: 1px dashed rgba(0, 58, 112, 0.35);
  border-radius: 8px;
  background:
    linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(135deg, rgba(0, 58, 112, 0.08), rgba(0, 122, 61, 0.08)) border-box;
  overflow: hidden;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none;
    cursor: crosshair;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  button {
    min-height: 42px;
    border: 0;
    border-radius: 8px;
    padding: 0 16px;
    color: #fff;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
  }

  button:first-child {
    background: #5b6e75;
  }

  button:last-child {
    background: ${colors.gradient};
  }
`;

export const Preview = styled.article`
  width: min(520px, 100%);
  display: grid;
  justify-items: center;
  gap: 10px;
  border: 1px solid rgba(0, 58, 112, 0.12);
  border-radius: 8px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 18px 48px rgba(6, 23, 39, 0.08);
  text-align: center;

  span {
    color: ${colors.text_light2};
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  img {
    width: min(340px, 100%);
    max-height: 120px;
    object-fit: contain;
  }

  strong {
    color: ${colors.text_dark};
    font-family: "Brush Script MT", "Segoe Script", cursive;
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 400;
  }

  p {
    color: ${colors.contrast};
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
  }
`;
