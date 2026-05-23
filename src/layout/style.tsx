import styled from "styled-components";
import { colors } from "../utils/theme";
import { Link } from "react-router-dom";

export const Shell = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(180deg, rgba(255, 184, 0, 0.08) 0%, rgba(255, 184, 0, 0) 260px),
    linear-gradient(180deg, #f7faf7 0%, #edf6f1 100%);
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 82px;
  padding: 14px clamp(20px, 4vw, 56px);
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid rgba(0, 58, 112, 0.1);
  backdrop-filter: blur(14px);

  a {
    color: ${colors.contrast};
    font-size: 14px;
    font-weight: 900;
    text-decoration: none;
  }

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
    min-height: 0;
    padding: 12px 16px;
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: clamp(132px, 17vw, 194px);
  min-width: 118px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 132px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  a,
  button {
    min-height: 38px;
    border: 0;
    border-radius: 8px;
    padding: 0 14px;
    background: ${colors.backgroundDark};
    color: #fff;
    font-size: 13px;
    font-weight: 900;
    cursor: pointer;
    text-decoration: none;
    transition:
      background 0.18s ease,
      transform 0.18s ease;
  }

  a:hover,
  button:hover {
    background: ${colors.contrast};
    transform: translateY(-1px);
  }

  a {
    display: inline-flex;
    align-items: center;
  }

  @media (max-width: 720px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media (max-width: 480px) {
    justify-content: flex-start;

    button {
      width: 100%;
    }
  }
`;

export const Main = styled.main`
  width: min(1180px, calc(100% - 28px));
  margin: 0 auto;
  padding: clamp(24px, 4vw, 44px) 0 56px;
`;
