import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CrudCars2() {
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
  };

  // CREATE
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const nom = e.target.elements.newCar.value.trim();
    const data = { id, nom };
    if (nom) {
      setCars([...cars, data]);
    }
  };

  // EDIT ternaire
  const [editCar, setEditCar] = useState("");
  const handleUpdate = (data) => {
    const newCars = cars.map((item) => 
      item.id === data.id ? { ...item, nom: editCar } : item
    );
    setCars(newCars);
  };

  // EDIT Condition IF et ELSE
  // const [editCar, setEditCar] = useState("");
  // const handleUpdate = (data) => {
  //   const newCars = cars.map((item) => {
  //     if (item.id === data.id){return {...item, nom: editCar}}
  //     else {return item}; // ou simplement : return item;
  //   });
  //   setCars(newCars);
  // };

  return (
    <div>
      <h1>CRUD CARS FULL</h1>
      <ul>
        {cars.map((data) => (
          <div key={data.id}>
            {data.nom} 
            {/* ---- EDIT ---- */}
            <span>
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
          <input className="input-form" name="newCar" />
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </form>
      </ul>
    </div>
  );
}

export default CrudCars2;
