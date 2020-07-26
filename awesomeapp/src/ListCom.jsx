import React,{useState} from 'react';
import DeleteIcon from "@material-ui/icons/Delete"
const ListCom=(props)=>{

    const [line,setLine]=useState(false);


const cutIt=()=>{
    setLine(true);  
}

    return (
    <div>
   
<span onClick={cutIt}><DeleteIcon></DeleteIcon></span>
<li style={{textDecoration:line ?"line-through":"none"}}>{props.text}
</li>
</div>
    )
};
 
export default ListCom;