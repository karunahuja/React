// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';

const firstname="Karun";
const lastname="Ahuja";

console.log(`my name is ${firstname}`);
const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300"
const img2="https://picsum.photos/250/300"
const img3="https://picsum.photos/240/300"

const heading={
  color:"yellow",
  textTransform:"capitalize",
  textAlign:"center",
  fontFamily:" 'Lobster', cursive"
}

const cssStyle={
  color:'green'
}

let curdate=new Date();
curdate=curdate.getHours();
let greeting=''
if(curdate>=1 && curdate<12){
  greeting='Good Morning';
  cssStyle.color="green"
}
else if(curdate>=12 && curdate<19){
  greeting="Good Afternoon"
  cssStyle.color="yellow"
}
else{
  greeting="Good Night"
  cssStyle.color="pink"
}




// ReactDOM.render('kya dikhana hai','kahan dikhana hai','callback func');
ReactDOM.render(
  //div or [ , ] if version above 16 is compulsary for multiple elements

  //We should use React fragment instead of div if version is before 16 as div will create extra div

  <React.Fragment>
    <h1 className="heading" style={heading}>Hello {`My name is ${firstname} ${lastname}`}</h1>
    <p>Today date is {`${date}`}</p>
    <ol>
      <li>Time is {`${time}`}</li>
      <li>Extra circular</li>
      <li>Holo</li>
      <li>Love</li>
    </ol>

    <div className="img_div">
    <img src={img1} alt=""></img>
    <img src={img2} alt=""></img>
    <img src={img3} alt=""></img></div>
    
  <h2 style={cssStyle}>Hello Sir, {greeting}</h2>

  <App></App>


  </React.Fragment>

  ,


  document.getElementById('root'));

