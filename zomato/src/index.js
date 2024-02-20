import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import reportWebVitals from './reportWebVitals';
import Home from './Home/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Detail from './Pages/Detail';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { faIndianRupeeSign, faLocationCrosshairs, faLocationDot, faMagnifyingGlass, faStar, faU, faUtensils } from '@fortawesome/free-solid-svg-icons';
import MainContext from './context/MainContext';
library.add(faLocationDot,faLocationCrosshairs,faMagnifyingGlass,faStar,faIndianRupeeSign,faUtensils)

let router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/restaurent-detail/:id?',
    element : <Detail/>
  },
  {
    path : '/login',
    element : <Login/>
  },
  {
    path : '/signup',
    element : <Signup/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainContext>
    <RouterProvider router={router}/>
  </MainContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
