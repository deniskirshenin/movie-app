import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/default';
import { Provider } from 'react-redux';
import store from './store/store';


export const fetcher = (url) => fetch(url).then(response => response.json());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <SWRConfig value={{ fetcher }}>
          <App />
        </SWRConfig>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

