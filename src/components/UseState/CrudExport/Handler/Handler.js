//  Handler
import Tab from '../Tab/Tab';
import Add from "../Add/Add";
import Delete from "../Delete/Delete";
import Show from "../Show/Show";
import Edit from "../Edit/Edit";

function Handler() {
  const [tabs, setTabs] = Tab();
  const handleAdd = (newData) => {
    setTabs( [...tabs, newData ] );
  };
  return (
    <div>  
      <h1>Liste</h1>
      <ul>
        {tabs.map((data) => (
          <div key={data.id}>
            {data.nom}{" "}
            <Edit  data={data} tabs={tabs} setTabs={setTabs} />
            <Delete  data={data} tabs={tabs} setTabs={setTabs} />
            <Show nom={data.nom} />
          </div>
        ))}
      </ul>
      <Add tabs={tabs} setTabs={setTabs} />
    </div>
  );
}
export default Handler;