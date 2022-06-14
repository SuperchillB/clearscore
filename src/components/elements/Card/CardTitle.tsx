import React from 'react';
import { Heading } from '../Heading';
import { CardDisplayProps } from './types';

const CardTitle = ({ children }: CardDisplayProps) => (
  <Heading mb="tiny" variant="h3">
    {children}
  </Heading>
);

export default CardTitle;
