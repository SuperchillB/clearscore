import React from 'react';
import MainLayout from './layouts/MainLayout';
import AccountPage from './pages/AccountPage';
import { GlobalStyles } from './styles/styles';
import 'react-loading-skeleton/dist/skeleton.css';

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
