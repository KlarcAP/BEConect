import { SideBar } from "./SideBar";
import "./Projetos.scss";

export function Projetos(){
    return(
        <div className="container-projetos">
            <SideBar />
            <div className="content">
                <h1>Projetos</h1>
                <h4>Por enquanto não há projetos aqui...</h4>
            </div>
        </div>
    )
}