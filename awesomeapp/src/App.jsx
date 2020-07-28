import React, { useState,useEffect} from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
   const [num,setNum]=useState(0);
   const [nums,setNums]=useState(0);
   
   //use state  will be called everytime after render in index.js
   useEffect(()=>{
    alert("I am clicked");

   })

        return(
        <>
        
        <button onClick={()=>{setNum(num+1)


        }
        }>Click Me{num}</button>

        <br/>

        
<button onClick={()=>{setNums(nums+1)


}
}>Click Me{nums}</button>


       </> )


}
export default App;



