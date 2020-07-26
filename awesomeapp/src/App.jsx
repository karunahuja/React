import React, { useState } from 'react';
import ToDoList from "./TodoList"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
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
<h1>Welcome to my channel</h1>
<button className="btn btn-success">Hey karun</button>
{/* copied from doc */}
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> 
    
    </>
    )
}
export default App;


