import { render, screen as screenRTL } from '@testing-library/react';
import { Heading } from './Heading.styles';

describe('Heading component', () => {
  test('renders its text and id', () => {
    const id = 'testId';
    const children = 'Test heading';
    const { container } = render(
      <Heading id={id} variant="h2">
        {children}
      </Heading>,
    );

    expect(container.querySelector('h2')?.id).toEqual(id);
    expect(screenRTL.getByText(children)).toBeInTheDocument();
  });

  test('renders with given props and "h3" variant', () => {
    const { container } = render(<Heading variant="h3" />);

    const h3 = container.querySelector('h3');
    expect(h3).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with given props and "h4" variant', () => {
    const { container } = render(<Heading variant="h4" />);

    const h4 = container.querySelector('h4');
    expect(h4).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with given props', () => {
    const { container } = render(
      <Heading
        alignItems={['center', 'stretch']}
        backgroundColor="budLightBlue"
        color="primary"
        flexDirection="column"
        justifyContent="center"
        mb={['medium', 'large', 'xlarge']}
        px="small"
        width={1}
        variant="h3"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
