import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type HeadingFunctionsProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  TypographyProps;

export type HeadingProps = {
  variant: 'h2' | 'h3'; // Could add more headings (h1, h4, ...)
} & HeadingFunctionsProps;
