import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ThemeType } from './theme/types';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize};
  *, :before, :after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    /* font-family: ${(props) => props.theme.fonts.primary}; */
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.info};
    color: ${(props) => props.theme.colors.primary}; // ! CHANGE LATER
    cursor: default;
  }
  main {
    height: 100%;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title}; // ! CHANGE LATER
    line-height: 2rem;
  }
  p {
    line-height: 2rem;
  }
  h1 {
    font-weight: normal;
    font-size: 3.2rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: 0;
    padding: 0;
    background: none;
    cursor: pointer;
  }
  li{
    list-style: none;
  }
`;
