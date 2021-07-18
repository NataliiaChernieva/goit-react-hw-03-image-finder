import React from 'react';
import reactDom from 'react-dom';
import App from './App.jsx';
import './index.css';

reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
