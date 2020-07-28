import React, { useState,useEffect} from 'react';
import {Route,Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './About'
import Menu from "./Menu"
import Contact from './Contact'
const App = () => {
  
        return(
        <>
        <Menu></Menu>
        <Switch>
            <Route exact path="/" component={About} ></Route>
            <Route exact path="/contact" component={Contact} ></Route>
            <Route exact path="/contact/name" component={Contact} ></Route>
            
        </Switch>
       </>)

}
export default App;



