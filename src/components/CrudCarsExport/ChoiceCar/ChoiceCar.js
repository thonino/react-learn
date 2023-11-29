function ChoiceCar({ nom }) {
  const choisirCar = () => {
    alert(`Vous avez choisi ${nom}`);
  };
  return (
    <button 
      onClick={choisirCar} 
      className="btn btn-primary"
    >
      See
    </button>
  );
}

export default ChoiceCar
