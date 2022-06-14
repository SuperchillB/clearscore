import { FontSizeAlias, ThemeScale } from '../types';

const fontSizes = [
  '1.2rem',
  '1.4rem',
  '1.6rem',
  '2rem',
  '2.6rem',
] as ThemeScale<string, FontSizeAlias>;

fontSizes.tiny = fontSizes[0];
fontSizes.small = fontSizes[1];
fontSizes.medium = fontSizes[2];
fontSizes.large = fontSizes[3];
fontSizes.xlarge = fontSizes[4];

const fontWeights = {
  normal: 'normal',
  bold: 'bold',
};

const fonts = {
  primary:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

export { fonts, fontSizes, fontWeights };
