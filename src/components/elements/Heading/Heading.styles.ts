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
};

export const Heading = styled.h1.attrs<HeadingProps>(({ variant: size }) => ({
  as: size,
}))<HeadingProps>(
  variant({
    variants: {
      h1: {
        ...headingStyles,
        fontSize: 'xxlarge',
      },
      h2: {
        ...headingStyles,
        fontSize: 'xlarge',
      },
      h3: {
        ...headingStyles,
        fontSize: 'large',
      },
      h4: {
        ...headingStyles,
        fontSize: 'medium',
      },
      // Could add more headings (h5, ...)
    },
  }),
  compose(space, color, layout, flexbox, border, position, typography),
);

Heading.defaultProps = {
  variant: 'h2',
};
