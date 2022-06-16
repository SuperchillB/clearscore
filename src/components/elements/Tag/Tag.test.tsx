import { render, screen as screenRTL } from '@testing-library/react';
import Tag from '.';

describe('Tag component', () => {
  test('renders its children', () => {
    const children = 'Tag test copy';
    render(<Tag variant="secondary">{children}</Tag>);

    expect(screenRTL.getByText(children)).toBeInTheDocument();
  });

  test('renders with given props and "secondary" variant', () => {
    const { container } = render(
      <Tag display={['none', 'none', 'inline-block']} variant="secondary">
        Test tag
      </Tag>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
