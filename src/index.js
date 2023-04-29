import React from 'react';
import ReactDOM from 'react-dom/client';

import { Layout } from 'components/Constants/Layout.styled';
import { GlobalStyle } from 'components/Constants/GlobalStyle';

import { App } from 'components/App';

import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <GlobalStyle />
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </Layout>
    </Provider>
  </React.StrictMode>
);
