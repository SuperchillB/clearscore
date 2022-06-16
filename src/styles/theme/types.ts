export interface ThemeType {
  breakpoints: ThemeScale<string, BreakpointAlias>;
  colors: { [key in string]: string };
  fonts: { [key in string]: string };
  fontSizes: ThemeScale<string, FontSizeAlias>;
  fontWeights: { [key in string]: string };
  radii: ThemeScale<string, RadiiAlias>;
  shadows: { [key in string]: string };
  space: ThemeScale<string, SpaceAlias>;
}

export type ThemeScale<Type, Aliases extends string> = Array<Type> &
  Record<Aliases, Type>;
export type RadiiAlias = 'pill' | 'card';
export type BreakpointAlias = 'sm' | 'md' | 'lg' | 'xl';
export type FontSizeAlias =
  | 'micro'
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
export type SpaceAlias =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
