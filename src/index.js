import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './layout';
import { Products } from './pages/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    
    children: [
    
    {
      path: "products",
      element: <Products/>,
    },
     ]
   
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

