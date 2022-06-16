import { rest } from 'msw';
import Account from '../fixtures/account.json';
import { API_BASE_URL } from '../../constants';

const api = (path: string) => `${API_BASE_URL}${path}`;

const handlers = [
  rest.get(api('/5c62e7c33000004a00019b05'), (req, res, ctx) =>
    res(ctx.status(200), ctx.json(Account)),
  ),
];

export default handlers;
