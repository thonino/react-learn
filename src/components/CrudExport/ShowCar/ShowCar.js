function ShowCar({ nom }) {
  const seeCar = () => {
    alert(`Vous avez choisi ${nom}`);
  };
  return (
    <button 
      onClick={seeCar} 
      className="btn btn-primary"
    >
      See
    </button>
  );
}

export default ShowCar;
