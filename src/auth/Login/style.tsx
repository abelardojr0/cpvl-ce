import styled from "styled-components";
import { colors } from "../../utils/theme";

export const AuthPage = styled.section`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 24px;
`;

export const AuthCard = styled.div`
  width: min(480px, 100%);
  border: 1px solid rgba(0, 58, 112, 0.12);
  border-radius: 8px;
  padding: clamp(26px, 4vw, 38px);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.92)),
    linear-gradient(135deg, rgba(0, 58, 112, 0.08), rgba(0, 122, 61, 0.08));
  box-shadow: 0 24px 60px rgba(6, 23, 39, 0.12);

  > img {
    display: block;
    width: min(220px, 70%);
    margin-bottom: 24px;
  }

  span {
    color: ${colors.main};
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
  }

  h1 {
    margin-top: 12px;
    color: ${colors.text_dark};
    font-size: 30px;
    font-weight: 900;
    line-height: 1.15;
  }

  p {
    margin-top: 10px;
    color: ${colors.text_light2};
    font-size: 15px;
    line-height: 1.5;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 18px;
  margin-top: 28px;
`;

export const Field = styled.div`
  display: grid;
  gap: 8px;

  label {
    color: ${colors.text_dark};
    font-size: 14px;
    font-weight: 700;
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

export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: ${colors.text_light2};
  font-size: 14px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  a {
    color: ${colors.link};
    font-weight: 700;
    text-decoration: none;
  }
`;

export const SubmitButton = styled.button`
  min-height: 50px;
  border: 0;
  border-radius: 8px;
  background: ${colors.gradient};
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;

  &:disabled {
    background: ${colors.disabled};
    cursor: not-allowed;
  }
`;
