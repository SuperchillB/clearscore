import React from 'react';
import MainLayout from './layouts/MainLayout';
import AccountPage from './pages/AccountPage';
import { GlobalStyles } from './styles/styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <AccountPage />
      </MainLayout>
    </>
  );
}

export default App;
