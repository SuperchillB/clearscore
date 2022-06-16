import styled from 'styled-components';
import { layout } from 'styled-system';
// import spaces from '../../../styles/theme/foundations/space';
import { Flex } from '../../elements/Flex';

export const TransactionsContainer = styled.section({
  // paddingLeft: spaces.large,
  // paddingRight: spaces.large,
});

export const TransactionCardsContainer = styled(Flex)(layout);
