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
import { ParagraphProps } from './types';

const paragraphStyles = {
  mt: '0rem',
  mb: '0rem',
  fontWeight: 'normal',
};

export const Paragraph = styled.p<ParagraphProps>(
  variant({
    variants: {
      body: {
        ...paragraphStyles,
        fontSize: 'small',
      },
      subTitle: {
        ...paragraphStyles,
        fontSize: 'tiny',
      },
    },
  }),
  compose(space, color, layout, flexbox, border, position, typography),
);

Paragraph.defaultProps = {
  variant: 'body',
};
