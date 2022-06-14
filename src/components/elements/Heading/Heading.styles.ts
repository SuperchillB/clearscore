import styled from 'styled-components';
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
  variant,
} from 'styled-system';
import { HeadingProps } from './types';

const headingStyles = {
  mt: '0rem',
  mb: '0rem',
  color: 'midnight',
  fontWeight: 'bold',
  // fontFamily: 'heading',
};

export const Heading = styled.h1.attrs<HeadingProps>(({ variant: size }) => ({
  as: size,
}))<HeadingProps>(
  variant({
    variants: {
      h2: {
        ...headingStyles,
        fontSize: 'xlarge', // Or 3
      },
      h3: {
        ...headingStyles,
        fontSize: 'large', // Or 2
      },
      // Could add more headings (h1, h4, ...)
    },
  }),
  compose(space, color, layout, flexbox, border, position, typography),
);

Heading.defaultProps = {
  variant: 'h2',
};
