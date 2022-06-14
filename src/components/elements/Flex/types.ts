import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ResponsiveValue,
} from 'styled-system';
import { ThemeType } from '../../../styles/theme/types';

type FlexProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    flexGap?: ResponsiveValue<string, ThemeType> | undefined;
  };

export default FlexProps;
