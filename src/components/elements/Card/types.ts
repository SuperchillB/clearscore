import {
  DisplayProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import BoxProps from '../Box/types';

export type CardProps = {
  children?: React.ReactNode;
} & FlexboxProps &
  LayoutProps &
  SpaceProps;

export type CardContainerProps = BoxProps;

export type CardDisplayProps = {
  children: React.ReactNode;
} & DisplayProps &
  FlexboxProps &
  TypographyProps;
