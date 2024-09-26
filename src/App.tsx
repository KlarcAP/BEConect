import './styles/GlobalStyles.css';
import { SideBar } from './components/SideBar';
import { Cadastro } from './components/TelaCadastro/TelaCadastro';
import { LoginPage } from './components/TelaLogin/LoginPage';
import { Projetos } from './components/HomePrincipal/Projetos';

function App() {
  return (
    <div className="App">
      <Projetos />
    </div>
  );
}

export default App;
