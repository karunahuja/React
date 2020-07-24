import React,{useState} from 'react';


let date=new Date().toLocaleTimeString();

const App=()=>{
        // let name=['vi','no','d'];
    // const [vi,no,d]=name;
    
    // const [name1,name2,name3]=name;  
 
    
const state=useState();//return current data and updated data
const[count,setCount]=useState(date);//0 is initial value, count is current value(0) initially,set count is updated value and updated value becomes current value of count
    


    const IncNum=()=>{
        setCount(new Date().toLocaleTimeString());
        //  will not applicable in react       count++;
        
    }
    setInterval(() => {
        IncNum()
    }, 1000);
    
    return(
        <>
        <h1>{count}</h1>
      
        </>
    )

}

export default App;


