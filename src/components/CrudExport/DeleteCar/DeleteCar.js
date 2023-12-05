function DeleteCar({id, cars, setCars}) {
  const handleDelete = ()=>{
    const confim = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cet élément ?"
    );
    if (confim) {
      const newCars = cars.filter((data) => data.id !== id);
      setCars(newCars);
    }
  }

  return (
    <div className="container">
      <button 
        onClick={handleDelete}
        className="btn btn-danger"
      > 
        Delete 
      </button>
    </div>
  );
}

export default DeleteCar;
