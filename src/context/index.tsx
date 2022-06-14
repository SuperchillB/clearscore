import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

/*
Comments:
  - this component is where we can wrap all our context providers used in our app
  - For now we only use React Query's <QueryClientProvider> and styled-system's
    <ThemeProvider>, but other providers such as internationalisation or auth
    providers would go here
*/

interface AppProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </QueryClientProvider>
);

export default AppProviders;
