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
import ElevesList from '../Private/ElevesList.jsx';
import Eleve from './Pages/Eleve.jsx';
import Presence from './Pages/Presences.jsx';






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
          path:"/elevesList",
          element:<ElevesList/>
        },
        {
          path:"/presence/:id_El",
          element:<Presence/>
        },
        {
          path:"/sortie/:id_El",
          element:<Sortie/>
        },
        {
          path:"/communique/:id_El",
          element:<Communique/>
        },
        {
          path:"/notifications/:id_El",
          element:<Notifications/>
        }
    ],
       
    },
  ]);  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);
