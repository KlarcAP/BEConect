import CardProject from "../Cards/CardProject";
import { SideBar } from "../SideBar";
import "./Projetos.scss";

export function Projetos(){
    return(
        <div className="container-projetos">
            <SideBar />
            <div className="content">
                <h1>Projetos</h1>
                <CardProject />
            </div>
        </div>
    )
}