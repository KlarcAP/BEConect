import "./Header.scss";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" aria-label="Toggle navigation">
            <IoMenu />
          </button>
          <a className="navbar-brand" href="/">
            BE-CONECT
          </a>
        </div>
        <div className="navbar-collapse" id="bs-navbar-collapse">
          <ul>
            <li><a href="/workspace">Workspace</a></li>
            <li><a href="/projetos">Projetos</a></li>
            <li><a href="/forum">Fórum</a></li>
          </ul>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Pesquisar..." />
          <button type="submit">
            <FaSearch />
          </button>
        </div>
      </nav>
    </>
  );
};
