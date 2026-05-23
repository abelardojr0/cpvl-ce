import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../utils/theme";

export const PrintStyles = createGlobalStyle`
  @media print {
    @page {
      size: A4 portrait;
      margin: 12mm;
    }

    body * {
      visibility: hidden !important;
    }

    #printable-card,
    #printable-card * {
      visibility: visible !important;
    }

    #printable-card {
      position: fixed;
      inset: 0;
      display: grid;
      justify-items: center;
      align-content: start;
      padding-top: 8mm;
      background: #fff !important;
    }

    #printable-card > div {
      width: 85.6mm !important;
      display: grid !important;
      gap: 7mm !important;
    }

    #printable-card article {
      width: 85.6mm !important;
      height: 54mm !important;
      min-height: 0 !important;
      aspect-ratio: auto !important;
      border-radius: 3mm !important;
      border: 0.2mm solid rgba(0, 58, 112, 0.28) !important;
      box-shadow: none !important;
      break-inside: avoid !important;
      page-break-inside: avoid !important;
      print-color-adjust: exact !important;
      -webkit-print-color-adjust: exact !important;
    }

    #printable-card article > div {
      gap: 1.7mm !important;
      padding: 2.6mm !important;
    }

    #printable-card header {
      gap: 1.4mm !important;
    }

    #printable-card header > div:first-child {
      width: 20mm !important;
      border-radius: 2mm !important;
      padding: 0.9mm !important;
      box-shadow: none !important;
    }

    #printable-card header > div:last-child {
      max-width: 34mm !important;
      border-radius: 2mm !important;
      padding: 1mm 1.5mm !important;
    }

    #printable-card header span {
      font-size: 3.2pt !important;
    }

    #printable-card header strong {
      margin-top: 0.5mm !important;
      font-size: 5.2pt !important;
      line-height: 1.05 !important;
    }

    #printable-card article:first-child section {
      grid-template-columns: 15mm 1fr !important;
      gap: 2mm !important;
    }

    #printable-card article:first-child section > div:first-child {
      width: 15mm !important;
      height: 20mm !important;
      max-width: none !important;
      border-radius: 2mm !important;
      font-size: 11pt !important;
      box-shadow: inset 0 0 0 1mm rgba(255, 255, 255, 0.5) !important;
    }

    #printable-card article:first-child section > div:last-child {
      border-radius: 2.4mm !important;
      padding: 2mm !important;
    }

    #printable-card h2 {
      font-size: 8.6pt !important;
      line-height: 1.02 !important;
    }

    #printable-card h3 {
      margin: 0.5mm 0 1mm !important;
      font-size: 4.8pt !important;
    }

    #printable-card p {
      margin-top: 0.8mm !important;
      font-size: 3.8pt !important;
    }

    #printable-card article:first-child section span {
      margin-bottom: 0.4mm !important;
      font-size: 3.4pt !important;
    }

    #printable-card article:first-child section > div:last-child > div {
      gap: 0.9mm !important;
      margin-top: 1.7mm !important;
    }

    #printable-card article:first-child section > div:last-child > div > div {
      min-height: 6.6mm !important;
      border-radius: 999px !important;
      padding: 0.9mm 1.4mm !important;
    }

    #printable-card article:first-child section > div:last-child > div > div span {
      font-size: 2.8pt !important;
    }

    #printable-card article:first-child section > div:last-child > div > div strong {
      margin-top: 0.4mm !important;
      font-size: 4.3pt !important;
    }

    #printable-card article:first-child > div > span {
      right: 2.6mm !important;
      bottom: 2.6mm !important;
      padding: 0.8mm 1.4mm !important;
      font-size: 3.5pt !important;
      box-shadow: none !important;
    }

    #printable-card article:nth-child(2) > div {
      grid-template-columns: 1fr 27mm !important;
      grid-template-rows: auto 1fr !important;
      gap: 1.7mm !important;
    }

    #printable-card article:nth-child(2) header {
      grid-column: 1 / -1 !important;
    }

    #printable-card article:nth-child(2) header > div:last-child {
      max-width: 32mm !important;
    }

    #printable-card article:nth-child(2) header strong {
      font-size: 5pt !important;
    }

    #printable-card article:nth-child(2) section {
      display: grid !important;
      grid-template-columns: 1fr !important;
      gap: 1.2mm !important;
      border-left-width: 0.6mm !important;
      border-radius: 0 2mm 2mm 0 !important;
      padding: 1.7mm !important;
    }

    #printable-card article:nth-child(2) section > span {
      font-size: 5.4pt !important;
    }

    #printable-card article:nth-child(2) section > div {
      gap: 0.9mm !important;
    }

    #printable-card article:nth-child(2) section > div > div {
      min-height: 8mm !important;
      border-radius: 1.6mm !important;
      padding: 1mm 1.2mm !important;
      box-shadow: none !important;
    }

    #printable-card article:nth-child(2) section > div > div span {
      font-size: 2.8pt !important;
    }

    #printable-card article:nth-child(2) section > div > div strong {
      margin-top: 0.4mm !important;
      font-size: 4.8pt !important;
    }

    #printable-card article:nth-child(2) footer {
      min-width: 0 !important;
      border-radius: 2mm !important;
      padding: 1.6mm !important;
      box-shadow: none !important;
    }

    #printable-card article:nth-child(2) footer i {
      width: 21mm !important;
      margin: 0.5mm 0 1.3mm !important;
      border-bottom-width: 0.3mm !important;
    }

    #printable-card article:nth-child(2) footer img {
      width: 21mm !important;
      max-height: 7.5mm !important;
    }

    #printable-card article:nth-child(2) footer strong {
      font-size: 3.8pt !important;
    }

    #printable-card article:nth-child(2) footer span {
      margin-top: 0.8mm !important;
      font-size: 3.5pt !important;
    }
  }
`;

export const PageShell = styled.section`
  display: grid;
  justify-items: center;
  gap: 24px;
  min-height: 100vh;
  width: 100%;
  padding: clamp(18px, 4vw, 44px) max(14px, calc((100vw - 1180px) / 2)) 56px;
  box-sizing: border-box;
  background:
    linear-gradient(180deg, rgba(255, 184, 0, 0.08) 0%, rgba(255, 184, 0, 0) 260px),
    linear-gradient(180deg, #f7faf7 0%, #edf6f1 100%);
  overflow-x: hidden;

  @media (max-width: 680px) {
    gap: 14px;
    padding: 16px 14px 34px;
    overflow-x: hidden;
  }
`;

export const PageHeader = styled.header`
  width: min(980px, 100%);
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

  a,
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    border: 0;
    border-radius: 8px;
    padding: 0 14px;
    background: ${colors.backgroundDark};
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 680px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;

    > div:first-child {
      width: 100%;
    }

    a,
    button {
      width: 100%;
    }
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 680px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-content: stretch;

    > :only-child {
      grid-column: 1 / -1;
    }
  }
`;

export const PrintButton = styled.button`
  background: ${colors.gradient} !important;
`;

export const PrintArea = styled.div`
  width: min(980px, 100%);
  min-width: 0;

  @media (max-width: 680px) {
    display: grid;
    justify-items: center;
    width: 100%;
    overflow-x: hidden;
  }
`;
