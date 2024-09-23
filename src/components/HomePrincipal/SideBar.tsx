import { Dropdown } from "react-bootstrap";
import "./SideBar.scss";

export const SideBar = () => {
    return(
        <nav className="sidebar">
            <a className="sidebar-brand" href="/"><b>BE</b>Conect</a>
            
            <img className="photo-profile" src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="Foto de Perfil" />
           
            
            <div className="sidebar-collapse" id="sidebarside">
                <ul className="sidebar-side">
                    <li className="side-item">
                        <a className="side-link" href="/">Home</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/">Projetos</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/">Conquistas</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/">Currículo</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/">Fórum</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/">Configurações</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
