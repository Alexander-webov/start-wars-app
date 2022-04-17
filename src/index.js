import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css'
import App from './pages/App/App.js';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
