import React, { useState } from 'react'

function Home() {
  // Tab
  const [ tabs, setTabs ] = useState([
    { id : 0, nom : "item-1" }, 
    { id : 1, nom : "item-2" }, 
    { id : 2, nom : "item-3" }
  ]);

  // Create
  const handleSubmit = (e) => {
    const id = tabs.length;
    const nom = e.target.newItem.value;
    const newData = { id, nom};
    nom && setTabs([...tabs, newData])
    e.preventDefault();
  }

  // Edit
  const [updateItem,  setUpdateItem] = useState();
  const handleUpdate = (data) => {
    const newTabs = tabs.map((item) => 
      item.id === data.id ? { ...item, nom: updateItem} : item
    );
    setTabs(newTabs);
  }

  return (
    <div>
      <header className="element ">
        <h1>Crud</h1>
      { 
        tabs.map((data) => 
        <div key={data.id}> {data.nom} 
          <div>
            <input  
              className='input-form'
              defaultValue={ updateItem ? updateItem : data.nom}
              onChange={(e) => setUpdateItem(e.target.value)} 
            />
            <button 
              className='btn'
              onClick={() => handleUpdate(data)}
            >  
              Apply 
            </button>
          </div>
        </div>
        ) 
      }
      <form onSubmit={handleSubmit} className='center'>
        <input type="text" name="newItem" className='input-form'/>
        <button type="submit" className="btn"> 
          Add
        </button>
        
      </form>
      </header>
    </div>
  )
}

export default Home


  