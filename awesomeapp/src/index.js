// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import './index.css'
import * as ques from './App.jsx';

import Card from './Card.jsx';
import Sdata from './Sdata';

// ReactDOM.render('kya dikhana hai','kahan dikhana hai','callback func');
ReactDOM.render(
  //div or [ , ] if version above 16 is compulsary for multiple elements

  //We should use React fragment instead of div if version is before 16 as div will create extra div



  <React.Fragment>
  
  <h1>
  List of top 5 netflix series
   </h1>
   <Card imgsrc={Sdata[0].imgsrc} title={Sdata[0].title} sname={Sdata[0].sname} link={Sdata[0].link}></Card>
   <Card imgsrc={Sdata[1].imgsrc} title={Sdata[1].title} sname={Sdata[1].sname} link={Sdata[1].link}></Card>
   <Card imgsrc={Sdata[2].imgsrc} title={Sdata[2].title} sname={Sdata[2].sname} link={Sdata[2].link}></Card>

  </React.Fragment>


  ,


  document.getElementById('root'));

