import TransactionCard from '.';
import { renderWithClient } from '../../../tests/utils';

const transaction = {
  id: '13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28',
  date: '2018-06-30',
  description: 'Tesco',
  category_title: 'Groceries',
  amount: {
    value: -57.21,
    currency_iso: 'GBP',
  },
};

describe('TransactionCard component', () => {
  test('renders correcly', async () => {
    const componentResult = renderWithClient(
      <TransactionCard data={transaction} />,
    );

    const cardText = await componentResult.findByText(/Tesco/i);
    expect(cardText).toBeInTheDocument();
  });
});
