import React,{useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
const [items, setItems] = useState([])
const [searchTerm, setSearchTerm] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((res) => res.json())
  .then((data) => setItems(data))
}, []);

const displayedItems = items.filter((item) => {
  return item.description.toLowerCase().includes(searchTerm.toLocaleLowerCase());
})

function handleDelete(itemToDelete) {
  const updatedItems = items.filter((item) => item.id !== itemToDelete.id);
  setItems(updatedItems)
}

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ListingsContainer
      items={displayedItems}
      handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
