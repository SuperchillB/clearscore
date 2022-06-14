import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type ParagraphFunctionsProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  TypographyProps;

export type ParagraphProps = {
  variant: 'body' | 'subTitle';
} & ParagraphFunctionsProps;
