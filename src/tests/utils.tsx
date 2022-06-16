import { render, renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { TEST_USER_ID } from '../constants';
import useGetAccount from '../hooks/queries/accounts/useGetAccount';
import theme from '../styles/theme';
import { ThemeType } from '../styles/theme/types';

/*
  Comments:
    - Each test will have its own QueryClientProvider (provided by React Query)
    - We create a new QueryClient (provided by React Query) for each test
    - This will help isolate tests from each other
*/

/**
 * Creates a new React query client, which holds the query cache for our queries
 * @returns {Function}  React Query query client (cache)
 */
const getNewQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

/**
 * Renders passed-in component with its context providers (React Query and Styled components Theme)
 * @param param0
 * @param param0.component    {JSXElement}    Component (ReactElement) to be rendered as children
 * @param param0.queryClient  {Object}        React Query query client (QueryClient) to be passed to RQ's <QueryClientProvider>
 * @param param0.theme        {Object}        Styled-components' theme object (ThemeType) to be passed to SC's <ThemeProvider>
 * @returns                   {JSXElement}    Wrapper for all contexts used in the app
 */
export const renderWithProviders = ({
  component,
  queryClient,
  appTheme,
}: {
  component: React.ReactElement;
  queryClient: QueryClient;
  appTheme: ThemeType;
}) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={appTheme}>{component}</ThemeProvider>
  </QueryClientProvider>
);

/**
 * Creates wrapper for components that use a useQuery hook, and therefore a context
 * provider (in this case <QueryClientProvider>).
 * @param component {ReactElement}  Component to wrap inside <QueryClientProvider>
 * @returns         {Function}      Wrapper to wrap test components in during rendering
 */
export const renderWithClient = (component: React.ReactElement) => {
  const queryClient = getNewQueryClient();
  const { rerender, ...result } = render(
    // <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>,
    renderWithProviders({ component, queryClient, appTheme: theme }),
  );
  return {
    ...result,
    rerender: (rerenderComponent: React.ReactElement) =>
      rerender(
        renderWithProviders({
          component: rerenderComponent,
          queryClient,
          appTheme: theme,
        }),
        // <QueryClientProvider client={queryClient}>
        //   {rerenderComponent}
        // </QueryClientProvider>,
      ),
  };
};

/**
 * Creates wrapper for custom hooks that use context providers (in this case <QueryClientProvider>)
 * @returns {Function}  Wrapper to wrap test components in during rendering
 */
export const createWrapper = () => {
  const queryClient = getNewQueryClient();
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

/**
 * Wraps useGetAccount custom hook inside a React Query provider
 * @returns {Object}  Result of the query and waitFor method to await something
 */
export const renderGetAccountHook = () => {
  const { result } = renderHook(() => useGetAccount(TEST_USER_ID), {
    wrapper: createWrapper(),
  });
  return { result, waitFor };
};
