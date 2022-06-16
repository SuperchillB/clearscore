import { screen as screenRTL, waitFor } from '@testing-library/react';
import AccountPage from '.';
import { renderGetAccountHook, renderWithClient } from '../../tests/utils';
import { server } from '../../tests/mocks/server';
import { rest } from 'msw';
import { API_BASE_URL } from '../../constants';

describe('AccountPage component', () => {
  test('renders correctly', () => {
    renderWithClient(<AccountPage />);
    const element = screenRTL.getByTestId('account-page');
    expect(element).toBeInTheDocument();
  });

  test('displays error message when query fails', async () => {
    server.use(
      rest.get(`${API_BASE_URL}/5c62e7c33000004a00019b05`, (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );
    const { result } = renderGetAccountHook();
    await waitFor(() => expect(result.current.isError).toBe(true));

    const componentResult = renderWithClient(<AccountPage />);
    expect(
      await componentResult.findByText(
        /Couldn't fetch your account. Please try again later./i,
      ),
    ).toBeInTheDocument();
  });
});
