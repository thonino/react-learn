import React, { useState, useRef} from 'react'

function Home() {

  // Show :
  const [tab, setTab] = useState([
    { id: 0, name: 'Salon'},
    { id: 1, name: 'Cuisine'},
    { id: 2, name: 'Chambre'},
  ])

  // Ref for the new input field
  const resetInput = useRef(null);

  // Add :
  const handleSubmit = (e)=>{
    e.preventDefault();
    const id = tab.length;
    const name = e.target.new.value;
    setTab([...tab, { id , name}])
  
    // Reset the input field
  if (resetInput.current) { resetInput.current.value = '';}
  }

  // Update :
  const [update, setUpdate] = useState();
  const handleUpdate = (data) => {
    const newTab = tab.map((item)=>
      item.id === data.id ? {...item, name: update} : item
    );
    setTab(newTab);
  }

  // Delete :
  const handleDelete = (data) => {
    const newTab = tab.filter((item) => item.id !== data.id);
    setTab(newTab);
  }
  return (
    <div className='center'>
      <h1>Liste pieces</h1>
        {tab.map((data)=>
      <div key={data.id} className='mt'> 
        {data.name} 
          <input 
            className='input-form ms' 
            defaultValue={update ? update : data.name}
            onChange={(e)=>setUpdate(e.target.value)}
          />
          <button className='btn' onClick={()=>handleUpdate(data)}>
            Apply
          </button>
          <button className='btn-red ms' onClick={()=>handleDelete(data)}> 
            Remove
          </button>
      </div>
      )}
      <form onSubmit={handleSubmit}>
        <h1> Ajouter Piece</h1>
        <input 
          type="text" 
          className='input-form' 
          name="new" 
          ref={resetInput}
        />
        <button type="submit" className='btn'> Add</button>
      </form>
    </div>
  )
}

export default Home

// Ref for the new input field
// const resetInput = useRef(null);

// Reset the input field
//   if (resetInput.current) { resetInput.current.value = '';}
//   }

// ref={resetInput}
