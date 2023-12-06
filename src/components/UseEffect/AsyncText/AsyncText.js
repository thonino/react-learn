import { useEffect, useState} from 'react';

function AsyncText(){
  const [message, setMessage]= useState('Initial message')
  useEffect(()=>{
     const timer = setTimeout(() =>{
      setMessage('message mis à jour apres 3 secondes');
     }, 3000);
     return ()=>clearTimeout(timer);

  }, []);
  return (
    <div>
      <h1>Asynchronous Text</h1>
      <p>{message}</p>
            
    </div>
  );
}

export default AsyncText;
