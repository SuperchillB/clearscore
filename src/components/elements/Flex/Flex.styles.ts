import styled from 'styled-components';
import { flexbox, system } from 'styled-system';
import { Box } from '../Box';
import FlexProps from './types';

// Creates a "gap" custom prop to use inside <Flex> since
// the CSS "gap" property doesn't exist in the FlexProps
const flexGap = system({
  flexGap: {
    property: 'gap',
    scale: 'space',
  },
});

export const Flex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },
  flexbox,
  flexGap,
);
