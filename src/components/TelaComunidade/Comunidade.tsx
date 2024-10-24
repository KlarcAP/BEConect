import './comunity.scss';
import { SideBar } from "../SideBar/SideBar";


export function ForumService(){
    return(
        <div className="container-forum-service">
            <SideBar />
            <div className="content">
                <h1>Comunidade</h1>
                <div className="search-box">
                    <input type="text" className="input-search" placeholder="Qual sua dúvida?"/>
                    <button type='submit' className="btn-ask-question">Faça uma pergunta.</button>
                </div>
            </div>
        </div>
    )
}