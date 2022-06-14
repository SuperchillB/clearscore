import React from 'react';
import { Container } from './MainLayout.styles';
import { MainLayoutProps } from './types';

/*
Notes:
  - This component explains how the content is displayed in pages (here in the account page)
*/

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

export default MainLayout;
