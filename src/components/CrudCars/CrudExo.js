import { useState } from 'react'


function CrudExo() {
  const [tabs, setTabs] = useState([
    { id: 0, nom: "Capuche" },
    { id: 1, nom: "Chaussette" },
    { id: 2, nom: "Gant" },
  ]);

  const handleDelete = (data) => {
    const newTabs = tabs.filter((item) => item.id !== data.id);
    setTabs(newTabs);
  };

  const [editItem, setEditItem] = useState();
  const handleUpdate = (data) => {
    const newTabs = tabs.map((item) =>
      item.id === data.id ? { ...item, nom: editItem } : item
    );
    setTabs(newTabs);
  };

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
