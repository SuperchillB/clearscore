import { Account } from '../../../types/accounts';
import request from '../request';

const accountsEndpoints = {
  getAccount: async (): Promise<Account> =>
    request({
      path: '/5c62e7c33000004a00019b05',
    }),
  // ...
  // All other account-related endpoints (POST, PUT, ...) go here
};

export default accountsEndpoints;
