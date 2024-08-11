import React, { useState, useRef } from 'react'

function Home() {
  // Show :
  const [tabs, setTabs] = useState([
    {id : 0 , name : 'Geographie'},
    {id : 1 , name : 'Histoire'},
    {id : 2 , name : 'Mathematique'},
  ])

  // Reset input 1 :
  const resetInput = useRef(null);
  
  // Add :
  const handleSubmit = (e) => {
    e.preventDefault();
    const id =  tabs.strength;
    const name = e.target.new.value;
    setTabs([...tabs, { id , name}])
    if(resetInput.current){
      resetInput.current.value = ""
    }
  }

  // Update :
  const handleUpdate = (e, id) => {
    e.preventDefault();
    const name = e.target.update.value;
    const newTabs = tabs.map((item) => 
      item.id === id ? { ...item, name} : item
    )
    setTabs(newTabs);
  }
  // Delete :
  const handleDelete = (id) => {
    const newTabs = tabs.filter((item) => item.id !== id);
    setTabs(newTabs)
  }

  return (
    <div className="center">
      <h1> List </h1>
      {tabs.map((data) => 
      <div key={data.id} className='mt'>
        <h3>{data.name}</h3>
        <form 
          onSubmit={(e)=>handleUpdate(e, data.id)}
        >
          <input 
            defaultValue={data.name}
            name='update'
            className="input-form"
          />
          <button type="submit" className="btn">
            Apply
          </button>
          <button 
            onClick={()=>handleDelete(data.id)} 
            className="btn-red ms"
          >
            Remove
          </button>
        </form>
      </div>
      )}
      <form onSubmit={handleSubmit}>
        <h1> Add</h1>
        <input 
          type="text" 
          className="input-form"
          name="new"
          ref={resetInput}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  )
}

export default Home
