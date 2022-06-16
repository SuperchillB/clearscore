import { screen as screenRTL } from '@testing-library/react';
import Card from '.';
import { renderWithClient } from '../../../tests/utils';
import { Paragraph } from '../Paragraph';

describe('Card component', () => {
  test('renders its children properly', () => {
    renderWithClient(
      <Card>
        <Card.Header>Test header</Card.Header>
        <Card.Body>
          <Card.Title>Test title</Card.Title>
          <Paragraph variant="body">Test body</Paragraph>
        </Card.Body>
        <Card.Footer>Test footer</Card.Footer>
      </Card>,
    );

    expect(screenRTL.getByText('Test header')).toBeInTheDocument();
    expect(screenRTL.getByText('Test body')).toBeInTheDocument();
    expect(screenRTL.getByText('Test footer')).toBeInTheDocument();
  });

  test('renders with given props', () => {
    const { container } = renderWithClient(
      <Card
        flex={[
          '0 0 45%',
          '0 0 45%',
          `0 1 calc(50% - 1rem)`,
          '1 calc(100% / 5)',
        ]}
        width={['auto', 'auto', '50%', 'auto']}
        maxWidth={['30rem', '30rem', 'none', '23.5rem']}
      >
        <Card.Header>Test header</Card.Header>
        <Card.Body>
          <Card.Title>Test title</Card.Title>
          <Paragraph variant="body">Test body</Paragraph>
        </Card.Body>
        <Card.Footer display={['block', 'block', 'none']}>
          Test footer
        </Card.Footer>
      </Card>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
