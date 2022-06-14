import React from 'react';
import { Box } from '../Box';
import { CardDisplayProps } from './types';

const CardBody = ({ children, ...props }: CardDisplayProps) => (
  <Box mb="xlarge" {...props}>
    {children}
  </Box>
);

export default CardBody;
