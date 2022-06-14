import { DisplayProps, SpaceProps, WidthProps } from 'styled-system';

export type TagProps = {
  children: React.ReactNode;
  variant: 'success' | 'warning' | 'secondary';
} & SpaceProps &
  WidthProps &
  DisplayProps;
// } & TagFunctionsProps;

// export type TagFunctionsProps = TextProps & FlexProps;
