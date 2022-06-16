import React from 'react';
import AccountInfo from '../../components/AccountPage/AccountInfo';
import Transactions from '../../components/AccountPage/Transactions';
import { Box } from '../../components/elements/Box';
import { Flex } from '../../components/elements/Flex';
import { TEST_USER_ID } from '../../constants';
import useGetAccount from '../../hooks/queries/accounts/useGetAccount';
import {
  AccountBalance,
  AccountProvider,
  AccountTransaction,
} from '../../types/accounts';

const AccountPage = () => {
  const {
    data: accountData,
    isError: isErrorAccount,
    isLoading: isLoadingAccount,
  } = useGetAccount(TEST_USER_ID);

  const filterTransactions = (transactions: AccountTransaction[]) => {
    if (!transactions || transactions.length === 0) return [];
    const smallestExpenses = transactions
      .slice()
      .filter((t) => t.amount.value < 0)
      .sort((a, b) => b.amount.value - a.amount.value)
      .slice(0, 10);
    return smallestExpenses;
  };

  // TODO: Use ErrorBoundary for error below
  return (
    <Box pl="xlarge">
      <AccountInfo
        balance={accountData?.balance as AccountBalance}
        isLoading={isLoadingAccount}
        provider={accountData?.provider as AccountProvider}
      />

      {isErrorAccount ? (
        <Flex justifyContent="center" mt="5rem" width={1}>
          Couldn&apos;t fetch your account. Please try again later.
        </Flex>
      ) : (
        <Transactions
          isLoading={isLoadingAccount}
          transactions={filterTransactions(accountData?.transactions || [])}
        />
      )}
    </Box>
  );
};

export default AccountPage;
