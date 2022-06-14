import { RadiiAlias, ThemeScale } from '../types';

const radii = ['0.4rem', '0.8rem'] as ThemeScale<string, RadiiAlias>;

radii.pill = radii[0];
radii.card = radii[1];

export default radii;
