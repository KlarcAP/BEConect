import './styles/GlobalStyles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import { LoginPage } from './components/TelaLogin/LoginPage';
import { Projetos } from './components/HomePrincipal/Projetos'
import { Cadastro } from './components/TelaCadastro/TelaCadastro'
import  ErrorPage from './components/HomePrincipal/ErrorPage';
import { ForumService } from './components/TelaComunidade/Comunidade';
 
const router = createBrowserRouter([
      {
      path: "/",
      element: <Cadastro />,
      //Página de erro
      errorElement: <ErrorPage/>
    },
    {
      path: "/Login",
      element: <LoginPage />
    },
    {
      path: "/Projetos",
      element: <Projetos />
    },
    {
      path: "/comunidade",
      element: <ForumService />
    }
])





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
