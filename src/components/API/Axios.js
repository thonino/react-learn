// installer axios "npm install axios" et Importez 
import axios from "axios"; 
import React, { useState, useEffect } from "react";


function Axios() {
  const [capitales, setCapitales] = useState([]);
  const [formData, setFormData] = useState(
      {name: "", population: "", continent: "", area: ""}
    );

  useEffect(() => {
    axios
      .get("/data/capitales.json")
      .then((response) => setCapitales(response.data))
      .catch((error) =>
        console.error("Erreur lors du chargement des données : ", error)
      );
  }, []);

  const handleDelete = (capitale) => {
    const newCapitales = capitales.filter((item) => item.id !== capitale.id);
    setCapitales(newCapitales);
  };

  const handleReset = () => {
    setFormData({name: "",population: "",continent: "",area: "",});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = capitales.length;
    const name = e.target.name.value.trim();
    const population = e.target.population.value.trim();
    const continent = e.target.continent.value.trim();
    const area = e.target.area.value.trim();
    const newData = { id, name, population, continent, area };
    const newCapitales = [...capitales, newData];
    setCapitales(newCapitales);
    handleReset();
    
  };

  // inverser par ordre décroissant d'ID
  const reverseCapitales = capitales.slice().sort((a, b) => b.id - a.id);

  return (
    <div className="App">
      <h1>API Locale : AXIOS</h1>
      <p className="text-green-500">Ceci est un texte Tailwind en bleu.</p>
      <p className="text-red-500">Ceci est un texte Tailwind en rouge.</p>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-form"
            required
            value={formData.name}
            onChange={setFormData}
          />
          <input
            type="text"
            name="population"
            placeholder="Population"
            className="input-form"
            required
            value={formData.population}
            onChange={setFormData}
          />
          <input
            type="text"
            name="continent"
            placeholder="Continent"
            className="input-form"
            required
            value={formData.continent}
            onChange={setFormData}
          />
          <input
            type="text"
            name="area"
            placeholder="Area"
            className="input-form"
            required
            value={formData.area}
            onChange={setFormData}
          />
          <button type="submit" className="btn-success">
            Ajouter
          </button>
        </form>
        <div className="wrapContainer">
          <div className="wrap1">
            {reverseCapitales.map((capitale) => (
              <div className="wrap2">
                  <p key={capitale.id}>
                    <strong>{capitale.name}</strong> ({capitale.continent})
                    <p>Population : {capitale.population}</p>
                    <p>Superficie : {capitale.area} km²</p>
                    <button
                      onClick={() => handleDelete(capitale)}
                      className="btn-danger"
                    >
                      Del
                    </button>
                  </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Axios;
