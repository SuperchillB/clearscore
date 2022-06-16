import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { AccountBalance, AccountProvider } from '../../../types/accounts';
import { Box } from '../../elements/Box';
import Card from '../../elements/Card';
import { Heading } from '../../elements/Heading';
import { Paragraph } from '../../elements/Paragraph';

type AccountInfoProps = {
  balance: AccountBalance | undefined;
  isLoading: boolean;
  provider: AccountProvider | undefined;
};

const AccountInfo = ({ balance, isLoading, provider }: AccountInfoProps) => {
  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#C8C8C8">
        <Card
          data-testid="account-info-skeleton"
          width={['auto', 'auto', '50%', 'auto']}
          maxWidth={['30rem', '30rem', 'none', '38rem']}
          mx="auto"
        >
          <Card.Body>
            <Card.Title lineHeight="1rem" textAlign="center">
              <Skeleton height="2rem" width="17rem" />
            </Card.Title>
          </Card.Body>
          <Card.Footer display={['block', 'block', 'none', 'block']}>
            <Paragraph
              lineHeight="1rem"
              textAlign="center"
              letterSpacing="0.2rem"
              variant="subTitle"
              fontSize="micro"
            >
              <Skeleton height="2rem" width="25rem" />
            </Paragraph>
            <Heading
              lineHeight="1rem"
              textAlign="center"
              my="large"
              variant="h4"
            >
              <Skeleton height="2rem" width="15rem" />
            </Heading>
          </Card.Footer>
        </Card>
      </SkeletonTheme>
    );
  }

  return (
    <Box data-testid="account-info">
      <Card
        width={['auto', 'auto', '50%', 'auto']}
        maxWidth={['30rem', '30rem', 'none', '38rem']}
        mx="auto"
      >
        <Card.Body>
          <Card.Title textAlign="center">{provider?.title}</Card.Title>
        </Card.Body>
        <Card.Footer display="block">
          <Paragraph
            textAlign="center"
            letterSpacing="0.2rem"
            variant="subTitle"
            fontSize="micro"
          >
            {provider?.description.toUpperCase()}
          </Paragraph>
          <Heading textAlign="center" my="large" variant="h4">
            {balance?.amount} {balance?.currency_iso}
          </Heading>
        </Card.Footer>
      </Card>
    </Box>
  );
};

export default AccountInfo;
