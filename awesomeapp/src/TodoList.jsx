import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
// import Clock from 'react-digital-clock';
import ListCom from './ListCom';

const ToDoList=()=>{
const [item,setItem]=useState("buy an apple");
const [newItem,setNewItem]=useState([])

const itemEvent=(event)=>{
    setItem(event.target.value);
}

const Listofitems=()=>{
    setNewItem((prevValue)=>{
        return [...prevValue,item];
    })
}



return (
<> 

<div>

<input type="text" name="" placeholder="Add items" onChange={itemEvent}></input>
<Button className="newBtn" onClick={Listofitems}><AddIcon/></Button>
  </div>  
  <br/>


<ol>
    {/* <li>{item}</li> */}
{
    newItem.map((val,index)=>{
        return <ListCom key={index} text={val}/>
    })
}
</ol>

</>    
    
    );
};

export default ToDoList;