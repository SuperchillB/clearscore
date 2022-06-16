import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { AccountBalance, AccountProvider } from '../../../types/accounts';
import { Box } from '../../elements/Box';
import { Heading } from '../../elements/Heading';
import { Paragraph } from '../../elements/Paragraph';

type AccountInfoProps = {
  balance: AccountBalance;
  isLoading: boolean;
  provider: AccountProvider;
};

const AccountInfo = ({ balance, isLoading, provider }: AccountInfoProps) => {
  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#C8C8C8">
        <Box>
          <Heading my="large" variant="h2">
            <Skeleton height="2rem" width="20rem" />
          </Heading>
          <Heading my="large" variant="h3">
            <Skeleton height="2rem" width="30rem" />
          </Heading>
          <Paragraph variant="body">
            <Skeleton height="2rem" width="20rem" />
          </Paragraph>
        </Box>
      </SkeletonTheme>
    );
  }

  return (
    <Box>
      <Heading my="large" variant="h2">
        {provider?.title}
      </Heading>
      <Heading my="large" variant="h3">
        {provider?.description}
      </Heading>
      <Paragraph variant="body">
        Balance: {balance?.amount} {balance?.currency_iso}
      </Paragraph>
    </Box>
  );
};

export default AccountInfo;
