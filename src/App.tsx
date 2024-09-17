import './App.css';
import { CardProject } from './componentes/CardProject';
import { TelaHome } from './componentes/TelaHome';
import TelaLogin  from './componentes/TelaLogin';
// import { TelaLogin } from './componentes/TelaLogin'; ESSE NÃO FUNCIONA.. APESAR DE SER O CORRETO

function App() {
  return (
    <div className="App">
      <TelaHome />
    </div>
  );
}

export default App;
