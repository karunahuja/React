 import React from 'react';

 function App(){
  
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
return(
<>
<h1 className="heading" >Hello {`My name is ${firstname} ${lastname}`}</h1>
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

<h2>Hello Sir, {greeting}</h2>


</>
)
 }


export default App;