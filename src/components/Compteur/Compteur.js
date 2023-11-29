import { useState } from 'react'

function Compteur() {
    const [nombre, setNombre] = useState(0);
    const handleAdd = ()=> {setNombre(nombre+1);}
  return (
    <div>
      <p> Compteur : {nombre} </p>
      <button 
        className="btn btn-primary"
        onClick={handleAdd}
      >
        Ajouter
      </button>
    </div>
  )
}

export default Compteur


