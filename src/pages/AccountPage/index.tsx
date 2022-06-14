import React from 'react';
import Transactions from '../../components/AccountPage/Transactions';
import { Box } from '../../components/elements/Box';
import { Heading } from '../../components/elements/Heading';
import { Paragraph } from '../../components/elements/Paragraph';
import { TEST_USER_ID } from '../../constants';
import useGetAccount from '../../hooks/queries/accounts/useGetAccount';

const AccountPage = () => {
  const {
    data: accountData,
    isError: isErrorAccount,
    isLoading: isLoadingAccount,
  } = useGetAccount(TEST_USER_ID);

  console.log('', { accountData, isErrorAccount, isLoadingAccount });

  return (
    <Box>
      <Heading my="large" variant="h2">
        My account
      </Heading>
      <Paragraph variant="body">This is a paragraph</Paragraph>
      <Transactions />
    </Box>
  );
};

export default AccountPage;
