import {useState} from 'react';

function Title() {
  const [title, setTitle] = useState(""); 
  const handleChange = (e) => {
    setTitle(e.target.value);
  }; 
  
  return (
    <div>
      <h1>Titre : {" "}
        <span className="success">
          {title}
        </span>
      </h1>
      <input 
        placeholder='Tapez le titre '
        onChange={handleChange}
        value={title}
      />
    </div>
  );
}

export default Title;
