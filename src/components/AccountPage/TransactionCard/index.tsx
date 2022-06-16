import React from 'react';
import { AccountTransaction } from '../../../types/accounts';
import { formatStringDateToEuroDate } from '../../../utils/date';
import Card from '../../elements/Card';
import { Paragraph } from '../../elements/Paragraph';
import Tag from '../../elements/Tag';

type TransactionCardProps = {
  data: AccountTransaction;
};

const TransactionCard = ({ data }: TransactionCardProps) => {
  const { date, description, category_title: categoryTitle, amount } = data;

  return (
    <Card
      flex={['0 0 45%', '0 0 45%', `0 1 calc(50% - 1rem)`, '1 calc(100% / 5)']}
      width={['auto', 'auto', '50%', 'auto']}
      // maxWidth={['30rem', '30rem', 'none', '30rem']}
      maxWidth={['30rem', '30rem', 'none', '27rem']}
    >
      <Card.Header
        alignContent="center"
        display="flex"
        justifyContent="space-between"
      >
        <Tag display={['none', 'none', 'inline-block']} variant="secondary">
          {categoryTitle}
        </Tag>
        <Paragraph alignSelf="center" variant="body">
          {formatStringDateToEuroDate(date)}
        </Paragraph>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {amount.value} {amount.currency_iso}
        </Card.Title>
        <Paragraph variant="body">{description}</Paragraph>
      </Card.Body>
      <Card.Footer display={['block', 'block', 'none']}>
        <Tag width={[1, 1, 'auto']} variant="secondary">
          {categoryTitle}
        </Tag>
      </Card.Footer>
    </Card>
  );
};

export default TransactionCard;