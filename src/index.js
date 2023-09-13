import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantMenuDetails from './components/Body/RestaurantMenuDetails';
import Error from './components/Error';
import Body from './components/Body/Body';
import CartDetails from './components/Body/CartDetails';
import Home from './components/Home/Home';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      /*{
        path: "/",
        element: <Home />
      },*/
      {
        path: "/foodDetails/:resId",
        element: <RestaurantMenuDetails />
      },
      {
        path: "/cartDetails",
        element: <CartDetails />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={appRouter}>

  </RouterProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
