import { render, screen as screenRTL } from '@testing-library/react';
import { Paragraph } from './Paragraph.styles';

describe('Paragraph component', () => {
  test('renders its text and id', () => {
    const id = 'testId';
    const children = 'Test text';
    const { container } = render(
      <Paragraph id={id} variant="body">
        {children}
      </Paragraph>,
    );

    expect(container.querySelector('p')?.id).toEqual(id);
    expect(screenRTL.getByText(children)).toBeInTheDocument();
  });

  test('renders with given props and "body" variant', () => {
    const { container } = render(
      <Paragraph
        ml="medium"
        mt={['small', 'small', 'medium', 'large']}
        variant="body"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with given props and "subTitle" variant', () => {
    const { container } = render(
      <Paragraph
        ml="medium"
        mt={['small', 'small', 'medium', 'large']}
        variant="subTitle"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
