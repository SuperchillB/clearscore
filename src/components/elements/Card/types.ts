import { DisplayProps, FlexboxProps, LayoutProps } from 'styled-system';
import BoxProps from '../Box/types';

export type CardProps = {
  children?: React.ReactNode;
} & FlexboxProps &
  LayoutProps;

export type CardContainerProps = BoxProps;

export type CardDisplayProps = {
  children: React.ReactNode;
} & DisplayProps &
  FlexboxProps;
