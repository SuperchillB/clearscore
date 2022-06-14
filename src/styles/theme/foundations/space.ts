import { SpaceAlias, ThemeScale } from '../types';

const spaces = ['0.4rem', '0.8rem', '1rem', '1.6rem', '2.4rem'] as ThemeScale<
  string,
  SpaceAlias
>;

spaces.tiny = spaces[0];
spaces.small = spaces[1];
spaces.medium = spaces[2];
spaces.large = spaces[3];
spaces.xlarge = spaces[4];

export default spaces;
