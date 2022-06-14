import React from 'react';
import { TEST_USER_ID } from '../../constants';
import useGetAccount from '../../hooks/queries/accounts/useGetAccount';

const AccountPage = () => {
  const {
    data: accountData,
    // isError: isErrorAccount,
    // isLoading: isLoadingAccount,
  } = useGetAccount(TEST_USER_ID);

  console.warn('', accountData);

  return <h1>Your transactions</h1>;
};

export default AccountPage;
