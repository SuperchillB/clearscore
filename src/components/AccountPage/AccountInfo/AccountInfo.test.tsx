import { screen as screenRTL } from '@testing-library/react';
import AccountInfo from '.';
import { renderWithClient } from '../../../tests/utils';
import Account from '../../../tests/fixtures/account.json';

describe('AccountInfo component', () => {
  test('renders correcly', async () => {
    const componentResult = renderWithClient(
      <AccountInfo
        balance={Account.balance}
        isLoading={false}
        provider={Account.provider}
      />,
    );

    const accountTitle = await componentResult.findByText(/Monzo/i);
    expect(accountTitle).toBeInTheDocument();
    const element = screenRTL.queryByTestId('account-info');
    expect(element).toBeInTheDocument();
  });

  test('renders skeletons when loading', async () => {
    renderWithClient(
      <AccountInfo balance={undefined} isLoading={true} provider={undefined} />,
    );

    const skeleton = screenRTL.queryByTestId('account-info-skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});
