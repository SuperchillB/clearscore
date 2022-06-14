import radii from './foundations/border';
import breakpoints from './foundations/breakpoints';
import { colors } from './foundations/colors';
import shadows from './foundations/shadows';
import space from './foundations/space';
import { fonts, fontSizes, fontWeights } from './foundations/typography';
import { ThemeType } from './types';

const theme: ThemeType = {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
};

export default theme;
