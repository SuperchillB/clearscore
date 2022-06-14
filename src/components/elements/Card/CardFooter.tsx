import React from 'react';
import { Box } from '../Box';
import { CardDisplayProps } from './types';

const CardFooter = ({ children, ...props }: CardDisplayProps) => (
  <Box mt="auto" {...props}>
    {children}
  </Box>
);

export default CardFooter;
