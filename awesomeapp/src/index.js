// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import './index.css'
import * as ques from './App.jsx';

// ReactDOM.render('kya dikhana hai','kahan dikhana hai','callback func');
ReactDOM.render(
  //div or [ , ] if version above 16 is compulsary for multiple elements

  //We should use React fragment instead of div if version is before 16 as div will create extra div


<React.Fragment>

  <ol>
    <li>{ques.add(40,4)}</li>
    <li>{ques.subtract(30,3)}</li>
    <li>{ques.multiply(40,4)}</li>
    <li>{ques.divide(30,4)}</li>

  </ol>


</React.Fragment>


  ,


  document.getElementById('root'));

