import styled from "styled-components";
import { colors } from "../../utils/theme";

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 26px;

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
    padding: 0 16px;
    background: ${colors.gradient};
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
  }

  > div:last-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px;
  }

  > div:last-child a:first-child {
    background: ${colors.backgroundDark};
  }

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;

    > div:last-child {
      justify-content: flex-start;
    }
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 24px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.article`
  border: 1px solid rgba(0, 58, 112, 0.12);
  border-radius: 8px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 16px 42px rgba(6, 23, 39, 0.07);

  span {
    color: ${colors.text_light2};
    font-size: 13px;
    font-weight: 800;
  }

  strong {
    display: block;
    margin-top: 12px;
    color: ${colors.contrast};
    font-size: 34px;
    font-weight: 900;
  }
`;

export const Table = styled.table`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(0, 58, 112, 0.1);
  box-shadow: 0 18px 48px rgba(6, 23, 39, 0.08);

  th,
  td {
    border-bottom: 1px solid rgba(0, 58, 112, 0.08);
    padding: 16px;
    color: ${colors.text};
    font-size: 14px;
    text-align: left;
  }

  th {
    background: #f3f8f4;
    color: ${colors.contrast};
    font-weight: 900;
  }

  td a {
    display: inline-flex;
    align-items: center;
    min-height: 34px;
    border-radius: 8px;
    padding: 0 12px;
    background: ${colors.backgroundDark};
    color: #fff;
    font-size: 12px;
    font-weight: 900;
    text-decoration: none;
    white-space: nowrap;
  }

  @media (max-width: 820px) {
    display: block;
    border: 0;
    background: transparent;
    box-shadow: none;

    thead {
      display: none;
    }

    tbody {
      display: grid;
      gap: 14px;
    }

    tr {
      display: grid;
      gap: 0;
      overflow: hidden;
      border: 1px solid rgba(0, 58, 112, 0.1);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.96);
      box-shadow: 0 16px 38px rgba(6, 23, 39, 0.08);
    }

    td {
      display: grid;
      grid-template-columns: minmax(92px, 35%) 1fr;
      align-items: center;
      gap: 12px;
      padding: 13px 14px;
      font-size: 13px;
    }

    td::before {
      content: attr(data-label);
      color: ${colors.text_light2};
      font-size: 11px;
      font-weight: 900;
      text-transform: uppercase;
    }

    td:first-child {
      grid-template-columns: 1fr;
      padding: 16px 14px;
    }

    td:first-child::before {
      display: none;
    }
  }
`;

export const PilotCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 220px;

  > div {
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    overflow: hidden;
    border-radius: 8px;
    background: #f3f8f4;
    color: ${colors.contrast};
    font-size: 12px;
    font-weight: 900;
    box-shadow: inset 0 0 0 1px rgba(0, 58, 112, 0.12);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  strong {
    color: ${colors.text_dark};
    font-weight: 900;
    line-height: 1.2;
  }

  @media (max-width: 820px) {
    min-width: 0;
  }
`;

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 10px;
  background: rgba(0, 122, 61, 0.12);
  color: ${colors.main};
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;

  &[data-status="inativo"] {
    background: rgba(138, 18, 50, 0.12);
    color: ${colors.error};
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  a:last-child {
    background: ${colors.main};
  }

  @media (max-width: 420px) {
    display: grid;
    grid-template-columns: 1fr;

    a {
      justify-content: center;
      width: 100%;
    }
  }
`;

export const EmptyState = styled.div`
  border: 1px solid rgba(0, 58, 112, 0.12);
  border-radius: 8px;
  padding: 28px;
  background: rgba(255, 255, 255, 0.96);

  h2 {
    color: ${colors.text_dark};
    font-size: 22px;
    font-weight: 900;
  }

  p {
    margin-top: 10px;
    color: ${colors.text_light2};
    font-size: 15px;
  }
`;

export const Actions = styled.div`
  display: none;
`;
