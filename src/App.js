import './App.css';
// import Compteur from "./components/Compteur/Compteur";
import Handler from './components/CrudExport/Handler/Handler';
import CrudCars from './components/Crud/CrudCars';
import Crud from "./components/Crud/Crud";


function App() {
  return (
    <div className="App">
      {/* <Compteur /> */}
      <Handler />
      <CrudCars />
      <Crud/>
    </div>
  );
}

export default App;
