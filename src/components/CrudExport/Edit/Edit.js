// Edit
import { useState } from 'react'

function Edit({ data, tabs, setTabs }) {
  const [updateItem, setUpdateItem] = useState(data.nom);

  const handleUpdate = () => {
    const newTabs = tabs.map((item) => {
      if (item.id === data.id) {
        return { ...item, nom: updateItem, };
      }
      return item;
    });
    setTabs(newTabs);
  };

  return (
    <div className="container">
        <input
          type="text"
          value={updateItem}
          onChange={(e) => setUpdateItem(e.target.value)}
          className="input-form"
        />
        <button
          type="button"
          onClick={handleUpdate}
          className="btn btn-success"
        >
          Apply
      </button>
    </div>
  );
}

export default Edit;