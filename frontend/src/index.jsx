import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './app/store'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain="dev-gtqcs7u8l0hno6ih.us.auth0.com"
      clientId="95AfyE7lQRn34URfOLz4dgApVDU1jMPn"
      authorizationParams={{
            redirect_uri: window.location.origin
          }}>
        <Provider store={store}>
          <App />
        </Provider>
  </Auth0Provider>,

);

