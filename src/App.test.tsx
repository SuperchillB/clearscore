import { screen as screenRTL } from '@testing-library/react';
import App from './App';
import { renderWithClient } from './tests/utils';

describe('App', () => {
  test('renders Account page', async () => {
    renderWithClient(<App />);
    const element = screenRTL.getByTestId('account-page');
    expect(element).toBeInTheDocument();
  });

  test('renders expected html', () => {
    const { container } = renderWithClient(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
