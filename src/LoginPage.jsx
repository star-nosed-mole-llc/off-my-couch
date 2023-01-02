import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('login')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
