import styled from "styled-components";
import { colors } from "../../utils/theme";

export const Box = styled.section`
  display: grid;
  justify-items: start;
  gap: 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 28px;
  background: #fff;

  h1 {
    color: ${colors.contrast};
    font-size: 28px;
    font-weight: 900;
  }

  p {
    color: #6b7280;
    font-size: 15px;
  }

  a {
    display: inline-flex;
    align-items: center;
    min-height: 42px;
    border-radius: 8px;
    padding: 0 14px;
    background: ${colors.main};
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
  }
`;
