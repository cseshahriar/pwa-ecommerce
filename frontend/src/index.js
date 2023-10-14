import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';

// react slick slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import custom css
import './assets/css/custom.css';
import './assets/css/animate.min.css';

// import react toastify
import 'react-toastify/dist/ReactToastify.css';

// loader div
import '../src/assets/css/placeholder-loading.min.css';

// import react toastify
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
