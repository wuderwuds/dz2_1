import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './layout';
import { Products } from './pages/Products/Products';
import { PageProduct } from './pages/PageProduct/PageProduct';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    
    children: [
    
    {
      path: "products",
      element: <Products/>,
    },

    {
      path: "products/:idOfProd",
      element: <PageProduct/>
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

