import ListCars from '../ListCars/ListCars.js';
import EditCar from '../EditCar/EditCar.js';
import DeleteCar from '../DeleteCar/DeleteCar.js';
import ChoiceCar from '../ChoiceCar/ChoiceCar.js';
import AddCar from '../AddCar/AddCar.js';

function TraitementCar() {
  const [cars, setCars] = ListCars();
  const handleAdd = (data) => {
    setCars([...cars, data]);
  };

  return (
    <div>
      <h1>CRUD CARS</h1>
      <ul>
        {cars.map((data) => (
          <div key={data.id}>
            {data.nom}
            <EditCar
              data={data}
              cars={cars}
              setCars={setCars}
            />
            <DeleteCar
              id={data.id}
              nom={data.nom}
              cars={cars}
              setCars={setCars}
            />
            <ChoiceCar nom={data.nom} />
          </div>
        ))}
      </ul>
      <AddCar handleAdd={handleAdd} />
    </div>
  );
}

export default TraitementCar;
