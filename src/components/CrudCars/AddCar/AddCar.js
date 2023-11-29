import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddCar({handleAdd}) {
  const [newCar, setNewCar] = useState("");

  const handleChange = (e) => {
    setNewCar(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const id = uuidv4();
    const nom = newCar.trim();
    if(nom){
      handleAdd({id, nom});
      setNewCar("");
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de la voiture"
          value={newCar}
          onChange={handleChange}
          className="input-form"
        />{" "}
        <button type="submit" className="btn btn-success">
          {" "}
          Ajouter
        </button>
      </form>
    </div>
  );
}
export default AddCar;