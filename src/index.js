import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/default';

export const fetcher = (url) => fetch(url).then(response => response.json());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <SWRConfig value={{ fetcher }}>
        <App />
      </SWRConfig>
    </ThemeProvider>
  </React.StrictMode>
);

