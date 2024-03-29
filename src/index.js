import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);

