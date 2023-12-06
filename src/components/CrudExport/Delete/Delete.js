// DELETE
function Delete({  data, tabs, setTabs }){
  const handleDelete = () => {
    const newTabs = tabs.filter(  item => item.id !== data.id  );
    setTabs(newTabs);
  };

  return (
    <div className="container">
      <button  onClick={handleDelete} className="btn btn-danger" >
        Delete
      </button>
    </div>
  );
}

export default  Delete;