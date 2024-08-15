import React, { useState, useRef } from 'react'

function Home() {
  // Show
  const [tabs, setTabs] = useState([
    {id : 0, name : 'Geo'},
    {id : 1, name : 'Maths'},
    {id : 2, name : 'Eco'},
  ])

  // Reset Input
  const resetInput = useRef(null);

  // Add
  const handleAdd = (e) => {
    e.preventDefault();
    const id = tabs.strength;
    const name = e.target.new.value;
    setTabs([...tabs , { id, name}]);
    if(resetInput.current){resetInput.current.value = ''}
  }

  // Update
  const handleUpdate = (e, id) => {
    e.preventDefault();
    const name = e.target.update.value;
    const newTabs = tabs.map((item) => 
      item.id === id ? { id, name } : item
    )
    setTabs(newTabs);
  }
  
  // Delete
  const handleDelete = (id) => {
    const newTabs = tabs.filter(item => 
      item.id !== id
    )
    setTabs(newTabs);
  }

  return (
    <div className='center'>
      <h1> List :</h1>
      {tabs.map(data => 
        <div key={data.id}>
          <h3>{data.name}</h3>
          <form onSubmit={(e)=>handleUpdate(e, data.id)}>
            <input 
              name="update"
              className='input-form'
              defaultValue={data.name}
            />
            <button type='submit' className='btn'>
              Apply
            </button>
            <button 
              onClick={()=>handleDelete(data.id)} 
              className='btn-red'
            >
              Delete
            </button>
          </form>
        </div>
      )}
      <form onSubmit={handleAdd}>
        <h1> Add :</h1>
        <input 
          name="new"
          className='input-form'
          type='text'
          ref={resetInput}
        />
        <button 
          type='submit'
          className='btn'
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default Home
