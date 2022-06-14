import styled from 'styled-components';
import { Flex } from '../Flex';
import { CardContainerProps } from './types';

export const CardContainer = styled(Flex)<CardContainerProps>`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;
