import React,  { useState, useRef } from 'react'

function Home() {
  // Show :
  const [tabs, setTabs] = useState([
    {id: 0 , name : 'Maison'},
    {id: 1 , name : 'Voiture'},
    {id: 2 , name : 'Arbre'},
  ])

  //Reset input 1 :
  const rsInput = useRef(null)

  // Add :
  const handleSubmit =  (e) => {
    e.preventDefault();
    const id = tabs.length;
    const name = e.target.new.value;
    setTabs([...tabs, {id , name}])
    // Reset input 2 :
    if(rsInput.current){
      rsInput.current.value = ""
    }
  }

  // Update :
  const handleUpdate = (e, id) => {
    e.preventDefault();
    const name = e.target.update.value;
    const newTabs = tabs.map((item) =>
      item.id === id ? { ...item, name} : item
    );
    setTabs(newTabs);
  }

  // Delete :
  const handleDelete = (id => {
    const newTabs = tabs.filter( item =>
      item.id !== id
    )
    setTabs(newTabs)
  })


  return (
    <div className='center'>
      <h1> List </h1>
      {tabs.map((data) => 
        <div key={data.id} className='d-flex mt'>
          {data.name}
          <form onSubmit={(e)=>handleUpdate(e,data.id)}>
            <input 
              defaultValue={data.name} 
              name="update"
              className='input-form'
            />
            <button type="submit" className='btn'> 
              Apply
            </button>
            <button 
              onClick={()=> handleDelete(data.id)}
              className='btn-red'
            > 
              Remove
            </button>
          </form>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h1>  Add </h1>
        <input 
          name="new" 
          ref={rsInput}
          type="text" 
          className='input-form'
        />
        <button type="submit" className='btn'>
          Add
        </button>
      </form>
      
    </div>
  )
}

export default Home
