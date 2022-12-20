import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Login } from './modules/login/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  <GoogleOAuthProvider clientId="569591364082-2nlppfb3tvja16sol1gbp573il06kmue.apps.googleusercontent.com">
    <Login/>
  </GoogleOAuthProvider>
  </React.StrictMode>
);
