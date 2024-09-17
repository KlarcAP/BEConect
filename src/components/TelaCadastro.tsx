import './Cadastro.scss';
import { FaUser } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
export function Cadastro(){
  return (
    <div className="container">
      <div className="form-section">
        <h1>Novo Cadastro</h1>

        <div className="input-group">
          <i className="fas fa-envelope"><FaRegEnvelopeOpen /></i>
          <input type="email" placeholder="EMAIL" />
        </div>

        <div className="input-group">
          <i className="fas fa-user"><FaUser/></i>
          <input type="text" placeholder="USUÁRIO" />
        </div>

        <div className="input-group">
          <i className="fas fa-lock"><FaLock /></i>
          <input type="password" placeholder="SENHA" />
        </div>

        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}  {/* Ignore, sintaxe do biome*/}
        <button className="entrar">Entrar</button>

        <div className="or-text">ou</div>

        {/* biome-ignore lint/a11y/useButtonType: <explanation> */} {/* Ignore, sintaxe do biome*/}
        <button className="google">
          Entrar com Google
          <img src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="Google" />
        </button>
      </div>

      <div className="welcome-section">
        <h2>SEJA BEM-VINDO!</h2>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3195615/code-sandbox-icon-md.png" alt="Cube logo" />
        <p>Já possui conta?</p>
      </div>
    </div>
  );
};
