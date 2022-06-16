import { FontSizeAlias, ThemeScale } from '../types';

const fontSizes = [
  '1.2rem',
  '1.4rem',
  '1.6rem',
  '2rem',
  '2.8rem',
  '3.2rem',
  '5.2rem',
] as ThemeScale<string, FontSizeAlias>;

fontSizes.micro = fontSizes[0];
fontSizes.tiny = fontSizes[1];
fontSizes.small = fontSizes[2];
fontSizes.medium = fontSizes[3];
fontSizes.large = fontSizes[4];
fontSizes.xlarge = fontSizes[5];
fontSizes.xxlarge = fontSizes[6];

const fontWeights = {
  normal: 'normal',
  bold: 'bold',
};

const fonts = {
  primary:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

export { fonts, fontSizes, fontWeights };
