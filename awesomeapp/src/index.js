// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import './index.css'
import * as ques from './App.jsx';

import Card from './Card.jsx';


// ReactDOM.render('kya dikhana hai','kahan dikhana hai','callback func');
ReactDOM.render(
  //div or [ , ] if version above 16 is compulsary for multiple elements

  //We should use React fragment instead of div if version is before 16 as div will create extra div


  <React.Fragment>
   <Card imgsrc="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/23/903342-netflix-dark.jpg" title="A netflix originals" sname="dark" link="https://www.netflix.com/in/title/80100172"></Card>
   <Card imgsrc="https://asianwiki.com/images/4/47/Human_Class-KDH.jpg" title="A netflix originals" sname="Extra curricular" link="https://www.netflix.com/title/80990668"></Card>
   <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png" title="A netflix originals" sname="Stranger Things" link="https://www.netflix.com/title/80057281"></Card>
  

  </React.Fragment>


  ,


  document.getElementById('root'));

