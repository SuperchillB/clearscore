import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box } from '../Box';

const TagContainer = styled(Box)(
  {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  variant({
    variants: {
      secondary: {
        color: 'midnight',
        bg: 'bluePillBg',
      },
      // Could add more variants here for different types of Tags
    },
  }),
);

export default TagContainer;
