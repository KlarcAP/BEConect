import { HiOutlineArrowRight } from "react-icons/hi";
import './cardProject.scss'

const CardProject = () => {
  return (
    <div className="card-container">
      <header className="title-project">
        <h2>Nome do Projeto</h2>

        <button className="view-project-btn" type="submit">
          Ver Projeto <HiOutlineArrowRight />
        </button>
      </header>

    </div>
  );
}

export default CardProject;