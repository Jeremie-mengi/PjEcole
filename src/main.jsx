import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import './assets/css/main.css'
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/bootstrap/js/bootstrap.js'
import Login from './Components/Login.jsx';
import Acceuil from './Components/Acceuil.jsx';
import Eleve from './Components/Eleve.jsx';
import RegisterForm from './Components/RegisterForm.jsx';



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Acceuil/>
        },
        {
          path:"/Login",
          element: <Login/>
        },
        {
          path:"/Register",
          element: <RegisterForm/>
        },
        {
          path:"/Eleve",
          element:<Eleve/>
        }   
    ],
       
    },
  ]);  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);
