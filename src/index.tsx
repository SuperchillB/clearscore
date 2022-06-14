import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
// import Preloader from './components/Preloader';

const container = document.getElementById('app');
const app = createRoot(container!);

app.render(
  <React.StrictMode>
    {/* <Suspense fallback={<Preloader />}> */}
    <App />
    {/* </Suspense> */}
  </React.StrictMode>,
);
