import React from 'react'

import {FirstName,LastName} from "./App.jsx"
const ComponentC=()=>{

    return(<>
        <FirstName.Consumer>{(fname)=>{
        
        return(<LastName.Consumer>{(lname)=>{

return(
            <h1>My name is {fname}{lname}</h1>
);
        }}
       

</LastName.Consumer>)

        }}</FirstName.Consumer>
  
   </> );
    }

export default ComponentC;