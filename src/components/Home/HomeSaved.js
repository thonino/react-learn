import React, { useState, useRef } from 'react'

function Home() {

  // Show :
  const [tab, setTab] = useState([
    { id: 0, name: 'Salon'},
    { id: 1, name: 'Cuisine'},
    { id: 2, name: 'Chambre'},
  ])

  // Ref pour reset input 
  const rsInput = useRef(null);

  // Add :
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = tab.length;
    const name = e.target.new.value;
    setTab([...tab, { id , name}])

    // Reset input 
  if(rsInput.current){rsInput.current.value = '';}
  }

  // Update :
  const handleUpdate = (e, id) => {
    e.preventDefault();
    const name = e.target.update.value;
    const newTab = tab.map(item =>
      item.id === id ? { name } : item
    );
    setTab(newTab);
  }
  // Delete :
  const handleDelete = (id) => {
    const newTab = tab.filter((item) => item.id !== id);
    setTab(newTab);
  }
  return (
    <div className='center'>
      <h1>Liste pieces</h1>
        {tab.map((data)=>
      <div key={data.id} className='mt d-flex'> 
        {data.name} 
        {/* Update && Delete */}
        <form onSubmit={(e) => handleUpdate(e, data.id)}>
          <input 
            className='input-form ms' 
            defaultValue={data.name}
            name="update"
          />
          <button className='btn' type="submit">
            Apply
          </button>
          <button 
            className='btn-red ms' 
            onClick={()=>handleDelete(data.id)}
          > 
            Remove
          </button>
        </form>
      </div>
      )}
      <form onSubmit={handleSubmit}>
        <h1> Ajouter Piece </h1>
        <input 
          type="text" 
          className='input-form' 
          name="new" 
          ref={rsInput}
        />
        <button type="submit" className='btn'> Add </button>
      </form>
    </div>
  )
}

export default Home