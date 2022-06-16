import { DisplayProps, SpaceProps, WidthProps } from 'styled-system';

export type TagProps = {
  children: React.ReactNode;
  variant: 'secondary' | 'loading';
} & SpaceProps &
  WidthProps &
  DisplayProps;
