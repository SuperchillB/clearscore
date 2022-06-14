import React from 'react';
import Card from '../../elements/Card';
import { Paragraph } from '../../elements/Paragraph';
import Tag from '../../elements/Tag';

const TransactionCard = () => {
  return (
    <Card
      flex={['0 0 45%', '0 0 45%', `0 1 calc(50% - 1rem)`, '1 calc(100% / 3)']}
      width={['auto', 'auto', '50%', 'auto']}
      maxWidth={['30rem', '30rem', 'none', '30rem']}
    >
      <Card.Header>
        <Tag display={['none', 'none', 'inline-block']} variant="secondary">
          Transaction type
        </Tag>
      </Card.Header>
      <Card.Body>
        <Card.Title>Transaction title</Card.Title>
        <Paragraph variant="body">Transaction description</Paragraph>
      </Card.Body>
      <Card.Footer display={['block', 'block', 'none']}>
        <Tag width={[1, 1, 'auto']} variant="secondary">
          Transaction type
        </Tag>
      </Card.Footer>
    </Card>
  );
};

export default TransactionCard;
