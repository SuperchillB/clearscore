import { render, screen as screenRTL } from '@testing-library/react';
import { Box } from '../Box';
import { Flex } from './Flex.styles';

describe('Flex component', () => {
  test('renders its children and id', () => {
    const id = 'testId';
    const firstChildText = 'First child';
    const secondChildText = 'Second child';
    const { container } = render(
      <Flex alignItems="center" id={id} justifyContent="space-between">
        <Box>{firstChildText}</Box>
        <Box>{secondChildText}</Box>
      </Flex>,
    );

    expect(container.querySelector('div')?.id).toEqual(id);
    expect(screenRTL.getByText(firstChildText)).toBeInTheDocument();
    expect(screenRTL.getByText(secondChildText)).toBeInTheDocument();
  });

  test('renders with given props', () => {
    const { container } = render(
      <Flex
        alignItems={['center', 'stretch']}
        backgroundColor="budLightBlue"
        color="primary"
        flexDirection="column"
        justifyContent="center"
        mb={['medium', 'large', 'xlarge']}
        px="small"
        width={1}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
