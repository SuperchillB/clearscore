import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
} from 'styled-system';
import BoxProps from './types';

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(space, color, layout, flexbox, border, position),
);
