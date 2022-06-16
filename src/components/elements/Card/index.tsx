import theme from '../../../styles/theme';
import { CardContainer } from './Card.styles';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardTitle from './CardTitle';
import { CardProps } from './types';

/*

Comments:
  - Assuming here Card component is not clickable and doesn't have a "clickable" prop
  
*/

const Card = ({ children, ...props }: CardProps) => {
  return (
    <CardContainer
      p={{ _: theme.space.large, md: theme.space.xlarge }}
      justifyContent="stretch"
      {...props}
    >
      {children}
    </CardContainer>
  );
};

export default Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Body: CardBody,
  Footer: CardFooter,
});
