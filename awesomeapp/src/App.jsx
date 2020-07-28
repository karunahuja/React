import React, { useState,useEffect} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './About'
import Menu from "./Menu"
import Contact from './Contact'
import Service from './Service.jsx'
import User from './User'
import Search from "./Search"
import Error from "./Error"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
//If we want to pass props use render method else use component method
const App = () => {
  
        return(
        <>
       <div className="container">
            <h1 className="text-center">Welcome</h1>
<br/>
<button className="btn btn-outline-success">Welcome to future</button>
       </div>
       </>)

}
export default App;



