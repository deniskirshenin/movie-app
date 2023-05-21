import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SWRConfig } from 'swr';

export const fetcher = (url) => fetch(url).then(response => response.json());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>
);

