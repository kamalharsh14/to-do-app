import { useState } from 'react';
import './App.css';
import favicon from './favicon.png';
import ToDoList from './Todolist';

function App() {
  
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("Deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) =>{
        return index !== id;
      })
    })
  };

  return (
    <div className="main">
          <div className="card">
            <br />
            <h1 className="header">
              <span className="logo">
                <img src={favicon} width={35} alt="" />
              </span> 
              To Do: 
            </h1>
            <br />
            <div className="input">
                <input type={"text"} value={inputList} placeholder={"Enter your task"} onChange={itemEvent}/> <button className="button" onClick={listOfItems}> + </button>
            </div>
            
            {items.map((itemsVal, index) => {
                return (
                  <ToDoList 
                    key = {index} 
                    id = {index}
                    text= {itemsVal}
                    onSelect = {deleteItems} 
                  />
                );}
              )
            }
          </div>
      </div>
  );
}

export default App;
