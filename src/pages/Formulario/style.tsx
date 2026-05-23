import styled from "styled-components";
import { colors } from "../../utils/theme";

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

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

  @media (max-width: 680px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    border-radius: 8px;
    padding: 0 14px;
    background: ${colors.backgroundDark};
    color: #fff;
    font-size: 14px;
    font-weight: 900;
    text-decoration: none;
  }

  @media (max-width: 680px) {
    width: 100%;

    a {
      width: 100%;
    }
  }
`;

export const FormShell = styled.form`
  display: grid;
  gap: 24px;
  border: 1px solid rgba(0, 58, 112, 0.12);
  border-radius: 8px;
  padding: clamp(20px, 4vw, 32px);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 20px 54px rgba(6, 23, 39, 0.08);
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const PhotoField = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  border: 1px solid rgba(0, 58, 112, 0.12);
  border-radius: 8px;
  padding: 16px;
  background: #f7faf7;

  > div {
    display: grid;
    place-items: center;
    width: 104px;
    height: 128px;
    overflow: hidden;
    border-radius: 8px;
    background: #fff;
    color: ${colors.contrast};
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
    box-shadow: inset 0 0 0 1px rgba(0, 58, 112, 0.12);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    border-radius: 8px;
    padding: 0 14px;
    background: ${colors.backgroundDark};
    color: #fff;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
  }

  input {
    display: none;
  }

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Field = styled.div`
  display: grid;
  gap: 8px;

  label {
    color: ${colors.text_dark};
    font-size: 14px;
    font-weight: 800;
  }

  input,
  select {
    width: 100%;
    min-height: 48px;
    border: 1px solid ${colors.border};
    border-radius: 8px;
    padding: 0 14px;
    color: ${colors.text};
    background: #fff;
    font-size: 15px;
    outline: none;
  }

  input:focus,
  select:focus {
    border-color: ${colors.main};
    box-shadow: 0 0 0 3px rgba(0, 122, 61, 0.14);
  }
`;

export const FormActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 520px) {
    display: grid;
  }
`;

export const SubmitButton = styled.button`
  min-height: 50px;
  border: 0;
  border-radius: 8px;
  padding: 0 18px;
  background: ${colors.gradient};
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    background: ${colors.disabled};
    cursor: not-allowed;
  }
`;

export const DangerButton = styled.button`
  min-height: 50px;
  border: 0;
  border-radius: 8px;
  padding: 0 18px;
  background: ${colors.error};
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    background: ${colors.disabled};
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled.button`
  min-height: 44px;
  border: 0;
  border-radius: 8px;
  padding: 0 16px;
  background: #e6eee8;
  color: ${colors.text_dark};
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  padding: 18px;
  background: rgba(6, 23, 39, 0.55);
`;

export const ModalCard = styled.div`
  width: min(440px, 100%);
  border-radius: 8px;
  padding: 24px;
  background: #fff;
  box-shadow: 0 24px 70px rgba(6, 23, 39, 0.28);

  span {
    color: ${colors.error};
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  h2 {
    margin-top: 8px;
    color: ${colors.text_dark};
    font-size: 24px;
    font-weight: 900;
  }

  p {
    margin-top: 10px;
    color: ${colors.text_light2};
    font-size: 15px;
    line-height: 1.45;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 22px;

  ${DangerButton} {
    min-height: 44px;
    font-size: 14px;
  }

  @media (max-width: 440px) {
    display: grid;
  }
`;
