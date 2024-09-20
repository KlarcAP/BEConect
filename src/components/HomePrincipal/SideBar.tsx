import "./src/index.css";

export const SideBar = () => {
    return(
        <nav className="sidebar sidebar-expand-lg sidebar-light bg-light">
            <a className="sidebar-brand" href="/">BE-CONECT</a>
            <button className="sidebar-toggler" type="button" data-toggle="collapse" data-target="#sidebarside" aria-controls="sidebarside" aria-expanded="false" aria-label="Toggle sideigation">
                <span className="sidebar-toggler-icon">teste</span>
            </button>
            <div className="collapse sidebar-collapse" id="sidebarside">
                <ul className="sidebar-side ml-auto">
                    <li className="side-item">
                        <a className="side-link" href="/">Home</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/">Projetos</a>
                    </li>
                    <li className="side-item">
                        <a className="side-link" href="/">Conquistas</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
} 