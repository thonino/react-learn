// Add
import { useState } from 'react';

function Add({tabs, setTabs}) {
  const [newItem, setNewItem] = useState("");

const handleChange = (e)=> {
  setNewItem(e.target.value);
}

  const handleSubmit = (e)=>{
    e.preventDefault();
    const id = tabs.length;
    const nom =  newItem.trim();
    const newData= {id, nom};
    if (nom){
      setTabs([...tabs, newData]);
      setNewItem("");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez un nouveau nom"
          value={newItem}
          onChange={handleChange}
          className="input-form"
        />{" "}
        <button type="submit" className="btn btn-success">
          {" "}
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
