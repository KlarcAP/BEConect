import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const HelpButton = () => {
  const handleClick = () => {
    // Adicione aqui a lógica para abrir um modal de ajuda, redirecionar para uma página de suporte, etc.
    alert('Como podemos te ajudar?');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all"
      aria-label="Ajuda"
      type="button"
    >
      <FaQuestionCircle size={24} />
    </button>
  );
};

export default HelpButton;
