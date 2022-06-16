import React, { useMemo } from 'react';
import AccountInfo from '../../components/AccountPage/AccountInfo';
import Transactions from '../../components/AccountPage/Transactions';
import { Box } from '../../components/elements/Box';
import { Flex } from '../../components/elements/Flex';
import { TEST_USER_ID } from '../../constants';
import useGetAccount from '../../hooks/queries/accounts/useGetAccount';
import { AccountBalance, AccountProvider } from '../../types/accounts';
import { filterTransactions } from './utils';

const AccountPage = () => {
  const {
    data: accountData,
    isError: isErrorAccount,
    isLoading: isLoadingAccount,
  } = useGetAccount(TEST_USER_ID);

  // Using useMemo here in case we're dealing with a lot of transactions.
  // Ideally, we would have a query parameter on the endpoint url ("?filter=10")
  // that allows the server-side to filter the results before returning them.
  // This filter would be registered as a dependency in our react-query hook, that
  // way we can link it to our UI, thus allowing the user to change the desired
  // number of filtered results
  const filteredTransactions = useMemo(
    () => filterTransactions(accountData?.transactions || []),
    [accountData?.transactions],
  );

  return (
    <Box data-testid="account-page" pl="xlarge">
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
          transactions={filteredTransactions}
        />
      )}
    </Box>
  );
};

export default AccountPage;
