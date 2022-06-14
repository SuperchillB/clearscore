import React from 'react';
import { Box } from '../Box';
import { CardDisplayProps } from './types';

const CardHeader = ({ children, ...props }: CardDisplayProps) => (
  <Box mb="xlarge" {...props}>
    {children}
  </Box>
);

export default CardHeader;
