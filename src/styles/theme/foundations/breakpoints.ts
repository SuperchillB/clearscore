import { BreakpointAlias, ThemeScale } from '../types';

// export const breakpoints = ["375px", "768px", "1024px", "1280px"];
const breakpoints = [
  '375px',
  '768px',
  '1024px',
  '1280px',
  // '37.5rem',
  // '76.8rem',
  // '102.4rem',
  // '128.0rem',
] as ThemeScale<string, BreakpointAlias>;

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default breakpoints;
