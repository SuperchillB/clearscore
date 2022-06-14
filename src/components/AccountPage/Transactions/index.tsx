import React from 'react';
import { Heading } from '../../elements/Heading';
import { Paragraph } from '../../elements/Paragraph';
import TransactionCard from '../TransactionCard';
import {
  TransactionCardsContainer,
  TransactionsContainer,
} from './Transactions.styles';

const transactions = Array(10).fill({});

const Transactions = () => {
  return (
    <TransactionsContainer>
      <Heading fontWeight={1} ml="medium" my="large" variant="h3">
        Transactions
      </Heading>
      <Paragraph
        ml="medium"
        mt={['small', 'small', 'medium', 'large']}
        variant="body"
      >
        Below is a list of your 10 smallest expenses.
      </Paragraph>
      <TransactionCardsContainer
        px="medium"
        pb="large"
        overflowX={['auto', 'auto', 'visible']}
        flexGap={['small', 'large']}
        flexWrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
        mt={['0.9rem', '0.9rem', 'large', 'large', 'xlarge']}
      >
        {transactions.map((transaction, i) => (
          <TransactionCard key={i} />
        ))}
      </TransactionCardsContainer>
    </TransactionsContainer>
  );
};

export default Transactions;
