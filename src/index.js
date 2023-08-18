import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Farmers from "./routes/Farmers";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Payments from "./components/Payments";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { GoogleOAuthProvider } from '@react-oauth/google';

const store = configureStore({
  reducer: rootReducer
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/farmers",
    element: <Farmers />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/payments",
    element: <Payments />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="414874523101-0tvbk3ksinc53qr008f5gddlv766ivcb.apps.googleusercontent.com">
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();