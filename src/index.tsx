import React from 'react';
import { createRoot } from 'react-dom/client';
// import './index.scss';
import App from './App';
import AppProviders from './context';
// import Preloader from './components/Preloader';

const container = document.getElementById('app');
const app = createRoot(container!);

app.render(
  <React.StrictMode>
    {/* <Suspense fallback={<Preloader />}> */}
    <AppProviders>
      <App />
    </AppProviders>
    {/* </Suspense> */}
  </React.StrictMode>,
);
