import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const ToDoList=(props)=>{

    const [num,setNum]=useState(0);
    
    const incNum=()=>{
        setNum(num+1)
    }

    const decNum=()=>{
        if(num>0){
        setNum(num-1)
        }else{
            alert("Sorry,zero limit")
            setNum(0);
        }
    }
    return(
        <>
    <div className="main_div">
            <div className="center_div">
    
            
                <h1>{num}</h1>
            <div >
                    <Button onClick={incNum}><AddIcon></AddIcon></Button>
                    <Button onClick={decNum}>Decrem</Button>
            </div>
    </div></div>
        </>
        )
}

export default ToDoList;