import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css'
import App from './pages/App/App.js';
import { BrowserRouter } from "react-router-dom";
import store from './store/store'
import { Provider } from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
