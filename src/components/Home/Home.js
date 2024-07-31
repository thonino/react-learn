import React, { useState, useRef } from 'react'

function Home() {

  // Reset input : useRef
  const rsInput = useRef(null)

  // show tab :
  const [tab, setTab] = useState([
    {id: 0, name: 'Livre'},
    {id: 1, name: 'Cahier'},
    {id: 2, name: 'Trousse'},
  ])

  // add : 
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = tab.length;
    const name = e.target.new.value;
    setTab([...tab, {id , name}]);
    if ( rsInput.current ) { rsInput.current.value = "";}
  }

  // update :
  const handleUpdate = (e, id) => {
    e.preventDefault();
    const name = e.target.update.value;
    const newTab = tab.map((item) => 
      item.id === id ? { name } : item 
    )
    setTab(newTab);
  }
  
  // delete :
  const handleDelete = (id) => {
    const newTab = tab.filter(item => item.id !== id)
    setTab(newTab);;
  }

  return (
    <div className='center'>
      <h1> List </h1>
      {tab.map((data) => 
        <div key={data.id} className='mt'>
          <form onSubmit={(e) => handleUpdate(e, data.id)}>
          {data.name}
            <input 
              type="text" 
              name="update" 
              className='input-form ms'
              defaultValue={data.name}
            />
            <button type="submit" className='btn'> Apply</button>
            <button 
              className='btn-red' 
              onClick={() => handleDelete(data.id)}
            > 
              Remove
            </button>
          </form>
        </div>
      )}
      <form onSubmit={handleSubmit} className='mt'>
        <h1> Add </h1>
        <input 
          type="text" 
          name="new" 
          className='input-form' 
          ref={rsInput} 
        />
        <button type="submit" className='btn'> Add</button>
      </form>
    </div>
  )
}

export default Home