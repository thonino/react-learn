import { useState } from 'react'

function CrudExo2() {

  const [produits, setProduits] = useState([
    { id: 0, nom: "item-1" },
    { id: 1, nom: "item-2" },
    { id: 2, nom: "item-3" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = produits.length;
    const nom = e.target.newItem.value;
    const data = { id, nom };
    nom && setProduits([...produits, data]);
  };

  const [editItem, setEditItem] = useState();
  const handleUpdate = (data) => {
    const newProduits = produits.map((item) =>
      item.id === data.id ? { ...item, nom: editItem } : item
    );
    setProduits(newProduits);
  };

  const handleDelete = (data) =>{
    const newProduits = produits.filter((item)=> 
      item.id !== data.id)
      setProduits(newProduits);
  }

  const handleChoice = (data) =>{
    alert(`Vous avez choisi : ${data.nom}`)
  }

  return (
    <div>
      <h1> CRUD</h1>
      {produits.map((data) => (
        <div key={data.id}>
          {data.nom}
          <input
            defaultValue={editItem ? editItem : data.nom}
            onChange={(e) => setEditItem(e.target.value)}
            className="input-form"
          />
          <button
            onClick={() => handleUpdate(data)}
            className="btn btn-success"
          >
            Apply
          </button>
          <button 
            onClick={() =>handleDelete(data)}
            className="btn btn-danger"
          >
            Del
          </button>
          <button 
            onClick={() =>handleChoice(data)}
            className="btn btn-primary"
          >
            See
          </button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="newItem" className="input-form"/>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
}

export default CrudExo2;


