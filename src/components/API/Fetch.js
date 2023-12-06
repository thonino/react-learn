import { useState, useEffect } from "react";

function Capitales() {
  const [capitales, setCapitales] = useState([]);

  useEffect(() => {
    fetch("/data/capitales.json") 
      .then((response) => response.json())
      .then((data) => setCapitales(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des données : ", error)
      );
  }, []);

  return (
    <div className="App">
      <h1>Capitales FETCH</h1>
      <ul>
        {capitales.map((capitale) => (
          <p key={capitale.id}>
            <strong>{capitale.name}</strong> ({capitale.continent})
            <p>Population : {capitale.population} habitants</p>
            <p>Superficie : {capitale.area} km²</p>
            <br/>
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Capitales;
