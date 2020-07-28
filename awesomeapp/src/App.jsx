import React, { useState,useEffect} from 'react';
import {Route,Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './About'
import Menu from "./Menu"
import Contact from './Contact'
import Service from './Service.jsx'
import User from './User'
import Search from "./Search"
import Error from "./Error"
//If we want to pass props use render method else use component method
const App = () => {
  
        return(
        <>
        <Menu></Menu>
        <Switch>
        
            <Route exact path="/" component={()=>
                <About name="About"/>
            } ></Route>
            <Route exact path="/Search" component={()=>
                <Search/>
            } ></Route>
            <Route exact path="/service" render={()=>
                <Service name="Service"/>
            } ></Route>
            <Route exact path="/contact" component={Contact} ></Route>
            <Route path="/contact/:fname" component={User} ></Route>
            <Route  component={Error} ></Route>
            
        </Switch>
       </>)

}
export default App;



