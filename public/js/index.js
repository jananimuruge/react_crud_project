import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Link, NavLink, Switch, Route, Routes } from 'react-router-dom';
import Formex1 from './Formex1';
import Details1 from './Details1';
import { createRoot } from 'react-dom/client';
import { Grid } from 'ag-grid-community';
import NormalApi from './NormalApi';
import PutApi from './PutApi';
import GetApi from './GetApi';

var routing = React.createElement(
  Router,
  null,
  React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'linkdetails' },
      React.createElement(
        Link,
        { to: '/put' },
        'put'
      )
    ),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: '/put', element: React.createElement(PutApi, null) })
    )
  )
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
ReactDOM.render(routing, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById('root'));