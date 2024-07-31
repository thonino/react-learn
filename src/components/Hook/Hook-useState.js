import React, { useState } from 'react';

// Permet de gérer des données qui changent dans un composant, 
// comme le contenu d'un formulaire ou l'état d'un composant. 
// Exemple : Gestion d'un compteur dans un composant.

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={
        () => setCount(count + 1)
        }
      >
        Incrémenter
      </button>
    </div>
  );
}


export default Counter;