import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello from react router!!</div>,
  },
  {
    path: '/about',
    element: <div>I am in the about page</div>,
  },
  {
    path: '/contact',
    element: <div>Call me right now</div>,
  },
  {
    path: '/fokira',
    element: <App></App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
