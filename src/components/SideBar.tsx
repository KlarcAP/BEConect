import "./SideBar.scss";
import { HiHome } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import { LuMedal } from "react-icons/lu";
import { SiReaddotcv } from "react-icons/si"; 
import { MdOutlineForum } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
//imports da lib do react-icons para os icones do sideBar

export const SideBar = () => {
    return(
        <nav className="sidebar">
            <a className="sidebar-brand" href="/"><b>BE</b>Conect</a>
            
            <img className="photo-profile" src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="Foto de Perfil" />
           
            
            <div className="sidebar-collapse" id="sidebarside">
                <ul className="sidebar-side">
                    <li className="side-item">
                        <a className="side-link" href="/"><HiHome/> Home</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/Projetos"><FaCode/> Projetos</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/"><LuMedal/> Conquistas</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/"><SiReaddotcv/> Currículo</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/"><MdOutlineForum/> Comunidade</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/"><IoSettingsOutline/> Configurações</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
