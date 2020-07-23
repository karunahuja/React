// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

const firstname="Karun";
const lastname="Ahuja";

console.log(`my name is ${firstname}`);
const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();
// ReactDOM.render('kya dikhana hai','kahan dikhana hai','callback func');
ReactDOM.render(
  //div or [ , ] if version above 16 is compulsary for multiple elements

  //We should use React fragment instead of div if version is before 16 as div will create extra div

  <React.Fragment>
    <h1>Hello {`My name is ${firstname} ${lastname}`}</h1>
    <p>Today date is {`${date}`}</p>
    <ol>
      <li>Time is {`${time}`}</li>
      <li>Extra circular</li>
      <li>Holo</li>
      <li>Love</li>
    </ol>
  </React.Fragment>

  ,


  document.getElementById('root'));

