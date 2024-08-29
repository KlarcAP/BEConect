export function Login(props){
    return(
        <>
        <form action="login_page" method="get">
            <label for="login_email"> Login: </label>
            <input type="email" name="login_email" id="login_email" placeholder="E-mail" />
            <label for="login_senha"> Senha: </label>
            <input type="senha" name="login_senha" id="login_senha" placeholder="Senha" />
        </form>

        <button type="submit" onClick={}></button>
        </>
    )
}