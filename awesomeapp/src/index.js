// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';


// ReactDOM.render('kya dikhana hai','kahan dikhana hai','callback func');
ReactDOM.render(<h1>Hello World!!</h1>,
  document.getElementById('root'));
// jsx:-javascript exts or javascript xml


// Below is another method to render HTML with javascript

// var h1=document.createElement("h1");
// h1.innerHTML="karun Ahuja";
// document.getElementById("root").appendChild(h1)