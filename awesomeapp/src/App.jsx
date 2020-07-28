import React, { createContext } from 'react';
import ComponentA from './ComponentA'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const FirstName=createContext();
const LastName=createContext();

const App = () => {
   
        return(

            <FirstName.Provider value={"Karun"}>
            <LastName.Provider value={"Ahuja"}>
            <ComponentA></ComponentA>
            </LastName.Provider>
 


            </FirstName.Provider>
            
        )


}
export default App;
export {FirstName,LastName};


