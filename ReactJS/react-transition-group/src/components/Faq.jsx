import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Faq.css'; // Arquivo de estilo

const Faq = () => {
  return (
    <div className="faq">
      <h2>Pergunta Frequente</h2>
      <p>Essa é uma resposta animada!</p>
    </div>
  );
};

const App = () => {
  const [mostrar_a, setMostrarA] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrarA(!mostrar_a)}>
        {mostrar_a ? 'Esconder FAQ' : 'Mostrar FAQ'}
      </button>

      <CSSTransition
        in={mostrar_a}
        timeout={500} // Duração da animação em milissegundos
        classNames="faq" // Prefixo para as classes de transição
        unmountOnExit
      >
        <Faq />
      </CSSTransition>
    </div>
  );
};

export default App;



// import React, { useState } from 'react';
// import './Faq.css'; // Arquivo de estilo

// const FaqItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => setIsOpen(!isOpen);

//   return (
//     <div className="faq-item">
//       <button className="question" onClick={toggleOpen}>
//         {question}
//       </button>
//       <div className={`answer ${isOpen ? 'open' : ''}`}>
//         {answer}
//       </div>
//     </div>
//   );
// };

// const Faq = () => {
//   return (
//     <div className="faq">
//       <FaqItem question="O que é React?" answer="React é uma biblioteca JavaScript para construir interfaces de usuário." />
//       <FaqItem question="Como usar o useState?" answer="O useState é um Hook que permite adicionar estado a componentes funcionais." />
//     </div>
//   );
// };

// export default Faq;
