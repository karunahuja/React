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
<div className="container">
  <div className="row">
    <div className="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
    </>
    )
}
export default App;


