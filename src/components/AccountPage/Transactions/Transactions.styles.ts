import styled from 'styled-components';
import { layout } from 'styled-system';
import spaces from '../../../styles/theme/foundations/space';
import { Flex } from '../../elements/Flex';

export const TransactionsContainer = styled.section({
  paddingTop: spaces.xxlarge,
});

export const TransactionCardsContainer = styled(Flex)(layout);
