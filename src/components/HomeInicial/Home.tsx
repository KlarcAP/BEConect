export function HomePage(){
    return(
        <>
         <div className="container-home">
             <h1>Home</h1>
             <p>Bem-vindo ao Be-Conect!</p>
             <img src="https://www.beconect.com.br/img/logo-beconect.png" alt="Be-Conect"/>
             <div>
                 <a href="/projetos">Ver Projetos</a>
                 <a href="/cadastro">Cadastrar</a>
             </div>
         </div>
        </>
    )
}