import { screen as screenRTL, waitFor } from '@testing-library/react';
import Transactions from '.';
import { renderGetAccountHook, renderWithClient } from '../../../tests/utils';

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
});
