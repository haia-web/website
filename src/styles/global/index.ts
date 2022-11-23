import { createGlobalStyle } from 'styled-components';

const ColorsS = createGlobalStyle`
  :root {
    --color-dark: ${({ theme: { colors } }) => colors.dark};
    --color-light: ${({ theme: { colors } }) => colors.light};
    --color-primary: ${({ theme: { colors } }) => colors.primary};
  }
`;
const FontsS = createGlobalStyle`
  :root {
    --font-serif: ${({ theme: { fonts } }) => fonts.serif};
    --font-primary: ${({ theme: { fonts } }) => fonts.primary};
    --font-secondary: ${({ theme: { fonts } }) => fonts.secondary};
  }

  @font-face {
    font-family: "Intelo";
    font-weight: 400;
    src: url(/fonts/intelo-regular.woff2) format("woff2");
  }
  @font-face {
    font-family: "Intelo";
    font-weight: 700;
    src: url(/fonts/intelo-bold.woff2) format("woff2");
  }
  @font-face {
    font-family: "Intelo";
    font-weight: 300;
    src: url(/fonts/intelo-thin.woff2) format("woff2");
  }

  @font-face {
    font-family: "Denike";
    font-weight: 400;
    src: url(/fonts/denike-regular.woff2) format("woff2");
  }
  @font-face {
    font-family: "NouvelR";
    font-weight: 400;
    src: url(/fonts/nouvelr-regular.woff2) format("woff2");
  }
`;
const RootS = createGlobalStyle`
  :root {
    --margin: calc(${({ theme }) => theme.margin} * 2);
    --margin2: calc(var(--margin) * 2);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    color: rgb(var(--color-light));
    font-family: var(--font-primary);
    background-color: rgb(var(--color-primary));
    min-height: 100vh;
  }
  a {
    color: inherit;
  }
  h2 {
    font-family: var(--font-secondary);
    margin-top: 0;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 1.2rem;
    letter-spacing: .25em;
    text-transform: uppercase;
  }
  p {
    line-height: 1;
  }
  ul,
  li {
    list-style: none;
  }

  p.legend {
    text-align: left;
    margin-top: 4rem;
    font-size: 0.8rem;
    line-height: 1.5;
  }
  .mx-w {
    padding: 0 var(--margin);
  }
  .mx-w2 {
    padding: 0 var(--margin2);
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    ::root {
      --margin: 2rem;
      --margin2: 2rem;
    }
    .mx-w, .mx-w2 {
      padding: 0 2rem;
    }
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    ::root {
      --margin: 1rem;
      --margin2: 1rem;
    }
    .mx-w, .mx-w2 {
      padding: 0 1rem;
    }
  }
`;

export const GlobalStyles = {
  ColorsS,
  FontsS,
  RootS,
};
