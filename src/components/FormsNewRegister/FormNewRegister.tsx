import React from 'react';
import { useState } from 'react';
import styles from './formNewRegisterStyle.module.scss'; // Importando o SCSS

const questions = [
  {
    id: 1,
    question: "Quais tecnologias você tem afinidade?",
    type: "text",
    placeholder: "Ex: React, Node.js, Docker"
  },
  {
    id: 2,
    question: "Qual sua área de interesse no mercado?",
    type: "text",
    placeholder: "Ex: Desenvolvimento Web, IA, DevOps"
  },
  {
    id: 3,
    question: "Quanto tempo de experiência você tem?",
    type: "text",
    placeholder: "Ex: Menos de 1 ano, 1-3 anos, mais de 5 anos"
  },
  {
    id: 4,
    question: "Qual a sua idade?",
    type: "number",
    placeholder: "Digite sua idade"
  },
];

const FormStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const answer = formData.get('answer') as string;

    setResponses((prev) => ({
      ...prev,
      [questions[currentStep].question]: answer
    }));

    setCurrentStep((prev) => prev + 1);
  };

  const currentQuestion = questions[currentStep];

  return (
    <div className={styles['form-container']}>
      {currentStep < questions.length ? (
        <form onSubmit={handleNext}>
          <h2>{currentQuestion.question}</h2>
          <input
            type={currentQuestion.type}
            name="answer"
            placeholder={currentQuestion.placeholder}
            required
          />
          <button type="submit">Próximo</button>
        </form>
      ) : (
        <div className={styles['response-summary']}>
          <h2>Obrigado por responder!</h2>
          <ul>
            {Object.entries(responses).map(([question, response], index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={index}>{question}: {response}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormStepper;
