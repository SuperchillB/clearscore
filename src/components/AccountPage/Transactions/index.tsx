import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { AccountTransaction } from '../../../types/accounts';
import Card from '../../elements/Card';
import { Heading } from '../../elements/Heading';
import { Paragraph } from '../../elements/Paragraph';
import Tag from '../../elements/Tag';
import TransactionCard from '../TransactionCard';
import {
  TransactionCardsContainer,
  TransactionsContainer,
} from './Transactions.styles';

type TransactionsProps = {
  isLoading: boolean;
  transactions: AccountTransaction[];
};

const Transactions = ({ isLoading, transactions }: TransactionsProps) => {
  const renderHeader = () => (
    <>
      <Heading ml="medium" my="large" textAlign="center" variant="h3">
        Transactions
      </Heading>
      <Paragraph
        ml="medium"
        mt={['small', 'small', 'medium', 'large']}
        textAlign="center"
        variant="body"
      >
        Your 10 smallest expenses
      </Paragraph>
    </>
  );

  // Skeleton UI
  if (isLoading) {
    // if (transactions && transactions.length === 0) {
    return (
      <SkeletonTheme baseColor="#C8C8C8">
        <TransactionsContainer data-testid="transactions-skeleton">
          {renderHeader()}
          <TransactionCardsContainer
            px="medium"
            pb="large"
            overflowX={['auto', 'auto', 'visible']}
            flexGap={['small', 'large']}
            flexWrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
            mt={['0.9rem', '0.9rem', 'large', 'large', 'xlarge']}
          >
            {Array(10)
              .fill({})
              .map((transaction, i) => (
                <Card
                  flex={[
                    '0 0 45%',
                    '0 0 45%',
                    `0 1 calc(50% - 1rem)`,
                    '1 calc(100% / 5)',
                  ]}
                  width={['auto', 'auto', '50%', 'auto']}
                  // maxWidth={['30rem', '30rem', 'none', '30rem']}
                  maxWidth={['30rem', '30rem', 'none', '23.5rem']}
                  key={i}
                >
                  <Card.Header>
                    <Tag
                      display={['none', 'none', 'inline-block']}
                      variant="secondary"
                    >
                      <Skeleton width="10rem" />
                    </Tag>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <Skeleton width="13rem" />
                    </Card.Title>
                    <Paragraph variant="body">
                      <Skeleton count={1} />
                    </Paragraph>
                  </Card.Body>
                  <Card.Footer display={['block', 'block', 'none']}>
                    <Tag width={[1, 1, 'auto']} variant="secondary">
                      <Skeleton width="11.3rem" />
                    </Tag>
                  </Card.Footer>
                </Card>
              ))}
          </TransactionCardsContainer>
        </TransactionsContainer>
      </SkeletonTheme>
    );
  }

  return (
    <TransactionsContainer>
      {renderHeader()}
      <TransactionCardsContainer
        data-testid="transaction-cards-container"
        px="medium"
        pb="large"
        overflowX={['auto', 'auto', 'visible']}
        flexGap={['small', 'large']}
        flexWrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
        mt={['0.9rem', '0.9rem', 'large', 'large', 'xlarge']}
      >
        {transactions?.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
      </TransactionCardsContainer>
    </TransactionsContainer>
  );
};

export default Transactions;
