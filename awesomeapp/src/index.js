// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import './index.css'
import * as ques from './App.jsx';

import Card from './Card.jsx';
import Sdata from './Sdata';

function ncard(val){

  return(
    
   <Card imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link}></Card>
  
  );

}


// ReactDOM.render('kya dikhana hai','kahan dikhana hai','callback func');
ReactDOM.render(
  //div or [ , ] if version above 16 is compulsary for multiple elements

  //We should use React fragment instead of div if version is before 16 as div will create extra div




  <React.Fragment>
  
  <h1>
  List of top 5 netflix series
  </h1>
  
   { Sdata.map(ncard)}

  </React.Fragment>


  ,


  document.getElementById('root'));

