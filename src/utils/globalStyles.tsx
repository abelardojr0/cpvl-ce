import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./theme";
import responsivo, { breakpoints } from "./responsive";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-Black.otf") format("opentype");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-BlackItalic.otf") format("opentype");
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-Bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-BoldItalic.otf") format("opentype");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-Book.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-BookItalic.otf") format("opentype");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-Light.otf") format("opentype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-LightItalic.otf") format("opentype");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-Medium.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-MediumItalic.otf") format("opentype");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-Thin.otf") format("opentype");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-ThinItalic.otf") format("opentype");
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-Ultra.otf") format("opentype");
    font-weight: 950;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-UltraItalic.otf") format("opentype");
    font-weight: 950;
    font-style: italic;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-XLight.otf") format("opentype");
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham/Gotham-XLightItalic.otf") format("opentype");
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: "GothamRounded";
    src: url("/fonts/Gotham/Gotham-Roundedbold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "GothamRounded";
    src: url("/fonts/Gotham/GothamRounded-BoldItalic.otf") format("opentype");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "GothamRounded";
    src: url("/fonts/Gotham/GothamRounded-Book.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "GothamRounded";
    src: url("/fonts/Gotham/GothamRounded-BookItalic.otf") format("opentype");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "GothamRounded";
    src: url("/fonts/Gotham/GothamRounded-Light.otf") format("opentype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "GothamRounded";
    src: url("/fonts/Gotham/GothamRounded-LightItalic.otf") format("opentype");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "GothamRounded";
    src: url("/fonts/Gotham/GothamRounded-Medium.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "GothamRounded";
    src: url("/fonts/Gotham/GothamRounded-MediumItalic.otf") format("opentype");
    font-weight: 500;
    font-style: italic;
  }

  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  *::selection {
    background: rgba(0, 122, 61, 0.2);
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: "Gotham";
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    background:
      linear-gradient(180deg, #f7faf7 0%, #eef6f1 100%);
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const TitlePage = styled.h1`
  font-size: 20px;
  color: ${colors.backgroundDark};
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  padding: 20px;
`;

export const SubtitlePage = styled.h2`
  font-size: 28px;
  margin-top: 20px;
  color: ${colors.main};
`;

interface Props {
  columns?: number;
}
export const ContainerGrid = styled.section<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 4}, 1fr);
  gap: 15px;
  ${responsivo(breakpoints.desktop)} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${responsivo(breakpoints.tablet)} {
    grid-template-columns: 1fr;
  }
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  color: ${colors.main};
  font-weight: bold;
`;

export const CardText = styled.span`
  font-size: 18px;
  color: ${colors.text};
  font-weight: 400;
`;

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  margin-top: 20px;
`;

export const ContainerAuth = styled.main`
  border-radius: 20px;
  padding: 15px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
