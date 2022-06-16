import { rest } from 'msw';
import { API_BASE_URL } from '../../../constants';
import { renderGetAccountHook } from '../../../tests/utils';
import { server } from '../../../tests/mocks/server';
import { waitFor } from '@testing-library/react';

describe('useGetAccount query custom hook', () => {
  test('useGetAccount successful operation', async () => {
    const { result } = renderGetAccountHook();

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data?.transactions[0].description).toBe('Tesco');
  });

  test('useGetAccount failed operation', async () => {
    server.use(
      rest.get(`${API_BASE_URL}/5c62e7c33000004a00019b05`, (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    const { result } = renderGetAccountHook();

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
