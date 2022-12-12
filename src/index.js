import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes,Route, BrowserRouter } from 'react-router-dom';
import Hero from './Cmpnts/Hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Routes>
  <Route path='/' element={  <App/>   }/>
  <Route path="/Hero" element={<Hero/>}></Route>
  <Route path="/Hero/:id" element={<Hero/>}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
