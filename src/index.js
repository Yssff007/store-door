import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Context from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <App />
  </Context>
    
  
);

