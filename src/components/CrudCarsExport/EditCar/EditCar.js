import { useState } from 'react'

function EditCar({ data, cars, setCars }) {
  const [updateNom, setUpdateNom] = useState(data.nom);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {setIsEditing(true);};

  const handleUpdate = () => {
    const newCars = cars.map((item) => {
      if (item.id === data.id) {
        return { ...item, nom: updateNom };
      }
      return item;
    });
    setCars(newCars);
    setIsEditing(false);
  };

  return (
    <div className="container">
      {isEditing ? (
        <div className="container">
          <input
            type="text"
            value={updateNom}
            onChange={(e) => setUpdateNom(e.target.value)}
            className="input-form"
          />
          <button
            type="button"
            onClick={handleUpdate}
            className="btn btn-success"
          >
            Ok
          </button>
        </div>
      ) : (
        <div className="container">
          <button
            type="button"
            onClick={handleEditClick}
            className="btn btn-warning"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default EditCar
