// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import './index.css'
import * as ques from './App.jsx';

import Card from './Card.jsx';
import Sdata from './Sdata';
import Netflix from './Netflix'
import Amazon from './Amazon'

const favSeries="netflix"
const FavS=()=>{

// if(favSeries=="netflix"){
//   return <Netflix></Netflix>

// }else{

//   return <Amazon></Amazon>
// }

}
const App = () => (
    <>
      {/* <FavS></FavS> */}
      
      {(favSeries=="netflix")?<Netflix/>:<Amazon></Amazon>}
       
       </>



);

export default App;


