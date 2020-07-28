import React,{useContext} from 'react'

import {FirstName,LastName} from "./App.jsx"
import ComponentC from "./ComponentC";
const ComponentB=()=>{
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
    return (<h1>My name is {fname}{lname} </h1>)
}

export default ComponentB;