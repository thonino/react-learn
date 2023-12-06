// SHOW
function Show({ nom }){
  const Show = () => { 
    alert(`Vous avez choisi : ${nom}`); 
  };

  return (
    <div className="container">
      <button  onClick={Show}className="btn btn-primary">
        Show
      </button>
    </div>
  );
}


export default Show;