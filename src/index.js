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
import { Home } from './pages/Home/Home';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUn } from './pages/SignUp/SignUp';
import {
  QueryClient,
  QueryClientProvider
  
} from '@tanstack/react-query'
import { CardUserInfo } from './pages/CardUserInfo/CardUserInfo';
import { store } from './redux/store';
import { Provider } from 'react-redux';


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    
    children: [

      {
        index: 'true',
        element: <Home/>
      },
      {
        path: 'userinfo',
        element: <CardUserInfo/>
       },
       {
        path: 'signin',
        element: <SignIn/>
       },
       {
        path: 'signup',
        element: <SignUn/>
       },
    
    {
      path: "products",
      element: <Products/>
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
    <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

