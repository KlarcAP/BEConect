import './styles/GlobalStyles.css';
import { SideBar } from './components/SideBar/SideBar';
import { Cadastro } from './components/TelaCadastro/TelaCadastro';
import { LoginPage } from './components/TelaLogin/LoginPage';
import { Projetos } from './components/Projetos/Projetos';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Projetos />
    </div>
  );
}

export default App;
