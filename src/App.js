// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import TodoList from "./TodoLists";

const App = () =>{

      const [inputList, setInputList] = useState("");
      const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
       setInputList(event.target.value);

    };

    const listOfItems = () => {
      setItems((previousItem) =>{
        return [...previousItem, inputList];
      });

      setInputList("")

    };



  return(
    <>
    <div className="main_div">
      <div className="center_div">
      <br/>
      <h1> ToDo List </h1>
      <br/>

        <input type="text" placeholder="Text-Box" value={inputList} onChange={itemEvent} />
        <input type="number" placeholder="Date Time Field"/>
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* <li>{inputList}</li> */}
          <li>buy bottle</li>

         { Items.map( (itemval) =>{
            // return <li>{itemval}</li>
           return <TodoList text = {itemval}
            
            />;
          })
          }

          
          </ol>      

      </div>

    </div>
    
    </>
  )

  


};



export default App;
