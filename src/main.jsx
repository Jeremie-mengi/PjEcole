import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import './assets/css/main.css'
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/bootstrap/js/bootstrap.js'
import Login from './Components/Login.jsx';
import Acceuil from './Components/Acceuil.jsx';
import RegisterForm from './Components/RegisterForm.jsx';
import Eleve from './Pages/Eleve.jsx';
import ElevesList from '../Private/ElevesList.jsx';





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
          path:"/eleve",
          element:<Eleve/>
        },
        {
          path:"/eleve",
          element:<Eleve/>
        },
        {
          path:"/elevesList",
          element:<ElevesList/>
        }
    ],
       
    },
  ]);  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);
