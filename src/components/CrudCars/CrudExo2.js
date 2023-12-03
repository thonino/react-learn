import { useState } from 'react'

function CrudExo2() {
  // LISTE : RETURN
  // Afficher datas : {produits.map((data)=> <div key={data.id}> {data.nom} </div>)}
  // Ne pas oublier "key" sinon message  d'erreur
  // Stocker tableau et gérer avec useState : const [tabs, setTabs] = useState([]);
  // Ajouter les datas : [{ id: 0, nom: "item" }, { id: 1, nom: "item" }]
  const [produits, setProduits] = useState([
    { id: 0, nom: "item-1" },
    { id: 1, nom: "item-2" },
    { id: 2, nom: "item-3" },
  ]);

  // Gestion Submit : RETURN
  // Créer <form> avec attribut "onSubmit" / <button type=submit"> et <input  name="newItem">
  // Ajouter "handleSubmit" : onSubmit={handleSubmit}
  // Gestion Edit : LOGIQUE
  // Stocker handelSubmit et ajouter (event) : const handleSubmit = (e) => {}
  // Empecher le chargemement de la page pour gérer la MAJ : e.preventDefault();
  // Stocker id = tabs.length et récupérer nom = e.target.newItem.value;
  // Stocker nouvel objet : data = { id, nom };
  // Récupérer datas du tableau et ajouter newItem : nom && setTabs([...tabs, data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = produits.length;
    const nom = e.target.newItem.value;
    const data = { id, nom };
    nom && setProduits([...produits, data]);
  };

  // Gestion Edit : RETURN
  // Créer <button> avec attribut "onClick"
  // Ajouter "handleUpdate" et envoyer "data" : onClick={() => handleUpdate(data)}
  // Créer <input> avec attribut "defaultValue" et "onChange"
  // ternaire "editItem" ou "data.nom" : defaultValue={editItem ? editItem : data.nom}
  // Ajouter (event) pour MAJ item avec : onChange={(e) => setEditItem(e.target.value)}
  // Gestion Edit : LOGIQUE
  // Stocker useState pour gérer "editItem" : const [editItem, setEditItem] = useState();
  // Stocker handleUpdateet récupérer props : const handleUpdate=(data)=>{}
  // Créer nouveau tableau et récupérer les données item : const newTabs = tabs.map((item)=>)
  // En ternaire, Modifier si : item.id === data.id ? { ...item, nom: editItem } : item
  // Equivalent : if(item.id === data.id){return {...item, nom: editItem}} else {return item};
  // MAJ du tableau : setTabs(newTabs);
  const [editItem, setEditItem] = useState();
  const handleUpdate = (data) => {
    const newProduits = produits.map((item) =>
      item.id === data.id ? { ...item, nom: editItem } : item
    );
    setProduits(newProduits);
  };

  // Gestion Delete : RETURN
  // Créer <button> avec attribut "onClick"
  // Ajouter "handleDelete" et envoyer "data" : onClick={() => handleDelete(data)}
  // Gestion Delete : LOGIQUE
  // Stocker handleDelete et récupérer props : const handleDelete =(data)=>{}
  // Créer nouveau tableau : const newTabs
  // Filtrer données si item.id !== data.id : tabs.filter((item)=>item.id !== data.id)
  // MAJ du nouveau tableau : setTabs(newTabs)
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
      <h1> Crud Exo 2</h1>
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
        <input type="text" name="newItem" className="input-form"></input>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
}

export default CrudExo2;


