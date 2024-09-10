import Home from '../telaLogin/Home'

export function Cadastro() {
    return (
        <div id="Cad" className="tela_Cad">
            <div className="container-info">
                <h2>Novo cadastro</h2>
                <input className="cad-email" type="emai" placeholder="E-mail"></input><br></br>
                <input className="cad-user" type="text" placeholder="Usuário"></input><br></br>
                <input className="cad-senha" type="password" placeholder="Senha"></input><br></br>

                <button className="cad-buton" type="submit" onClick={(Home) = {}}>Entrar</button><br></br>
                <a href="https://accounts.google.com/signin"><button className="cad-buton" type="submit">Entrar com Google</button></a>


            </div>
            <div className="container-welcome">
                <h1>SEJA</h1>
                <h1>BEM - VINDO!</h1>
                <a href="/Login" target="_self">Já possui conta?</a>
            </div>
        </div>
    )
}