import { useState } from "react";

function CrudCars() {
  const [cars, setCars] = useState([
    { id: 1, nom: "Peugeot" },
    { id: 2, nom: "Tesla" },
    { id: 3, nom: "Dacia" },
  ]);
  // DELETE
  const handleDelete = (id)=>{
    const newCars = cars.filter((data)=>data.id !== id);
    setCars(newCars);
  }
  // CHOICE
  const handleChoice = (nom)=>{
    alert(`Vous avez choisi : ${nom}`)

  }
  return (
    <div>
      <h1> CRUD CARS FULL</h1>
      <ul>
        {cars.map((data) => (
          <div key={data.id}>
            {data.nom}
            <button
              onClick={() => handleDelete(data.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button
              onClick={() => handleChoice(data.nom)}
              className="btn btn-primary"
            >
              See
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CrudCars
