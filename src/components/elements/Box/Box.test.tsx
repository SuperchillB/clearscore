import { render } from '@testing-library/react';
import { Box } from './Box.styles';

describe('Box component', () => {
  test('renders with given props', () => {
    const { container } = render(
      <Box
        backgroundColor="budLightBlue"
        color="primary"
        mb={['medium', 'large', 'xlarge']}
        px="small"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
