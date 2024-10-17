import { setDefaultResultOrder } from 'dns';
import './loginpage.scss';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';

export function LoginPage(){
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        user, 
        password 
      }),
    });

    if (response.ok) {
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Falha ao realizar o cadastro. Tente novamente.');
    }
  }
  return (
    <div className="logincontainer">
        
      <div className="loginwelcome">
        <h2>BEconect</h2>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3195615/code-sandbox-icon-md.png" alt="CuboLogo" /> 
        <div className='linksintro'>
          <p>Novo por aqui?</p> {/*LINK1 A FAZER*/}
          <a className="naopossuiconta" href="/">Cadastre-se</a>
        </div>
      </div>

      <div className='loginforms'>
        <form onSubmit={handleSubmit}>
          <h1 className='loginname'>Login</h1>

          <div className="input-group">
            <i className="fas fa-user"><FaUser/></i>
            <input 
              type="text" 
              placeholder="USUÁRIO"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

          </div>

          <div className="input-group">
            <i className="fas fa-lock"><FaLock /></i>
            <input 
              type="password" 
              placeholder="SENHA" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="entrar" >Entrar</button>

          <div className="or-text">ou</div>
          
            <button className="google">
              Entrar com Google
              <img className='GoogleImg' src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="Google" />
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}