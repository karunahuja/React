// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';


// ReactDOM.render('kya dikhana hai','kahan dikhana hai','callback func');
ReactDOM.render(
  //div or [ , ] is compulsary for multiple elements
  [
  <h1>Hello World!!</h1>,
  <p>The world is here</p>
  
  ]

  ,


  document.getElementById('root'));

