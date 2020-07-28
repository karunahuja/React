import React, { useState,useEffect} from 'react';
import {Route,Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './About'
import Menu from "./Menu"
import Contact from './Contact'
import Service from './Service.jsx'
//If we want to pass props use render method else use component method
const App = () => {
  
        return(
        <>
        <Menu></Menu>
        <Switch>
        
            <Route exact path="/" component={()=>
                <About name="About"/>
            } ></Route>
            <Route exact path="/service" render={()=>
                <Service name="Service"/>
            } ></Route>
            <Route exact path="/contact" component={Contact} ></Route>
            <Route exact path="/contact/name" component={Contact} ></Route>
            
        </Switch>
       </>)

}
export default App;



