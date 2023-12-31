import { useState } from "react";

function CrudCars() {
  const [cars, setCars] = useState([
    { id: 1, nom: "Peugeot" },
    { id: 2, nom: "Tesla" },
    { id: 3, nom: "Dacia" },
  ]);

  // DELETE
  const handleDelete = (id) => {
    const newCars = cars.filter((data) => data.id !== id);
    setCars(newCars);
  };

  // CHOICE
  const handleChoice = (nom) => {
    alert(`Vous avez choisi : ${nom}`);
  }

  // CREATE
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = cars.length+1;
    const nom = (e.target.newCar.value).trim();
    const data = { id, nom }
    if (nom) { setCars([...cars, data])}
  };

  // EDIT
  // Gérer affichage bouton "edit"
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = (id) => {setIsEditing(id);}
  
  const [editCar, setEditCar] = useState("");

  const handleUpdate = (data) => {
    const newCars = cars.map((item) => {
      if (item.id === data.id) {
        return { ...item, nom: editCar };
      }
      return item;
    });
    setCars(newCars);
    setIsEditing(false);
  }

  return (
    <div>
      <h1>CRUD CARS</h1>
      <ul>
        {cars.map((data) => (
          <div key={data.id}>
            {data.nom}{" "}
            {/* ---- EDIT ---- */}
            <span>
            {/* Ternaire pour gérer bouton "edit"*/}
            {data.id === isEditing ? (
                <div className="container">
                  <input
                    className="input-form"
                    defaultValue={editCar ? editCar : data.nom}
                    onChange={(e) => setEditCar(e.target.value)}
                  />
                  <button
                    onClick={() => handleUpdate(data)}
                    className="btn btn-success"
                  >
                    Apply
                  </button>
                </div>
            ) : (
            <button
              type="button"
              onClick={() => handleEditClick(data.id)}
              className="btn btn-warning"
            >
              Edit
            </button>
            )} 
            </span>
            {/* ---- DELETE ---- */}
            <button
              onClick={() => handleDelete(data.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
            {/* ---- CHOICE ---- */}
            <button
              onClick={() => handleChoice(data.nom)}
              className="btn btn-primary"
            >
              See
            </button>
          </div>
        ))}
        {/* ---- CREATE ---- */}
        <form onSubmit={handleSubmit}>
          <input
            className="input-form"
            name="newCar"
          />
          <button
            className="btn btn-success"
            type="submit"
          >
            Add
          </button>
        </form>
      </ul>
    </div>
  );
}

export default CrudCars;
