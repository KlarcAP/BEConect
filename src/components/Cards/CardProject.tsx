import React from 'react';
import './cardProject.scss';

type CardProjectProps = {
  imageUrl: string;
  title: string;
  publisher: string;
  playerCount: number;
  onOpen: () => void;
};

const CardProject: React.FC<CardProjectProps> = ({ imageUrl, title, publisher, playerCount, onOpen }) => {
  return (
    <div className="card-container">
      <div className="image-section">
        <img className="game-image" src={imageUrl} alt={title} />
      </div>
      <div className="info-section">
        <h2 className="game-title">{title}</h2>
        <p className="publisher">{publisher}</p>
        <div className="player-info">
          <div className="player-icons">
            <div className="player-icon" />
            <div className="player-icon" />
            <div className="player-icon" />
          </div>
          <p className="player-count">{playerCount} participantes</p>
        </div>
        <button type='button' className="open-button" onClick={onOpen}>
          Ver
        </button>
      </div>
    </div>
  );
};

export default CardProject;