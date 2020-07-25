import React, { useState } from 'react';
import ToDoList from "./TodoList"

const App = () => {


    const[inputList,setInputList] =useState("");
    const[Items,setItems]=useState([]);

    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }

    const listOfItems=()=>{
        setItems((oldItems)=>{
            return[...oldItems,inputList]
        })

        setInputList("");
    }
    const deleteItems=(id)=>{

        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!=id;
            })
        })
        
    
    }

    return(
    <>
<ToDoList></ToDoList>
    </>
    )
}
export default App;


