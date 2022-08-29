import React from 'react';
// import ReactDOM from 'react-dom/client';
import  ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Link,NavLink,Switch, Route, Routes } from 'react-router-dom';
import Formex1 from './Formex1';
import Details1 from './Details1';
import { createRoot } from 'react-dom/client';
import { Grid } from 'ag-grid-community';
import NormalApi from './NormalApi';
import PutApi from './PutApi';
import GetApi from './GetApi';

const routing= (
  <Router>
    <div>
        <div className='linkdetails'>
          <Link to="/Details1">Details</Link>
          <Link to="/Login" className='logout'>Login</Link>
          {/* <Link to="/api">api</Link> */}
          {/* <Link to="/put">put</Link> */}
        </div>
        <Routes>
      <Route exact path="/Login" element={<Formex1/>}/>
      
      <Route path="/Details1" element={<Details1/>}/>

      {/* <Route path="/api" element={<NormalApi/>}/> */}
      {/* <Route path='/put' element={<PutApi/>}/> */}
      </Routes>
      
      
    </div>
  </Router>
)
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
ReactDOM.render(routing,document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById('root'));
