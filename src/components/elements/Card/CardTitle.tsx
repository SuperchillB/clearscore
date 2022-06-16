import React from 'react';
import { Heading } from '../Heading';
import { CardDisplayProps } from './types';

const CardTitle = ({ children, ...props }: CardDisplayProps) => (
  <Heading mb="tiny" variant="h4" {...props}>
    {children}
  </Heading>
);

export default CardTitle;
