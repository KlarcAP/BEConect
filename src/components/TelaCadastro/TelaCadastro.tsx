import { useState } from 'react';
import './Cadastro.scss';
import { FaUser } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
export function Cadastro(){
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email, 
        username, 
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
    <div className="container">
      <div className="form-section">
        <h1>Novo Cadastro</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <i className="fas fa-envelope"><FaRegEnvelopeOpen /></i>
            <input 
              type="email" 
              placeholder="EMAIL" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} //Atualiza o estado do email
            />

          </div>

          <div className="input-group">
            <i className="fas fa-user"><FaUser/></i>
            <input 
              type="text" 
              placeholder="USUÁRIO" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} //Atualiza estado do nome de Usuário
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

          <button type="submit" className="entrar">Entrar</button>

          <div className="or-text">ou</div>

          <button type='submit' className="google">
            Entrar com Google
            <img src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="Google" />
          </button>

        </form>

      </div>

      <div className="welcome-section">
        <h2>SEJA BEM-VINDO!</h2>
        <img src={require("../../assets/image.png")} alt="Cube logo" />
        <a className="possuiconta" href="/Login">Já possui conta?</a>
      </div>
    </div>
  );
};
