import { useState } from 'react'


function CrudExo() {
  // LISTE : RETURN
  // Afficher datas : {produits.map((data)=> <div key={data.id}> {data.nom} </div>)}
  // Ne pas oublier "key" sinon message  d'erreur
  // Stocker tableau et gérer avec useState : const [tabs, setTabs] = useState([]);
  // Ajouter les datas : [{ id: 0, nom: "item" }, { id: 1, nom: "item" }]
  const [tabs, setTabs] = useState([
    { id: 0, nom: "Capuche" },
    { id: 1, nom: "Chaussette" },
    { id: 2, nom: "Gant" },
  ]);

  // Gestion Delete : RETURN
  // Créer <button> avec attribut "onClick"
  // Ajouter "handleDelete" et envoyer "data" : onClick={() => handleDelete(data)}
  // Gestion Delete : LOGIQUE
  // Stocker handleDelete et récupérer props : const handleDelete =(data)=>{}
  // Créer nouveau tableau : const newTabs
  // Filtrer données si item.id !== data.id : tabs.filter((item)=>item.id !== data.id)
  // MAJ du nouveau tableau : settableau(newTabs)
  const handleDelete = (data) => {
    const newTabs = tabs.filter((item) => item.id !== data.id);
    setTabs(newTabs);
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
  // En ternaire, MAJ data si item.id === data.id : { ...item, nom: editItem } : item
  // Equivalent : if(item.id === data.id){return {...item, nom: editItem}} else {return item};
  const [editItem, setEditItem] = useState();
  const handleUpdate = (data) => {
    const newTabs = tabs.map((item) =>
      item.id === data.id ? { ...item, nom: editItem } : item
    );
    setTabs(newTabs);
  };

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
    const id = tabs.length;
    const nom = e.target.newProduct.value;
    const data = { id, nom };
    nom && setTabs([...tabs, data]);
  };

  return (
    <div>
      <h1>CRUD Exo</h1>
      {tabs.map((data) => (
        <div key={data.id}>
          {data.nom}
          <input
            defaultValue={editItem ? editItem : data.nom}
            onChange={(e) => setEditItem(e.target.value)}
            type="text"
            className="input-form"
          />
          <button
            onClick={() => handleUpdate(data)}
            className="btn btn-success"
          >
            Apply
          </button>
          <button
            onClick={() => {
              handleDelete(data);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input name="newProduct" className="input-form" />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
}

export default CrudExo
