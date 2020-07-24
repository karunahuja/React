// var React=require('react');
import React from 'react'; //writing in es6 as babel will convert it to browser compatible javascript 
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import './index.css'
import * as ques from './App.jsx';

import Card from './Card.jsx';
import Sdata from './Sdata';

const App = () => (
    <>
        {Sdata.map((val, index) => {
            return (


                <Card key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}></Card>
            );
        })}    </>



);

export default App;


