import './styles/GlobalStyles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import { LoginPage } from './components/TelaLogin/LoginPage';
import { Projetos } from './components/Projetos/Projetos'
import { Cadastro } from './components/TelaCadastro/TelaCadastro'
import  ErrorPage from './components/ErrorPage';
import { ForumService } from './components/TelaComunidade/Comunidade';
import FormStepper  from './components/FormsNewRegister/FirstForm';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
    //Página de erro
    errorElement: <ErrorPage/>
  },
  {
    path: "/Login/formSteeper",
    element: <FormStepper />
  },
  {
    path: "/Login",
    element: <LoginPage />
  },
  {
    path: "/projetos",
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
