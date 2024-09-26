import './loginpage.scss';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export function LoginPage(){
  return (
    <div className="logincontainer">
        {/*TÍTULO E ICONS A ESQUERDA DO CONTAINER COM DOIS LINKS*/}
        <div className="loginwelcome">
          <h2 className='beconectintro'>BEconect</h2>
          <img className='CuboLogoImg' src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3195615/code-sandbox-icon-md.png" alt="CuboLogo" /> 
          <div className='linksintro'>
            <p>Novo por aqui?</p> {/*LINK1 A FAZER*/}
            <a className="naopossuiconta" href="/">Cadastre-se</a>
        </div>
        </div>

        {/*LOGIN FORMS*/} 
        {/*TÍTULO E ICONS A ESQUERDA DO CONTAINER COM DOIS LINKS*/}
        <div className="loginforms">
        <h1 className='loginname'>Login</h1>

        <div className="input-group">
          <i className="fas fa-user"><FaUser/></i>
          <input type="text" placeholder="USUÁRIO" />
        </div>

        <div className="input-group">
          <i className="fas fa-lock"><FaLock /></i>
          <input type="password" placeholder="SENHA" />
        </div>

        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}  {/* Ignore, sintaxe do biome*/}
        <button className="entrar" >Entrar</button>

        <div className="or-text">ou</div>

        {/* biome-ignore lint/a11y/useButtonType: <explanation> */} {/* Ignore, sintaxe do biome*/}
        <button className="google">
          Entrar com Google
          <img className='GoogleImg' src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="Google" />
        </button>
        </div>
    </div>
  );
}