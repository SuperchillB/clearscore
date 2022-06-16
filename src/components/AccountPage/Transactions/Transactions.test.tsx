import { screen as screenRTL, waitFor } from '@testing-library/react';
import Transactions from '.';
import { renderGetAccountHook, renderWithClient } from '../../../tests/utils';
import Account from '../../../tests/fixtures/account.json';

describe('Transactions feature component', () => {
  test('loads correctly with successful query', async () => {
    const { result } = renderGetAccountHook();
    const { data, isLoading } = result.current;

    const componentResult = renderWithClient(
      <Transactions
        isLoading={isLoading}
        transactions={data?.transactions || []}
      />,
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    // expect(
    //   await componentResult.getByTestId('transactions-container'),
    // ).toBeInTheDocument();
    expect(
      await componentResult.findByText(/Transactions/i),
    ).toBeInTheDocument();
  });

  test('renders the card components correctly', async () => {
    const { result } = renderGetAccountHook();
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    const { data, isLoading } = result.current;

    const componentResult = renderWithClient(
      <Transactions
        isLoading={isLoading}
        transactions={data?.transactions || []}
      />,
    );

    expect(
      await componentResult.getByTestId('transaction-cards-container').children
        .length,
    ).toBe(20);
    const element = screenRTL.getAllByTestId('transaction-card');
    expect(element).toBeDefined();
  });

  test('renders skeletons when loading', async () => {
    renderWithClient(<Transactions isLoading={true} transactions={[]} />);

    const skeleton = screenRTL.queryByTestId('transactions-skeleton');
    expect(skeleton).toBeInTheDocument();
  });

  test('hides skeletons when fetching is complete', async () => {
    renderWithClient(
      <Transactions isLoading={false} transactions={Account.transactions} />,
    );

    const skeleton = screenRTL.queryByTestId('transactions-skeleton');
    expect(skeleton).not.toBeInTheDocument();
    const element = screenRTL.getAllByTestId('transaction-card');
    expect(element).toBeDefined();
  });
});
