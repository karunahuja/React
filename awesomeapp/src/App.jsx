import React,{useState} from 'react';




const App=()=>{
        // let name=['vi','no','d'];
    // const [vi,no,d]=name;
    
    // const [name1,name2,name3]=name;  
    
const state=useState();//return current data and updated data
const[count,setCount]=useState(0);//0 is initial value, count is current value(0) initially,set count is updated value and updated value becomes current value of count
    


    const IncNum=()=>{
        setCount(count+1);
        //  will not applicable in react       count++;
        
    }
    
    return(
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click me</button>
        </>
    )

}

export default App;


